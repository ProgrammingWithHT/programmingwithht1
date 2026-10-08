const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

function readMongoUrl() {
  const envPath = path.join(process.cwd(), '.env');
  const envText = fs.readFileSync(envPath, 'utf8');
  const match = envText.match(/^MONGODB_URL=(.*)$/m);

  if (!match) {
    throw new Error('MONGODB_URL was not found in .env');
  }

  return match[1].trim();
}

function normalizeEmail(email) {
  if (typeof email !== 'string') {
    return null;
  }

  const normalizedEmail = email.trim().toLowerCase();
  return normalizedEmail.length > 0 ? normalizedEmail : null;
}

async function main() {
  const shouldApply = process.argv.includes('--apply');
  const mongoUrl = readMongoUrl();

  await mongoose.connect(mongoUrl, { serverSelectionTimeoutMS: 15000 });

  try {
    const usersCollection = mongoose.connection.db.collection('users');
    const docs = await usersCollection
      .find({}, { projection: { email: 1 } })
      .toArray();

    const groups = new Map();
    const invalidDocs = [];

    for (const doc of docs) {
      const normalizedEmail = normalizeEmail(doc.email);

      if (!normalizedEmail) {
        invalidDocs.push(doc._id.toString());
        continue;
      }

      const records = groups.get(normalizedEmail) ?? [];
      records.push({
        id: doc._id,
        idText: doc._id.toString(),
        email: doc.email,
        normalizedEmail,
      });
      groups.set(normalizedEmail, records);
    }

    const duplicateGroups = [];
    const updateOps = [];
    const deleteIds = [];

    for (const [normalizedEmail, records] of groups.entries()) {
      records.sort((left, right) => left.idText.localeCompare(right.idText));

      const [keeper, ...duplicates] = records;

      if (keeper.email !== normalizedEmail) {
        updateOps.push({
          updateOne: {
            filter: { _id: keeper.id },
            update: { $set: { email: normalizedEmail } },
          },
        });
      }

      for (const duplicate of duplicates) {
        deleteIds.push(duplicate.id);
      }

      if (records.length > 1) {
        duplicateGroups.push({
          normalizedEmail,
          keep: keeper.idText,
          remove: duplicates.map((record) => record.idText),
        });
      }
    }

    const emailIndexes = (await usersCollection.indexes()).filter(
      (index) => index.key && index.key.email === 1,
    );

    const summary = {
      totalUsers: docs.length,
      duplicateEmailGroups: duplicateGroups.length,
      duplicateRowsToRemove: deleteIds.length,
      emailsToNormalize: updateOps.length,
      invalidEmailDocs: invalidDocs.length,
      emailIndexes,
      duplicateGroups,
      invalidDocs,
      mode: shouldApply ? 'apply' : 'dry-run',
    };

    console.log(JSON.stringify(summary, null, 2));

    if (!shouldApply) {
      console.log('\nRun `npm run db:repair-user-email -- --apply` to remove duplicates and recreate the unique email index.');
      return;
    }

    if (invalidDocs.length > 1) {
      throw new Error(
        'Multiple documents have missing or invalid email values. Fix them before creating a unique email index.',
      );
    }

    if (updateOps.length > 0) {
      await usersCollection.bulkWrite(updateOps, { ordered: true });
    }

    if (deleteIds.length > 0) {
      await usersCollection.deleteMany({ _id: { $in: deleteIds } });
    }

    for (const index of emailIndexes) {
      if (!index.unique) {
        await usersCollection.dropIndex(index.name);
      }
    }

    await usersCollection.createIndex({ email: 1 }, { unique: true, name: 'email_1' });
    console.log('\nUnique index on `email` created successfully.');
  } finally {
    await mongoose.disconnect();
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});

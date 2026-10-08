// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const speakeasy = require('speakeasy');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Endpoint to generate secret
app.post('/api/generate-secret', (req, res) => {
    const secret = speakeasy.generateSecret({ name: 'HamzaTahir' });
    res.json(secret);  //saved this to database
});

// Endpoint to verify code
app.post('/api/verify-code', (req, res) => {
    const { token } = req.body;
    const isVerified = speakeasy.totp.verify({
        // secret: secret.base32,
        secret: "FJYWMVROLIRV2JBPG5IVI4CNMUUSGUBJOMXWWTSSFFJG23DCNFWQ",  //getting this token from database and the comparte
        encoding: 'base32',
        token,
        window: 1,
    });
    res.json({ isVerified });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

const { S3Client, GetObjectCommand, PutObjectCommand, ListObjectsCommand, DeleteObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");


const s3Client = new S3Client({
  region: "eu-north-1",
  credentials: {
    accessKeyId: "AKIAVRIDM5WH2IQZ3T7N",
    secretAccessKey: "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",
  },
});

// async function getObjectURL(Key) {
//   const command = new GetObjectCommand({
//     Bucket: "hello-app3163",
//     Key: Key,
//   });
//   const url = await getSignedUrl(s3Client, command);
//   return url; 
// }
async function getObjectURL(Key) {
  const command = new GetObjectCommand({
    Bucket: "hamza-private3163",
    Key: Key,
  });
  const url = await getSignedUrl(s3Client, command);
  return url; 
}

async function putObject(filename, contentType){
  const command = new PutObjectCommand({
    Bucket: "hamza-private3163",
    Key: `upload/user-uploads/${filename}`,
    ContentType: contentType
  });
  const url = await getSignedUrl(s3Client, command);
  return url;
}

async function listObjects() {
  const command = new ListObjectsCommand({
    Bucket: "hamza-private3163",
    Key: 'upload/user-uploads/'
  });
  const result = await s3Client.send(command);
  return result;
}

async function deleteObject(Key) {
  const command = new DeleteObjectCommand({
    Bucket: "hamza-private3163",
    Key: Key
  });
  const result = await s3Client.send(command);
  return result;
}

async function init() {
    // console.log("URL for getting files", await getObjectURL("signature hamza.png"));
    // console.log("URL for deleting files", await deleteObject("signature hamza.png"));

    console.log("URL for uploading files", await putObject("file.txt", "text/plain"));   //he generates a signed URL you can go to postman using put method and upload the file using this URL
    // console.log("URL for uploading files", await putObject("video.mp4", "video/mp4"));
    // console.log("URL for getting files", await getObjectURL("upload/user-uploads/file.txt"));
    // console.log("URL for getting LISTING files", await listObjects());
    // console.log("URL for deleting files", await deleteObject("upload/user-uploads/file.txt"));
}
init();
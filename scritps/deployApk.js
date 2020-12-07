import dotenv from 'dotenv';
dotenv.config();
import AWS from 'aws-sdk';
import fs from 'fs';

const apkNames = [
  'app-x86-release.apk',
  'app-x86_64-release.apk',
  'app-armeabi-v7a-release.apk',
  'app-arm64-v8a-release.apk',
];

const apkPath = './android/app/build/outputs/apk/release';

const s3 = new AWS.S3({
  endpoint: process.env.DO_SPACES_ENDPOINT,
  accessKeyId: process.env.DO_SPACES_KEY,
  secretAccessKey: process.env.DO_SPACES_SECRET,
  nameSpace: process.env.DO_SPACES_NAME,
});

(async () => {
  for (let i = 0; i <= apkNames.length; i++) {
    let file = fs.readFileSync(apkPath + apkNames[i]);

    s3.putObject(
      {
        Bucket: process.env.DO_SPACES_NAME,
        Key: apkPath + apkNames[i],
        Body: file,
        ACL: 'public-read',
      },
      (err, data) => {
        if (err) {
          return console.log(err);
        }
        console.log('Your file has been uploaded successfully!', data);
      },
    );

    s3.putObjectAcl;
  }
})();

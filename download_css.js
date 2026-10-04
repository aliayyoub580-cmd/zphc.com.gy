import fs from 'fs';
import path from 'path';
import https from 'https';

const files = [
  { url: 'https://zphc.com/css/style.css?v=1.0.16', dest: 'public/css/style.css' },
  { url: 'https://zphc.com/css/bootstrap.min.css', dest: 'public/css/bootstrap.min.css' }
];

async function download(file) {
  const dir = path.dirname(file.dest);
  fs.mkdirSync(dir, { recursive: true });

  return new Promise((resolve) => {
    https.get(file.url, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    }, (res) => {
      const stream = fs.createWriteStream(file.dest);
      res.pipe(stream);
      stream.on('finish', () => {
        stream.close();
        console.log('Saved:', file.dest, fs.statSync(file.dest).size, 'bytes');
        resolve();
      });
    }).on('error', (err) => {
      console.log('Error', err);
      resolve();
    });
  });
}

(async () => {
  for (const f of files) {
    await download(f);
  }
})();

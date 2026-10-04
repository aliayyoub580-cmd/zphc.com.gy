const fs = require('fs');
const path = require('path');
const https = require('https');

const urls = [
  '/images/z-logo.svg',
  '/images/logo-footer.svg',
  '/images/globe-panda.png',
  '/images/icons/tg-icon.svg',
  '/images/icons/fb-icon.svg',
  '/images/icons/tw-icon.svg',
  '/images/icons/yt-icon.svg',
  '/images/icons/ig-icon.svg',
  '/images/icons/re-icon.svg',
  '/images/icons/vk-icon.svg',
  '/images/icons/t-icon.svg',
  '/images/icons/te-icon.svg',
  '/images/icons/convert-icon.svg',
  '/images/favicon-32x32.png',
  '/images/favicon-16x16.png'
];

async function download(urlPath) {
  const fullUrl = 'https://zphc.com' + urlPath;
  const localPath = path.join('public', urlPath.replace(/^\//, ''));
  const dir = path.dirname(localPath);
  fs.mkdirSync(dir, { recursive: true });

  return new Promise((resolve) => {
    https.get(fullUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, (res) => {
      if (res.statusCode === 200) {
        const file = fs.createWriteStream(localPath);
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log('Downloaded:', urlPath, '(' + fs.statSync(localPath).size + ' bytes)');
          resolve();
        });
      } else {
        console.log('Failed (' + res.statusCode + '):', urlPath);
        resolve();
      }
    }).on('error', (err) => {
      console.log('Error downloading', urlPath, err.message);
      resolve();
    });
  });
}

(async () => {
  for (const u of urls) {
    await download(u);
  }
  console.log('All icons and logos downloaded!');
})();

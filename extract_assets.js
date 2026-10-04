const fs = require('fs');
const path = require('path');
const https = require('https');

const html = fs.readFileSync('original_index.html', 'utf8');
const css = fs.existsSync('assets_orig/style.css') ? fs.readFileSync('assets_orig/style.css', 'utf8') : '';

const regex = /(?:src|href|data-full-src|data-low-src|data-sources|url)\s*[:=]\s*["']?([^"'()\s>]+\.(?:png|jpg|jpeg|webp|svg|gif|ico|woff|woff2|ttf))/gi;

const urls = new Set();
let match;

while ((match = regex.exec(html)) !== null) {
  urls.add(match[1]);
}
while ((match = regex.exec(css)) !== null) {
  urls.add(match[1]);
}

// Also check json strings in data-sources
const jsonMatch = html.match(/data-sources='([^']+)'/);
if (jsonMatch) {
  try {
    const list = JSON.parse(jsonMatch[1]);
    list.forEach(u => urls.add(u));
  } catch (e) {}
}

const urlList = Array.from(urls).map(u => {
  let clean = u.replace(/^[./]+/, '/');
  if (!clean.startsWith('/')) clean = '/' + clean;
  return clean;
});

console.log('Found', urlList.length, 'asset URLs');
fs.writeFileSync('assets_orig/found_urls.json', JSON.stringify(urlList, null, 2));

async function download(urlPath) {
  const fullUrl = 'https://zphc.com' + urlPath;
  const localPath = path.join('public', urlPath.replace(/^\//, ''));
  const dir = path.dirname(localPath);
  fs.mkdirSync(dir, { recursive: true });

  if (fs.existsSync(localPath) && fs.statSync(localPath).size > 0) {
    return;
  }

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
          console.log('Downloaded:', urlPath);
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
  for (const u of urlList) {
    await download(u);
  }
  console.log('Done downloading assets!');
})();

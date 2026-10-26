const http = require('http');
const fs = require('fs');
const path = require('path');

const root = __dirname;
const port = Number(process.env.PORT || 3000);
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

function safeFile(urlPath) {
  const decoded = decodeURIComponent((urlPath || '/').split('?')[0]);
  const relative = decoded === '/' ? 'index.html' : decoded.replace(/^\/+/, '');
  const resolved = path.resolve(root, relative);
  return resolved.startsWith(root + path.sep) ? resolved : null;
}

const server = http.createServer((req, res) => {
  const file = safeFile(req.url);
  if (!file) return res.writeHead(403).end('Forbidden');
  fs.stat(file, (error, stat) => {
    const target = !error && stat.isFile() ? file : path.join(root, 'index.html');
    fs.readFile(target, (readError, data) => {
      if (readError) return res.writeHead(500).end('Unable to read application');
      const type = mime[path.extname(target).toLowerCase()] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': type, 'Cache-Control': 'no-cache' });
      res.end(data);
    });
  });
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Jurnale preview listening on 0.0.0.0:${port}`);
});

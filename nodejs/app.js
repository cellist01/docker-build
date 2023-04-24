const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // 루트 경로에 대한 처리
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, world!');

  } else if (req.url === '/users') {
    // 사용자 목록에 대한 처리
    const users = ['Alice', 'Bob', 'Charlie'];
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(users));
  } else if (req.url === '/ip') {
    // ip 호출
    const serverIp = Object.values(os.networkInterfaces())
      .flat()
      .filter((iface) => iface.family === 'IPv4' && !iface.internal)
      .map((iface) => iface.address)[0];

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ ip: serverIp }));
  } else {
    // 정의되지 않은 경로에 대한 처리
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});


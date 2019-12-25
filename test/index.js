var websockify = require('@maximegris/node-websockify');
websockify({
  source: '127.0.0.1:8080',
  target: '192.168.0.100:5900'
});

setTimeout(() => {
  process.exit(0);
}, 5000);
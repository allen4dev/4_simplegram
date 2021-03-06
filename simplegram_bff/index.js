const http = require('http');

const app = require('./server/app');

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(PORT, () => console.log(`Server running in port: ${PORT}`));

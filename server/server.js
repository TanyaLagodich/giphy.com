const http = require('http');
const axios = require('axios');
const app = require('./app');
const PORT = 3000;

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
});



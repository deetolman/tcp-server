const { createServer } = require('net');

const server = createServer(client => {
  client.on('data', (data) => {
    console.log(`client: ${data}`);
  });
});

server.listen(7890, () => console.log('server bound'));


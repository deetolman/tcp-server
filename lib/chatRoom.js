const shortid = require('shortid');

class chatRoom {
  constructor() {
    this.clients = new Map();
    this.clients = {};
    this.userCount = 0;
  }
  
  add(client) {
    this.userCount++;
    const username = shortid.generator();
    client.username = username;
    this.clients.set(client.username, client);
    return client;
  };
  getClient(username) {
    // getClient(username) = thisClient
    return this.clients.get(username);
  }
  rename(oldName, newName) {
  }
  all() {

  }
}
module.exports = chatRoom;
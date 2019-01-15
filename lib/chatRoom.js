const shortid = require('shortid');

class ChatRoom {
  constructor() {
    this.clients = new Map();
    this.userCount = 0;
  }
  
  add(client) {
    const username = shortid.generate();
    client.username = username;
    this.clients.set(client.username, client);
    return client;
  }
  
  getClient(username) {
    return this.clients.get(username);
  }
  rename(oldName, newName) {
    const client = this.clients.get(oldName);
    const deleted = this.clients.delete(oldName);
    this.client.set(newName, client);
    return deleted;
  }
}
module.exports = ChatRoom;

const ChatRoom = require('../lib/chatRoom');

describe('Chatroom', () => {
  let chatRoom = null;
  beforeEach(() => {
    chatRoom = new ChatRoom();
  });
  it('can add a client', () => {
    const client = {};
    //call the chatroom.add(client)
    chatRoom.add(client);
    //expect client.username is defined
    expect(client.username).toBeDefined();
  });
  // it('get client', () => {
  //   const client = {};
  //   chatRoom.get(client);
  //   expect(client.username).toBeDefined();
  // });
  it('rename new user', () => {
    const client = {};
    chatRoom.add(client);
    const oldName = client.username;
    expect(chatRoom.rename(client.username, 'new')).toBeTruthy();
    expect(client.username).toEqual('new');
    expect(chatRoom.getClient(oldName)).toBeFalsy();
  });
});

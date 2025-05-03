const assert = require('assert');
const UserService = require('../../services/UserService');

describe('UserService', () => {
  let service;

  beforeEach(() => {
    service = new UserService();
  });

  it('should create a user', () => {
    const user = { id: '1', name: 'Alice', email: 'alice@example.com' };
    const created = service.createUser(user);
    assert.strictEqual(created.name, 'Alice');
  });

  it('should get a user by ID', () => {
    const user = { id: '2', name: 'Bob', email: 'bob@example.com' };
    service.createUser(user);
    const found = service.getUserById('2');
    assert.strictEqual(found.email, 'bob@example.com');
  });

  it('should delete a user', () => {
    const user = { id: '3', name: 'Eve', email: 'eve@example.com' };
    service.createUser(user);
    service.deleteUser('3');
    assert.throws(() => service.getUserById('3'), /not found/);
  });
});

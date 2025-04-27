const UserRepository = require('../UserRepository');

class InMemoryUserRepository extends UserRepository {
  constructor() {
    super();
    this.storage = new Map(); // In-memory storage for User objects
  }

  save(user) {
    if (!user.id) throw new Error('User must have an ID');
    this.storage.set(user.id, user);
  }

  findById(id) {
    return this.storage.get(id) || null;
  }

  findAll() {
    return Array.from(this.storage.values());
  }

  delete(id) {
    this.storage.delete(id);
  }
}

module.exports = InMemoryUserRepository;

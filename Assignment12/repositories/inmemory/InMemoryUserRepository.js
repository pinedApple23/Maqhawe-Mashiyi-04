class InMemoryUserRepository {
  constructor() {
    this.users = new Map();
  }

  save(user) {
    this.users.set(user.id, user);
    return user;
  }

  findById(id) {
    return this.users.get(id) || null;
  }

  findAll() {
    return Array.from(this.users.values());
  }

  delete(id) {
    this.users.delete(id);
  }
}

module.exports = InMemoryUserRepository;

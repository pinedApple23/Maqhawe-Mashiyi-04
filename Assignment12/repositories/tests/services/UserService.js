// repositories/tests/services/UserService.js
const RepositoryFactory = require('../../factories/repositoryFactory');

class UserService {
  constructor(storageType = 'MEMORY') {
    this.userRepo = RepositoryFactory.getUserRepository(storageType);
  }

  createUser(user) {
    if (!user.id || !user.name || !user.email) {
      throw new Error('User must have id, name, and email');
    }
    this.userRepo.save(user);
    return user;
  }

  getUserById(id) {
    const user = this.userRepo.findById(id);
    if (!user) {
      throw new Error(`User with ID ${id} not found`);
    }
    return user;
  }

  getAllUsers() {
    return this.userRepo.findAll();
  }

  deleteUser(id) {
    this.userRepo.delete(id);
  }
}

module.exports = UserService;

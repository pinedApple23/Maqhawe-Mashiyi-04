// /repositories/factories/repositoryFactory.js

const InMemoryUserRepository = require('../inmemory/InMemoryUserRepository');
const InMemoryJobPostRepository = require('../inmemory/InMemoryJobPostRepository');
const InMemoryApplicationRepository = require('../inmemory/InMemoryApplicationRepository');

// Future: You can add imports for FileSystemUserRepository, DatabaseUserRepository, etc.

class RepositoryFactory {
  static getUserRepository(storageType = 'MEMORY') {
    switch (storageType) {
      case 'MEMORY':
        return new InMemoryUserRepository();
      // case 'FILESYSTEM':
      //   return new FileSystemUserRepository();
      default:
        throw new Error(`Unknown storage type: ${storageType}`);
    }
  }

  static getJobPostRepository(storageType = 'MEMORY') {
    switch (storageType) {
      case 'MEMORY':
        return new InMemoryJobPostRepository();
      // case 'FILESYSTEM':
      //   return new FileSystemJobPostRepository();
      default:
        throw new Error(`Unknown storage type: ${storageType}`);
    }
  }

  static getApplicationRepository(storageType = 'MEMORY') {
    switch (storageType) {
      case 'MEMORY':
        return new InMemoryApplicationRepository();
      // case 'FILESYSTEM':
      //   return new FileSystemApplicationRepository();
      default:
        throw new Error(`Unknown storage type: ${storageType}`);
    }
  }
}

module.exports = RepositoryFactory;

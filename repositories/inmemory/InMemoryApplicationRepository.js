const ApplicationRepository = require('../ApplicationRepository');

class InMemoryApplicationRepository extends ApplicationRepository {
  constructor() {
    super();
    this.storage = new Map(); // In-memory storage for Application objects
  }

  save(application) {
    if (!application.id) throw new Error('Application must have an ID');
    this.storage.set(application.id, application);
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

module.exports = InMemoryApplicationRepository;

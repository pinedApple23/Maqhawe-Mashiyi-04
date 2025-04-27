const JobPostRepository = require('../JobPostRepository');

class InMemoryJobPostRepository extends JobPostRepository {
  constructor() {
    super();
    this.storage = new Map(); // In-memory storage for JobPost objects
  }

  save(jobPost) {
    if (!jobPost.id) throw new Error('JobPost must have an ID');
    this.storage.set(jobPost.id, jobPost);
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

module.exports = InMemoryJobPostRepository;

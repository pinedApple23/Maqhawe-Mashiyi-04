const RepositoryFactory = require('../../factories/repositoryFactory');


class ApplicationService {
  constructor(storageType = 'MEMORY') {
    this.applicationRepo = RepositoryFactory.getApplicationRepository(storageType);
    this.jobPostRepo = RepositoryFactory.getJobPostRepository(storageType);
    this.userRepo = RepositoryFactory.getUserRepository(storageType);
  }

  applyToJob(application) {
    const { id, userId, jobPostId } = application;

    if (!id || !userId || !jobPostId) {
      throw new Error('Application must have id, userId, and jobPostId');
    }

    // Check user exists
    const user = this.userRepo.findById(userId);
    if (!user) throw new Error(`User with ID ${userId} does not exist`);

    // Check job post exists
    const job = this.jobPostRepo.findById(jobPostId);
    if (!job) throw new Error(`JobPost with ID ${jobPostId} does not exist`);

    // Optional: enforce rule e.g., prevent duplicate applications

    this.applicationRepo.save(application);
    return application;
  }

  getApplicationById(id) {
    const app = this.applicationRepo.findById(id);
    if (!app) throw new Error(`Application with ID ${id} not found`);
    return app;
  }

  getAllApplications() {
    return this.applicationRepo.findAll();
  }

  deleteApplication(id) {
    this.applicationRepo.delete(id);
  }
}

module.exports = ApplicationService;

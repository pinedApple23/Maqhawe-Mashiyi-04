// repositories/tests/services/JobPostService.js
const RepositoryFactory = require('../../factories/repositoryFactory');

class JobPostService {
  constructor(storageType = 'MEMORY') {
    this.jobPostRepo = RepositoryFactory.getJobPostRepository(storageType);
  }

  createJobPost(jobPost) {
    if (!jobPost.id || !jobPost.title || !jobPost.description || !jobPost.employerId) {
      throw new Error('JobPost must have id, title, description, and employerId');
    }
    this.jobPostRepo.save(jobPost);
    return jobPost;
  }

  getJobPostById(id) {
    const post = this.jobPostRepo.findById(id);
    if (!post) {
      throw new Error(`JobPost with ID ${id} not found`);
    }
    return post;
  }

  getAllJobPosts() {
    return this.jobPostRepo.findAll();
  }

  deleteJobPost(id) {
    this.jobPostRepo.delete(id);
  }
}

module.exports = JobPostService;

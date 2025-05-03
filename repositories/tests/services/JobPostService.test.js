const assert = require('assert');
const JobPostService = require('../../services/JobPostService');

describe('JobPostService', () => {
  let service;

  beforeEach(() => {
    service = new JobPostService();
  });

  it('should create a job post', () => {
    const job = { id: 'j1', title: 'Frontend Developer', company: 'TechCorp' };
    const created = service.createJobPost(job);
    assert.strictEqual(created.title, 'Frontend Developer');
  });

  it('should get a job post by ID', () => {
    const job = { id: 'j2', title: 'Backend Developer', company: 'DevWorks' };
    service.createJobPost(job);
    const found = service.getJobPostById('j2');
    assert.strictEqual(found.company, 'DevWorks');
  });

  it('should update a job post', () => {
    const job = { id: 'j3', title: 'Intern', company: 'Startup' };
    service.createJobPost(job);
    const updated = service.updateJobPost('j3', { title: 'Junior Developer' });
    assert.strictEqual(updated.title, 'Junior Developer');
  });

  it('should delete a job post', () => {
    const job = { id: 'j4', title: 'QA Tester', company: 'Quality Inc' };
    service.createJobPost(job);
    service.deleteJobPost('j4');
    assert.throws(() => service.getJobPostById('j4'), /not found/);
  });
});

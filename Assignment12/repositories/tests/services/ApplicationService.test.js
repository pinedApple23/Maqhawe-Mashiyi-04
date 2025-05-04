const assert = require('assert');
const ApplicationService = require('../../services/ApplicationService');
const JobPostService = require('../../services/JobPostService');
const UserService = require('../../services/UserService');

describe('ApplicationService', () => {
  let appService, userService, jobService;

  beforeEach(() => {
    appService = new ApplicationService();
    userService = new UserService();
    jobService = new JobPostService();

    // Seed data
    userService.createUser({ id: 'u1', name: 'Alice', email: 'alice@example.com' });
    jobService.createJobPost({ id: 'j1', title: 'Software Engineer', company: 'DevCorp' });
  });

  it('should create an application', () => {
    const app = {
      id: 'a1',
      userId: 'u1',
      jobPostId: 'j1',
      coverLetter: 'I am passionate about code!'
    };
    const created = appService.applyToJob(app);
    assert.strictEqual(created.coverLetter, 'I am passionate about code!');
  });

  it('should throw if user does not exist', () => {
    const badApp = {
      id: 'a2',
      userId: 'uX',
      jobPostId: 'j1'
    };
    assert.throws(() => appService.applyToJob(badApp), /User with ID uX does not exist/);
  });

  it('should throw if job post does not exist', () => {
    const badApp = {
      id: 'a3',
      userId: 'u1',
      jobPostId: 'jX'
    };
    assert.throws(() => appService.applyToJob(badApp), /JobPost with ID jX does not exist/);
  });

  it('should delete an application', () => {
    const app = {
      id: 'a4',
      userId: 'u1',
      jobPostId: 'j1'
    };
    appService.applyToJob(app);
    appService.deleteApplication('a4');
    assert.throws(() => appService.getApplicationById('a4'), /not found/);
  });
});

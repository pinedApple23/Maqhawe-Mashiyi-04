const { JobPostBuilder } = require('../creational_patterns/Builder');

describe('Builder Pattern', () => {
  test('builds full job post', () => {
    const job = new JobPostBuilder()
      .setTitle('Dev')
      .setDescription('Develop apps')
      .setLocation('Remote')
      .setSalary('R500k')
      .setBenefits(['Medical'])
      .build();

    expect(job.title).toBe('Dev');
    expect(job.salary).toBe('R500k');
  });
});
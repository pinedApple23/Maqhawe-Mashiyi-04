const { JobTemplate } = require('../creational_patterns/Prototype');

describe('Prototype Pattern', () => {
  test('clones a job template', () => {
    const original = new JobTemplate('Dev', 'Build things', 'Cape Town');
    const copy = original.clone();
    expect(copy).not.toBe(original);
    expect(copy.title).toBe('Dev');
  });
});
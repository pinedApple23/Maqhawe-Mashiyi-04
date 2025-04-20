const { ApplicationFactory } = require('../creational_patterns/SimpleFactory');

describe('Simple Factory Pattern', () => {
  test('creates an InternshipApplication', () => {
    const app = ApplicationFactory.createApplication('Internship', 101, 501);
    expect(app.type).toBe('Internship');
  });

  test('throws on invalid type', () => {
    expect(() => {
      ApplicationFactory.createApplication('Invalid', 101, 502);
    }).toThrow('Invalid application type');
  });
});
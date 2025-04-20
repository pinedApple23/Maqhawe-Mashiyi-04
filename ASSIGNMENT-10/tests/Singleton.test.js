const db1 = require('../creational_patterns/Singleton');
const db2 = require('../creational_patterns/Singleton');

describe('Singleton Pattern', () => {
  test('returns same instance', () => {
    expect(db1).toBe(db2);
    expect(db1.getConnection()).toBe('Connected to DB');
  });
});
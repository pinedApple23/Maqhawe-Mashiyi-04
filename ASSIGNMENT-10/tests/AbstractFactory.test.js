const { ApplicantUIFactory, HRUIFactory } = require('../creational_patterns/AbstractFactory');

describe('Abstract Factory Pattern', () => {
  test('creates applicant UI', () => {
    const factory = new ApplicantUIFactory();
    expect(factory.createMenu().render()).toBe('Applicant Menu');
  });

  test('creates HR UI', () => {
    const factory = new HRUIFactory();
    expect(factory.createMenu().render()).toBe('HR Menu');
  });
});
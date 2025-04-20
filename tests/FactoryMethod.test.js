const { NotificationFactory } = require('../creational_patterns/FactoryMethod');

describe('Factory Method Pattern', () => {
  test('creates EmailNotification', () => {
    const notifier = NotificationFactory.getNotification('email');
    expect(notifier.send('Hello', 'user@example.com')).toContain('Email');
  });

  test('throws on unknown type', () => {
    expect(() => NotificationFactory.getNotification('push')).toThrow('Invalid notification type');
  });
});
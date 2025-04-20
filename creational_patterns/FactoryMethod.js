class Notification {
  send(message, recipient) {}
}

class EmailNotification extends Notification {
  send(message, recipient) {
    return `Email sent to ${recipient}: ${message}`;
  }
}

class SMSNotification extends Notification {
  send(message, recipient) {
    return `SMS sent to ${recipient}: ${message}`;
  }
}

class NotificationFactory {
  static getNotification(type) {
    if (type === 'email') return new EmailNotification();
    if (type === 'sms') return new SMSNotification();
    throw new Error('Invalid notification type');
  }
}

module.exports = { NotificationFactory };
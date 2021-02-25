import { Notifications } from './notifications';

class Service {
  public send(notification: object) {
    console.log('Notification Boyy', notification);
  }

  public getNotifications() {
    return Object.keys(Notifications).map((category) => {
      return { [category]: Object.keys(Notifications[category]) };
    });
  }
}

export { Service, Notifications };

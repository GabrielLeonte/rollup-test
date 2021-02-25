import { Notifications } from './notifications';

class Service {
  private send(notification: object) {
    console.log('Notification Boyy', notification);
  }
}

export { Service, Notifications };

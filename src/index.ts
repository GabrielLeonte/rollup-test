import { newReward, newRewardParams } from './notifications';

class Service {
  private send(body, params) {
    console.log(body(params));
  }

  public newReward(amount: number, merchant: string, paramsOnly: boolean = false) {
    if (paramsOnly) {
      return newRewardParams;
    }

    return this.send(newReward, { amount, merchant });
  }
}

export { Service };

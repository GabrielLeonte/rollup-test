interface newReward {
  amount: number;
  merchant: string;
}

export const newRewardParams = ['amount', 'merchant'];

export const newReward = (data: newReward) => {
  const { amount, merchant } = data;

  const title = 'Jasper';
  const body = `You just made a new payment of ${amount} to our lovely merchant that we call ${merchant}`;
  const action = 'newTransaction';

  return { title, body, action };
};

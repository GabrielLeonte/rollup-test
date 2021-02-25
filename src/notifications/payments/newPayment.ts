const params = ['amount', 'merchant'];

const notificationObject = (amount: number, merchant: string) => {
  const title = 'Jasper';
  const body = `You just made a new payment of ${amount} to our lovely merchant that we call ${merchant}`;
  const action = 'newTransaction';

  return { title, body, action };
};

export default { params, notificationObject };

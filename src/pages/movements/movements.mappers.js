export const mapMovementsListFromApiToViewModel = movementsList => {
  return movementsList.map(movements => mapMovementsFromApiToViewModel(movements));
};

const mapMovementsFromApiToViewModel = movements => {
  return {
    id: movements.id,
    accountId: movements.accountId,
    description: movements.description,
    balance: `${movements.balance} €`,
    amount: `${movements.amount} €`,
    realTransaction: new Date(movements.realTransaction).toLocaleDateString(),
    transaction: new Date(movements.transaction).toLocaleDateString(),
  };
};



export const mapAccountInfoFromApiToViewModel = account => {
  return {
    ...account,
    balance: `${account.balance} €`,
    alias: account.name,
  };
};

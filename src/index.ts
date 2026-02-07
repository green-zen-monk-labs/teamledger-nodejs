enum Currency {
    HUF,
    EUR,
}

type Money = {
    amount: number;
    currency: Currency;
}

type Transaction = {
    id: string;
    amount: Money;
    category: string;
    createdAt: Date;
}

function sumByCategory(transactions: Transaction[]): Record<string, number> {
    const results: Record<string, number> = {}
  
    transactions.forEach(transaction => {
        results[transaction.category] ??= 0;
        results[transaction.category] += transaction.amount.amount;

    });

  return results;  
}

const testTransactions: Transaction[] = [
    { id: "1", amount: { amount: 1000, currency: Currency.HUF }, category: "food", createdAt: new Date() },
    { id: "2", amount: { amount: 500, currency: Currency.HUF }, category: "transport", createdAt: new Date() },
    { id: "3", amount: { amount: 2000, currency: Currency.HUF }, category: "food", createdAt: new Date() },
    { id: "4", amount: { amount: 1500, currency: Currency.HUF }, category: "entertainment", createdAt: new Date() },
];

console.log(sumByCategory(testTransactions));
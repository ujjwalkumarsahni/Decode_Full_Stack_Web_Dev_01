const expenses = [
    { amount: 100, category: "Food" },
    { amount: 200, category: "Transport" },
    { amount: 300, category: "Rent" },
    { amount: 150, category: "Entertainment" }
];

const taxRate = 0.10;

const expensesWithTax = expenses.map(expense => ({
    ...expense,
    tax: expense.amount * taxRate
}));

console.log(expensesWithTax);

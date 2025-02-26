const expenses = [
    { amount: 100, category: "Food" },
    { amount: 200, category: "Transport" },
    { amount: 300, category: "Rent" },
    { amount: 150, category: "Entertainment" },
    { amount: 120, category: "Groceries" },
    { amount: 80, category: "Groceries" }
];

const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);

console.log(`Total Expenses: $${totalAmount}`);

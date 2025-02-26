const expenses = [
    { amount: 100, category: "Food" },
    { amount: 200, category: "Transport" },
    { amount: 300, category: "Rent" },
    { amount: 150, category: "Entertainment" },
    { amount: 120, category: "Groceries" },
    { amount: 80, category: "Utilities" }
];

function categorizeExpense(amount) {
    return amount > 100 ? "High Expense" : "Low Expense";
}

const categorizedExpenses = expenses.map(expense => ({
    category: expense.category,
    classification: categorizeExpense(expense.amount)
}));

console.log(categorizedExpenses);

const expenses = [
    { amount: 100, category: "Food" },
    { amount: 200, category: "Transport" },
    { amount: 300, category: "Rent" },
    { amount: 150, category: "Entertainment" },
    { amount: 120, category: "Groceries" },
    { amount: 80, category: "Groceries" }
];

const groceryExpenses = expenses.filter(expense => expense.category === "Groceries");

console.log(groceryExpenses);

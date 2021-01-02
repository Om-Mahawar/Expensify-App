const selectExpensesTotal = (expenses = []) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const amountArray = expenses.map((expense) => expense.amount);
  const ExpensesTotal = amountArray.reduce(reducer, 0);
  return ExpensesTotal;
};

export default selectExpensesTotal;

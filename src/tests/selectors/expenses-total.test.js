import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const totalExpense = selectExpensesTotal();
  expect(totalExpense).toBe(0);
});

test('should correctly add up a single expense', () => {
  const totalExpense = selectExpensesTotal([expenses[0]]);
  expect(totalExpense).toBe(expenses[0].amount);
});

test('should correctly add up multiple expenses', () => {
  const totalExpense = selectExpensesTotal(expenses);
  expect(totalExpense).toBe(114195);
});

import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../Components/EditExpensePage';
import expenses from '../fixtures/expenses';

let startEditExpense, startRemoveExpense, history, match, wrapper;
beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  match = {
    params: {
      id: expenses[1].id,
    },
  };
  wrapper = shallow(
    <EditExpensePage
      startEditExpense={startEditExpense}
      startRemoveExpense={startRemoveExpense}
      history={history}
      match={match}
    />
  );
});

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(startEditExpense).toHaveBeenLastCalledWith(
    expenses[1].id,
    expenses[1]
  );
  expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle remove Expense', () => {
  wrapper.find('button').prop('onClick')();
  expect(startRemoveExpense).toHaveBeenLastCalledWith({
    id: expenses[1].id,
  });
  expect(history.push).toHaveBeenLastCalledWith('/');
});

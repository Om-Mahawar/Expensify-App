import React from 'react';
import { ExpensesSummary } from '../../Components/ExpensesSummary';
import numeral from 'numeral';
import { shallow } from 'enzyme';

test('should correctly render ExpensesSummary with 1 expense', () => {
  const wrapper = shallow(
    <ExpensesSummary expensesCount={1} expensesTotal={9434} />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with multiple expenses', () => {
  const wrapper = shallow(
    <ExpensesSummary expensesCount={3} expensesTotal={9434} />
  );
  expect(wrapper).toMatchSnapshot();
});

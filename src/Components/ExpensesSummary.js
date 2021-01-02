import React from 'react';
import numeral from 'numeral';
import getVisibleExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import { connect } from 'react-redux';

export const ExpensesSummary = (props) => {
  return (
    <h1>
      Viewing {props.expensesCount}{' '}
      {props.expensesCount > 1 ? 'expenses' : 'expense'} totalling{' '}
      {numeral(props.expensesTotal / 100).format('$0,0.00')}
    </h1>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  return {
    expensesCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);

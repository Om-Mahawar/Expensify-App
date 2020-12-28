import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
  <div>
    {props.expenses.length === 0 ? (
      <p>No expense</p>
    ) : (
      props.expenses.map((expense) => {
        return <ExpenseListItem key={expense.id} {...expense} />;
        console.log(expense);
      })
    )}
  </div>
);

// const ConnnectedExpenseList = connect((state) => {
//   return {
//     expenses: state.expenses,
//   };
// })(ExpenseList);

// export default ConnnectedExpenseList;
// Not used code

// Used like below
const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpenseList);

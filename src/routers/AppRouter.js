import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import AddExpensePage from '../Components/AddExpensePage';
import EditExpensePage from '../Components/EditExpensePage';
import ExpenseDashboardPage from '../Components/ExpenseDashboardPage';
import NotFoundPage from '../Components/NotFoundPage';
import LoginPage from '../Components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path='/' component={LoginPage} exact={true} />
        <PrivateRoute path='/dashboard' component={ExpenseDashboardPage} />
        <PrivateRoute path='/create' component={AddExpensePage} />
        <PrivateRoute path='/edit/:id' component={EditExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;

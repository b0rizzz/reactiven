import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from '../users/LoginPage';
import CreateWord from '../CreateWord';

const Routes = () => (
    <Switch>
        <Route path='/' exact component={CreateWord} />
        <Route path='/login' component={LoginPage} />
    </Switch>
);

export default Routes;
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from '../users/LoginPage';

const Routes = () => (
    <Switch>
        <Route path='/' exact component={LoginPage} />
        <Route path='/login' component={LoginPage} />
    </Switch>
);

export default Routes;
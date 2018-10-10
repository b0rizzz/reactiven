import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RegisterPage from '../users/RegisterPage';
import LoginPage from '../users/LoginPage';

const Routes = () => (
    <Switch>
        <Route path='/' exact component={RegisterPage} />
        <Route path='/users/register' component={RegisterPage} />
        <Route path='/users/login' component={LoginPage} />
    </Switch>
);

export default Routes;
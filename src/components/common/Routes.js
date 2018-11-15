import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from '../users/LoginPage';
import Exercises from '../exercises/Exercises';

const Routes = () => (
    <Switch>
        <Route path='/' exact component={Exercises} />
        <Route path='/login' component={LoginPage} />
    </Switch>
);

export default Routes;
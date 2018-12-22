import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from '../users/LoginPage';
import CreateWord from '../CreateWord';
import CreatePhrase from '../CreatePhrase';

const Routes = () => (
    <Switch>
        <Route path='/' exact component={CreateWord} />
        <Route path='/create-word' component={CreateWord} />
        <Route path='/create-phrase' component={CreatePhrase} />
        <Route path='/login' component={LoginPage} />
    </Switch>
);

export default Routes;
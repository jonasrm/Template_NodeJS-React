import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import Main from './pages/Main';
import User from './pages/User';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/main" component={Main} />            
            <Route path="/user" exact component={User} />
            <Route path="/user/:id" component={User} />            
        </BrowserRouter>
    );
}
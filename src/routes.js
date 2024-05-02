import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Logon from '../src/Pages/Logon/Index';
import Home from '../src/Pages/Home/Index';
import Control from '../src/Pages/Control/index'
import CreateUser from '../src/Pages/CreateUser/index'
import Profile from '../src/Pages/Profile/index'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/home" component={Home} />
        <Route path="/control" component={Control}/>
        <Route path="/createUser" component={CreateUser}/>
        <Route path="/profile" component={Profile}/>
      </Switch>
    </BrowserRouter>
  );
}

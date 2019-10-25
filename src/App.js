import React from 'react';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';

import HomeNavigation from './screens/HomeNavigation';
import CreateAccount from './screens/CreateAccount';
import Careers from './screens/Careers';

import { NavigationBar } from './componentLibrary';

const App = () => {
  return (
    <Router>
      <main>
        <NavigationBar />
        <Switch>
          <Route exact path='/' component={HomeNavigation} />
          <Route name="createAccount" path="/create-account" component={CreateAccount} />
          <Route name="careers" path="/careers/creative-technologist" component={Careers} />
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;

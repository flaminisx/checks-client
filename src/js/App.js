import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter as Router } from 'react-router-redux';
import Header from './components/layouts/Header';
import HomePage from './components/pages/Home';
import LoginPage from './components/pages/Login';
import RegisterPage from './components/pages/Register';
import { history } from './routerConfig';

const signedInRoutes = [
  <Route path='/' exact component={HomePage} />
]

const signedOutRoutes = [
  <Route path='/login' exact component={LoginPage} />,
  <Route path='/register' exact component={RegisterPage} />,
  <Route path='/' render={(props) => <Redirect to={{ pathname: '/login'}}/>} />
]

const App = ({ user }) =>(
  <Router history={history}>
    <div className="app">
      { user.signedIn ? <Header /> : "" }
      <div className="main">
        <Switch>
          { user.signedIn ? signedInRoutes : signedOutRoutes }
        </Switch>
      </div>
    </div>
  </Router>
)

export default connect(({ user }) => ({
  user
}))(App);

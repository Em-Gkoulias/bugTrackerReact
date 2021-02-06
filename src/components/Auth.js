import React from 'react';
import Login from './AuthComponents/Login';
import Register from './AuthComponents/Register';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';

import logo from './images/logo.png';

const Auth = () => {
    return (
      <React.Fragment>
        <img
          src={logo}
          alt="LOGO"
          className="logo"
          style={{ display: "block", margin: "0 auto" }}
        />
        <Router>
          <Switch>
            {/* <Route path="/login" component={Login} /> */}
            <Route path="/register" exact component={Register} />
            <Route path="*" component={Login} />
          </Switch>
        </Router>
      </React.Fragment>
    );
}

export default Auth;
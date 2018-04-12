import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import Callback from './components/Callback';
import Auth from './components/Auth';
import history from './components/history';
import Public from './components/Public'

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
    <Router history={history}>
      <div>
        <Route exact path="/" render={(props) => <App auth={auth} {...props}><Public {...props}/></App>} />
        <Route path="/home" render={(props) => <App auth={auth} {...props}><Public {...props}/></App>} />
        <Route path="/callback" render={(props) => {
          handleAuthentication(props);
          return <Callback {...props} />
        }}/>
      </div>
    </Router>
  );
}
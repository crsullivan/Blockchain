import React from 'react';
import './App.css';
import { Router, Route, Switch } from "react-router-dom";
import login from './login'
import history from "./history";
import home from './home'

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <h1>Crypto Currency Wallet</h1>
        <Route path="/login" component={login} />
        <Route path="/home" component={home} />
      </div>
    </Router>  
  );
}

export default App;

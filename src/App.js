import React from 'react';
import logo from './logo.svg';

import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import OperatorList from './components/OperatorList';
import {PayPage} from './components/PayPage';
import NotFound from './components/NotFound'
function App(props) {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" render={ () => <OperatorList operators={props.operators}/>} />
          <Route path="/payPage/:name" render={ properties => <PayPage operators={props.operators} {...properties}/>} />
          <Route  component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

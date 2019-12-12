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
          <Route exact path="/" component={OperatorList} />
          <Route path="/payPage/:id" component={PayPage} />
          <Route  component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

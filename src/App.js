import React from 'react';
import styled from 'styled-components';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import OperatorList from './components/OperatorList';
import {PayPage} from './components/PayPage';
import NotFound from './components/NotFound';
import {GlobalStyle} from './theme/globalStyle';
function App(props) {
  return (
    
    <AppWrapper>
      <GlobalStyle />
      <Router>
          <Switch>
            <Route exact path="/" render={ () => <OperatorList operators={props.operators}/>} />
            <Route path="/payPage/:name" render={ properties => <PayPage {...properties}/>} />
            <Route component={NotFound} />
          </Switch>
      </Router>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  background-color: #222;
  border-radius: 3px;`
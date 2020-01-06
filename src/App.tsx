 /* tslint:disable-next-line */
import React from 'react';
 /* tslint:disable-next-line */
import styled from 'styled-components';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import OperatorList from './components/OperatorList';
import {PayPage} from './components/PayPage';
import NotFound from './components/NotFound';
import {GlobalStyle} from './theme/globalStyle';
import {IOperator} from './models/IOperator';

/* tslint:disable:typedef */
export function App(props: { operators: IOperator[]}) {
  return (
    
    <AppWrapper>
      <GlobalStyle />
      <Router>
          <Switch>
            <Route exact={true} path="/" render={() => <OperatorList operators={props.operators} />} />
            <Route path="/payPage/:name" render={properties => <PayPage {...properties}/>} />
            <Route component={NotFound} />
          </Switch>
      </Router>
    </AppWrapper>
  );
}

// export default App;

const AppWrapper = styled.div`
  background-color: #222;
  border-radius: 3px;`
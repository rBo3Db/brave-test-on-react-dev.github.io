import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import operators from './operators.json';

ReactDOM.render(<App operators={operators}/>, document.getElementById('root'));

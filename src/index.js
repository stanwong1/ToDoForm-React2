import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import List from './List';
import * as serviceWorker from './serviceWorker';

const todos = ['watch', 'bracelet', 'backpack', 'luggage', 'pojo', 'rexx', 'water bottle', 'computer']

console.log(todos);
// todos={todos} passes down data from Index to List (name should follow data name)
ReactDOM.render(<List todos={todos}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

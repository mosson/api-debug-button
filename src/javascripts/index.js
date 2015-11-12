'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const ReactDOMServer = require('react-dom/server');
const App = require('components/index/App');
const global = Function("return this")();
const document = global.document;

ReactDOM.render(<App/>, document.getElementById('App'));



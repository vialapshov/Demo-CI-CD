import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom'
import App from './App';

ReactDOM.render(
  <Router>
      <App />
  </Router>,
  document.getElementById('root')
);
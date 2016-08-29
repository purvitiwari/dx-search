import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link } from 'react-router';
import { Provider } from 'react-redux';
import store from './redux/store.jsx';

import App from './react/pages/App.jsx';
import Center from './react/pages/Center.jsx';


class Main extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={App} />
        <Route path='/center' component={Center} />
      </Router>
    );
  }
}

ReactDOM.render(<Provider store={store}><Main /></Provider>,
  document.getElementById('app'));
  
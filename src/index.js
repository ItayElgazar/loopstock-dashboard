import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { loadUsers } from './actions/listingsActions';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

const store = configureStore();
store.dispatch(loadUsers());

ReactDOM.render((
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();

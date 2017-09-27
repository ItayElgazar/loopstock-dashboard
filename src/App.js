import React, { Component } from 'react';
import Main from './main';
import Header from './components/header';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
        <div>
        <Header />
        <Main />
        </div>
        </MuiThemeProvider>
    );
  }
}

export default App;

import React, { Component, Fragment } from 'react';
// import logo from './logo.svg';
import './App.css';
import MoveContainer from './containers/MoveContainer'
import NavBar from './components/NavBar'
import { Route, Switch } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={MoveContainer} />    
          </Switch>
        </div>
      </Fragment>
    );
  }
}

export default App;

import React, { Component, Fragment } from 'react';
// import logo from './logo.svg';
import { withRouter } from 'react-router'
import './App.css';
import MoveContainer from './containers/MoveContainer'
import BoxContainer from './containers/BoxContainer'
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
            <Route path="/boxes" component={BoxContainer} />
          </Switch>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(App);

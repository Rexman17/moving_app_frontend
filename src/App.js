import React, { Fragment } from 'react';
// import logo from './logo.svg';
import { withRouter } from 'react-router'
import './App.css';
import MoveContainer from './containers/MoveContainer'
import BoxContainer from './containers/BoxContainer'
import ItemsContainer from './containers/ItemsContainer'
import NavBar from './components/NavBar'
import { Route, Switch, Redirect } from 'react-router-dom'
import LoginForm from './components/LoginForm'


const App = props => {
  console.log("%c APP PROPS", 'color: pink', props);
  return (
    <Fragment>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/users/:userId/moves" />} />

          {/*<Route exact path="/moves" component={MoveContainer} />*/}
          <Route exact path="/login" component={LoginForm} />
          <Route exact path = "/users/:userId/moves" render={() => <MoveContainer />} />
          <Route exact path="/users/:userId/moves/:moveId/boxes" render={() => <BoxContainer/>} />
          <Route exact path="/users/:userId/moves/:moveId/boxes/:boxId/items" render={() => <ItemsContainer/>} />
        </Switch>
      </div>
    </Fragment>
  )
}

export default withRouter(App);
// injects router props to App component so when there is a change in the url, app will hear about it

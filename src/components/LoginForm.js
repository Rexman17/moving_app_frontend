import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'


class LoginForm extends React.Component {

  state = { username: '', password: '' }

  // if logged in go to the user's moves:
  // return this.props.loggedIn ? (
  //     <Redirect to="/users/:userId/moves" />
  render() {
    return (
      <Fragment>
        <div id="login-parent" className="container row">
          <form id="form-login" className="col s12">
            <div className="row">
                <div className="input-field col s4">
                <i className="material-icons prefix">account_circle</i>
                <input id="username" type="text" className="validate" placeholder="Username" autoComplete="off" required/>
              </div>
            </div>
            <div className="row">
            <div className="input-field col s4">
              <i className="material-icons prefix">vpn_key</i>
              <input id="password" type="password" className="validate" placeholder="Password" autoComplete="off" required/>
            </div>
          </div>
        </form>
      </div>
      </Fragment>
    )
  }
}




const mapStateToProps = state => {
  return {
    state
  }
}

export default withRouter(connect(mapStateToProps)(LoginForm))

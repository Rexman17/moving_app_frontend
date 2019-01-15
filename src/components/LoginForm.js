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
        <div style={{marginTop: '10%'}} className="row">
          <div className="col s12 m4 offset-m4">
            <div className="card">

              <div className="card-action cyan lighten-2 white-text">
                <h3>Login Form</h3>
              </div>

              <div className="card-content">
                <div className="form-field">
                  <input type='text' placeholder="Username" required autoComplete="off" />
                </div><br />

                <div className="form-field">
                  <input type='password' placeholder="Password" required autoComplete="off" />
                </div><br />

                <div className="form-field">
                  <button className="btn-large waves-effect waves-dark cyan lighten-2" type="submit" style={{width: '100%', fontFamily: 'Hammersmith One, sans-serif'}}>
                    Login
                  </button>
                </div>

              </div>

            </div>
          </div>
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


// <div id="login-parent" className="container row">
//   <form id="form-login" className="col s12">
//     <div className="row">
//         <div className="input-field col s4">
//         <i className="material-icons prefix">account_circle</i>
//         <input id="username" type="text" className="validate" placeholder="Username" autoComplete="off" required/>
//       </div>
//     </div>
//     <div className="row">
//     <div className="input-field col s4">
//       <i className="material-icons prefix">vpn_key</i>
//       <input id="password" type="password" className="validate" placeholder="Password" autoComplete="off" required/>
//       <button type="submit" className="btn-small red cyan lighten-2">
//         Login
//       </button>
//     </div>
//
//   </div>
// </form>
// </div>

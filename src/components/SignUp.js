import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { signUpUser } from '../actions/userActions'

class SignUp extends React.Component {

  state = {
    username: '',
    password: '',
    signedUp: false

  }

  render() {
    return (
      <div>
      <Fragment>
        <div style={{marginTop: '10%'}} className="row">
          <form className="col s12 m4 offset-m4">
            <div className="card">
              <div className="card-action cyan lighten-2 white-text">
                <h3>Sign Up</h3>
              </div>
              <div className="card-content">
                <div className="form-field">
                  <input onChange={this.handleChange} type='text' name="username" placeholder="Username" value={this.state.username} required autoComplete="off" />
                </div><br />

                <div className="form-field">
                  <input onChange={this.handleChange} type='password' name="password" placeholder="Password" value={this.state.password} required autoComplete="off" />
                </div><br />

                <div className="form-field">
                  <button className="btn-large waves-effect waves-dark cyan lighten-2" type="submit" style={{width: '100%', fontFamily: 'Hammersmith One, sans-serif'}}>
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Fragment>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    signUpUser: (username, password) => dispatch(signUpUser(username, password))
  }
}

export default connect(null, mapDispatchToProps)(SignUp)

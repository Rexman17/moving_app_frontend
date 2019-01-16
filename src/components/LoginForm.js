import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router'   // Redirect later
import { loginUser } from '../actions/userActions'

class LoginForm extends React.Component {

  state = {
    username: '',
    password: ''
  }

  handleChange = e => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLoginSubmit = e => {
    e.preventDefault()
    this.props.loginUser(this.state.username, this.state.password)
    this.setState({
      username: '',
      password: ''
    }) // reset form to initial state

  }


  render() {
    console.log("LoginForm", this.props);
    return this.props.loggedIn ? (
      <Redirect to={"/users/" + this.props.user.user.id + "/moves"}/>
      ) : (
      <Fragment>
        <div style={{marginTop: '10%'}} className="row">
          <form  onSubmit={this.handleLoginSubmit} error={this.props.failedLogin} className="col s12 m4 offset-m4">
            <div className="card">
              <div className="card-action cyan lighten-2 white-text">
                <h3>Login Form</h3>
              </div>
              <div className="card-content">
              { this.props.error ? this.props.error : null }
                <div className="form-field">
                  <input onChange={this.handleChange} type='text' name="username" placeholder="Username" value={this.state.username} required autoComplete="off" />
                </div><br />

                <div className="form-field">
                  <input onChange={this.handleChange} type='password' name="password" placeholder="Password" value={this.state.password} required autoComplete="off" />
                </div><br />

                <div className="form-field">
                  <button className="btn-large waves-effect waves-dark cyan lighten-2" type="submit" style={{width: '100%', fontFamily: 'Hammersmith One, sans-serif'}}>
                    Login
                  </button>
                </div>

              </div>

            </div>
          </form>
        </div>
      </Fragment>
    )
  }
}

// TODO: OBJECT DESCTRUCTURING
const mapStateToProps = (state) => {
  return {
    authenticatingUser: state.user.authenticatingUser,
    failedLogin: state.user.failedLogin,
    error: state.user.error,
    loggedIn: state.user.loggedIn,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (username, password) => dispatch(loginUser(username, password))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm))

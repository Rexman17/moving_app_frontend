import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { signUpUser } from '../actions/userActions'
import { Link } from 'react-router-dom'

class SignUp extends React.Component {

  state = {
    username: '',
    password: '',
    signedUp: false
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({ signedUp: true })
    this.props.signUpUser(this.state.username, this.state.password)
  }

  renderSignUpForm = () => {
    return (
      <div id="splash">
      <Fragment>
        <div style={{marginTop: '10%'}} className="row">
          <form onSubmit={this.handleSubmit} className="col s12 m4 offset-m4">
            <div className="card">
              <div className="card-action deep-purple darken-1 white-text">
                <h3>Sign Up</h3>
                <p>We're your pals...for packing...</p>
              </div>
              <div className="card-content">
                <div className="form-field">
                  <input onChange={this.handleChange} type='text' name="username" placeholder="Username" value={this.state.username} required autoComplete="off" />
                </div><br />

                <div className="form-field">
                  <input onChange={this.handleChange} type='password' name="password" placeholder="Password" value={this.state.password} required autoComplete="off" />
                </div><br />

                <div className="form-field">
                  <button className="btn-large waves-effect waves-dark deep-purple darken-1" type="submit" style={{width: '100%', fontFamily: 'Hammersmith One, sans-serif'}}>
                    Let's Get Movin'
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

          Already have an account? <Link to="/login">Log In</Link>

      </Fragment>
      </div>
    )
  }

  render() {
    return (
      this.state.signedUp ? <Redirect to="/login" /> : <div>{this.renderSignUpForm()}</div>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    signUpUser: (username, password) => dispatch(signUpUser(username, password))
  }
}

export default connect(null, mapDispatchToProps)(SignUp)

import React from 'react';
// import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { logoutUser } from '../actions/userActions'

class NavBar extends React.Component {

  handleClick = () => {
    this.props.history.push(`/users/${this.props.user.id}/moves`)
  }

  handleLogout = () => {
    this.props.logoutUser()
    localStorage.clear()
    this.props.history.push("/login")
  }

  render() {
    console.log("NAV BAR", this.props.loggedIn);
    return (
      <nav id="nav" className="nav-wrapper white">
       <div className="container">
         <ul className="left hide-on-med-and-down">
           <li>

            { !this.props.loggedIn ? null : <button onClick={this.handleLogout} className="nav-btn col s2 btn-small cyan lighten-2" style={{fontFamily: 'Hammersmith One', fontSize: '15px'}}>
             Log Out
           </button> }

          {
            this.props.loggedIn ?
            <button onClick={this.handleClick} className="col s2 btn-small cyan lighten-2" style={{fontFamily: 'Hammersmith One', fontSize: '15px'}}>
              Moves
            </button> :
            null
          }
          </li>
         </ul>
         <div className="brand-logo center">
          <img id="logo-icon" src="../images/PackingPalLogo.png" alt="LOGO"/>
         </div>
       </div>
      </nav>
    )
    // ../images/PackingPalLogo.png
}

}

const mapStateToProps = state => {
  return {
    user: state.user.user,
    loggedIn: state.user.loggedIn,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser())
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));

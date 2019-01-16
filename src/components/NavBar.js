import React from 'react';
// import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

class NavBar extends React.Component {

  // state = {
  //   userId: null
  // }
  // //
  // componentDidMount() {
  //   this.setState({
  //     userId: this.props.user.id
  //   })
  // }
  // console.log("NAVBAR",props);
  handleClick = () => {
    // this.props.history.clear()
    // this.props.history.replace('/moves')

    this.props.history.push(`/users/${this.props.user.id}/moves`)
  }

  render() {
    console.log("NAV BAR", this.props.userId);
    return (
      <nav className="nav-wrapper white">
       <div className="container">
         <ul className="left hide-on-med-and-down">
           <li>
           <button className="nav-btn col s2 btn-small cyan lighten-2" style={{fontFamily: 'Hammersmith One', fontSize: '15px'}}>
             Log Out
           </button>
          {this.props.loggedIn ? <button onClick={this.handleClick} className="col s2 btn-small cyan lighten-2" style={{fontFamily: 'Hammersmith One', fontSize: '15px'}}>
              Moves
            </button> : null}
          </li>
         </ul>
         <div style={{color: 'black'}}>LOGO??

         </div>
       </div>
      </nav>
    )
}

}

const mapStateToProps = state => {
  return {
    user: state.user.user,
    loggedIn: state.user.loggedIn
  }
}

export default withRouter(connect(mapStateToProps)(NavBar));

import React from 'react';
// import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

class NavBar extends React.Component {
  // console.log("NAVBAR",props);
  handleClick = () => {
    // this.props.history.clear()
    this.props.history.replace('/moves')
  }

  render() {
    // console.log(this.props);
    return (
      <nav className="nav-wrapper white">
       <div className="container">
        <span className="center brand-logo" style={{marginTop: '5px'}}>
          <img id="logo" src="../images/BOX.png" alt="Packing Pal Logo"/>
        </span>
         <ul className="left hide-on-med-and-down">
           <li>
           <button className="nav-btn col s2 btn-small cyan lighten-2" style={{fontFamily: 'Hammersmith One', fontSize: '15px'}}>
             Log Out
           </button>
            <button onClick={this.handleClick} className="col s2 btn-small cyan lighten-2" style={{fontFamily: 'Hammersmith One', fontSize: '15px'}}>
              Moves
            </button>
          </li>
         </ul>
       </div>
      </nav>
    )
}

}

export default withRouter(NavBar);

// <span class="brand-logo center">LOGO</span>

// <NavLink to="/">
// <button className="nav-btn white-text waves-effect cyan lighten-2 btn-small" style={{fontFamily: 'Hammersmith One'}}>
// Moves
// </button>
// </NavLink>
// </li>
// <li>
// <button className="nav-btn white-text waves-effect cyan lighten-2 btn-small" style={{fontFamily: 'Hammersmith One'}}>
// Logout
// </button>

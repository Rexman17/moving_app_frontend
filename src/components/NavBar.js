import React from 'react';
// import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

class NavBar extends React.Component {

  state = {
    userId: null
  }
  //
  componentDidMount() {
    this.setState({
      userId: this.props.userId
    })
  }
  // console.log("NAVBAR",props);
  handleClick = () => {
    // this.props.history.clear()
    // this.props.history.replace('/moves')

    this.props.history.push(`/users/${this.props.userId}/moves`)
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
            <button onClick={this.handleClick} className="col s2 btn-small cyan lighten-2" style={{fontFamily: 'Hammersmith One', fontSize: '15px'}}>
              Moves
            </button>
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
    userId: state.user.user_id
  }
}

export default withRouter(connect(mapStateToProps)(NavBar));

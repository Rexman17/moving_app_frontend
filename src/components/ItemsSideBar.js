import React from 'react'
import { connect } from 'react-redux';
import { getMoveItems } from '../actions/itemActions'
import { withRouter } from 'react-router-dom'

class ItemsSideBar extends React.Component {
  componentDidMount() {
    // http://localhost:3000/api/v1/users/1/moves/1/boxes
    // console.log("ItemsSideBar",this.props);
    // this.props.getMoveItems()
  }

  render() {
    console.log("ItemsSideBar PROPS", this.props);
    return (
      <div className="col s3" style={{border: 'ridge #4dd0e1 3px', marginTop: '15px'}}>
        <h4>ITEMS</h4>
      </div>
    )
  }

} // end class

const mapStateToProps = state => {
  // console.log("STATE",state);
  return {
    move: state.move,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMoveItems: (userId, moveId) => dispatch(getMoveItems(userId, moveId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ItemsSideBar));

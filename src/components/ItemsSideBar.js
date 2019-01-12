import React from 'react'
import { connect } from 'react-redux';

class ItemsSideBar extends React.Component {
  componentDidMount() {
    // http://localhost:3000/api/v1/users/1/moves/1/boxes

  }

  render() {
    console.log("ItemsSideBar PROPS", this.props);
    return (
      <div className="col s3" style={{border: 'ridge #4dd0e1 3px', paddingTop: '5px', marginTop: '15px'}}>
      <h5>ALL ITEMS ASSOCIATED W THIS MOVE</h5>
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


export default connect(mapStateToProps)(ItemsSideBar);

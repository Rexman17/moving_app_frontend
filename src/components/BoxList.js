import React from 'react';
import Box from './Box';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { getBoxes } from '../actions/boxActions'

class BoxList extends React.Component {
  //
  // componentDidMount() {
  //
  // }

  render() {
    console.log("boxlist props", this.props);
    return (
      <div>MAPPED BOXES SHOULD GO IN HERE AND route params</div>
    )
  }
}

const mapStateToProps = state => {
  // debugger
  return {
    boxes: state.boxes,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getBoxes: () => dispatch(getBoxes())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoxList))



// let id = this.props.match.params.move_id
// }

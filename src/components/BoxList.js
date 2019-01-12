import React from 'react';
import Box from './Box';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { getBoxes } from '../actions/boxActions'

class BoxList extends React.Component {

  componentDidMount() {
    const { moveId, userId } = this.props.match.params
    // if (this.props.history.action === "PUSH") {
      this.props.getBoxes(userId, moveId)
    // }
  }

  render() {
    console.log("boxlist props", this.props.history);

    const mappedBoxes = this.props.boxes.map((box, idx) => {
      return <Box box={box} key={box.id} idx={idx}/>
    })

    return (
      <div className="col s9">
          {mappedBoxes}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    move: state.move,
    boxes: state.boxes,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getBoxes: (userId, moveId) => dispatch(getBoxes(userId, moveId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoxList))

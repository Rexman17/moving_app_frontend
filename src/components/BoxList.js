import React from 'react';
import Box from './Box';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { getBoxes } from '../actions/boxActions'

class BoxList extends React.Component {

  componentDidMount() {

      this.props.getBoxes(this.props.user.user_id, this.props.move.id)
    
  }

  render() {
    console.log("boxlist props", this.props);

    const mappedBoxes = this.props.boxes.map((box) => {
      return <Box box={box} key={box.id} />
    })

    return (
      <div className="row">
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
    getBoxes: () => dispatch(getBoxes())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoxList))

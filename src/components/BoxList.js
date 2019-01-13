import React from 'react';
import Box from './Box';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { getBoxes } from '../actions/boxActions'
// import { getMoveItems } from '../actions/itemActions'

class BoxList extends React.Component {

  componentDidMount() {
    // destructuring
    const { moveId, userId } = this.props.match.params
    this.props.getBoxes(userId, moveId)
  }

  render() {
    // console.log("BoxList props", this.props);

    // let filteredBoxes = ''
    // for (var items in this.props.boxes) {
    //   filteredBoxes = this.props.boxes.filter((box) => {
    //     debugger
    //     return box.items.name.toLowerCase().includes(this.state.searchTerm)
    //   })
    // }


    // const mappedBoxes = filteredBoxes.map((box, idx) => {
    //   return <Box box={box} key={box.id} idx={idx}/>
    // })

    const mappedBoxes = this.props.boxes.map((box, idx) => {
      return <Box box={box} key={box.id} idx={idx}/>
    })

     // return transaction.description.toLowerCase().includes(this.state.searchTerm) || transaction.category.toLowerCase().includes(this.state.searchTerm)

     // let mappedBoxes = this.props.boxes.map((box) => box.items)
     // mappedBoxes = [].concat.apply([], mappedBoxes)
     // mappedBoxes = mappedBoxes.filter((item) => item.name.toLowerCase().includes(this.state.searchTerm))

    return (
      <div className="col s9">
          {mappedBoxes}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log("STATE IS", state);
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

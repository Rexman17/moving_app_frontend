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
    console.log("BoxList props", this.props)

    const filteredBoxes = this.props.boxes.filter((box) => {
      return this.props.itemBoxIds.includes(box.id)
    })

    const mappedBoxes = filteredBoxes.map((box, idx) => {
      return <Box box={box} key={box.id} idx={idx}/>
    })

    // attempt to filter but it keeps returning the filtered items not the boxes!
    // var filteredBoxes = boxes.map((box) => {
    //   return box.items.filter((i) => {
    //     return i.name.includes('e')
    //   })
    // })

//     var filteredBoxes = boxesWithItems.map((box) => {
// 	var items = filterItems(box.items)
//
// 	if (items.length) {
// 		    return Object.assign({}, boxes, { items })
//
//    }
// 	return false
// }).filter(Boolean)
//
// console.log('filteredBoxes', filteredBoxes);


// =================================
    return (
      <div className="col s9">
          {mappedBoxes}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    boxes: state.boxes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getBoxes: (userId, moveId) => dispatch(getBoxes(userId, moveId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoxList))

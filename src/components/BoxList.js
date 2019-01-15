import React from 'react';
import Box from './Box';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { getBoxes } from '../actions/boxActions'
// import { getMoveItems } from '../actions/itemActions'

const BoxList = (props) => {
  console.log("BoxList", props);

  const boxCards = props.boxes.map((box) => {
    return <Box box={box} key={box.id} idx={box.idx} />
  })

// =================================
  return (
    <div className="col s9">
        {boxCards}
    </div>
  )
}

export default withRouter(BoxList)

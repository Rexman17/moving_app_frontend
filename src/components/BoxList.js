import React from 'react';
import Box from './Box';
import { withRouter } from 'react-router-dom'


const BoxList = (props) => {
  console.log("BoxList", props);

  const boxCards = props.boxes.map((box) => {
    return <Box box={box} key={box.id} idx={box.idx}/>
  })

// idx={box.idx}
// =================================
  return (
    <div className="col s9">
        {boxCards}
    </div>
  )
}

export default withRouter(BoxList)

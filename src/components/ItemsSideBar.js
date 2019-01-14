import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

class ItemsSideBar extends React.Component {


  render() {
    // console.log("ItemsSideBar PROPS", this.props);

    const moveItems = this.props.items.map((item) => {
      let box = this.props.boxes.find((box) => box.id === item.box_id)
      let idx = this.props.boxes.indexOf(box)
      // debugger
      return  <li className="item-li" key={item.id} style={{fontFamily: 'Lato', fontSize: '22px', color: 'black', margin: '5px'}}>
                {item.name}: <span style={{fontWeight: 'bold'}}>Box #{idx + 1}</span>
              </li>
    })

    return (
      <div id="side-bar" className="col s3 z-depth-3" style={{border: 'ridge #4dd0e1 3px', marginTop: '15px', textAlign: 'center'}}>
        <h4 className="card title">ITEMS</h4>
        <div style={{textAlign: 'left'}}>
          {moveItems}
        </div>
      </div>
    )
  }

} // end class

const mapStateToProps = state => {
  return {
    boxes: state.boxes
  }
}

export default withRouter(connect(mapStateToProps)(ItemsSideBar))

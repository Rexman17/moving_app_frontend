import React from 'react'
import { connect } from 'react-redux';
import { getMoveItems } from '../actions/itemActions'
import { withRouter } from 'react-router-dom'

class ItemsSideBar extends React.Component {

  componentDidMount() {
    // destructuring
    const { moveId, userId } = this.props.match.params
    this.props.getMoveItems(userId, moveId)
  }

  render() {
    // console.log("ItemsSideBar PROPS", this.props);
    // const moveItems = this.props.moveItems.map((moveItem) => {
    //   return <li key={moveItem.id}>{moveItem.name} -- Box: [BOX IDX + 1]</li>
    // })

    const filteredItems = this.props.moveItems.filter((item) => {
      return item.name.toLowerCase().includes(this.props.searchTerm)
    })

    const moveItems = filteredItems.map((item) => {
      return  <li className="item-li" key={item.id} style={{fontFamily: 'Josefin Sans', fontSize: '18px', color: 'black'}}>
                {item.name} - Box: [BOX IDX + 1]
              </li>
    })

    return (
      <div id="side-bar" className="col s3 z-depth-3" style={{border: 'ridge #4dd0e1 3px', marginTop: '15px'}}>
        <h4 className="card title">ITEMS</h4>
        {moveItems}
      </div>
    )
  }

} // end class

const mapStateToProps = state => {
  // console.log("STATE",state);
  return {
    move: state.move,
    user: state.user,
    moveItems: state.moveItems
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMoveItems: (userId, moveId) => dispatch(getMoveItems(userId, moveId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ItemsSideBar))

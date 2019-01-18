import React from 'react';
import Item from './Item'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { getBoxItems } from '../actions/itemActions'
// import { Link } from 'react-router-dom'

class ItemList extends React.Component {

  componentDidMount() {
    const { userId, moveId, boxId } = this.props.match.params
    this.props.getBoxItems(userId, moveId, boxId)
  }

  render() {
    // console.log("ItemList", this.props);
    const mappedItems = this.props.boxItems.map((item) => {
      return <Item item={item} key={item.id} />
    })

    return (

      <div className="row">
          {mappedItems}
      </div>

    )
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    boxItems: state.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getBoxItems: (userId, moveId, boxId) => dispatch(getBoxItems(userId, moveId, boxId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ItemList))

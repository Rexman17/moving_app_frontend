import React from 'react';
import { withRouter } from 'react-router-dom'
import { deleteItem } from '../actions/itemActions'
import { connect } from 'react-redux';


class Item extends React.Component {

  handleDelete = () => {
    const { userId, moveId, boxId } = this.props.match.params
    this.props.deleteItem(userId, moveId, boxId, this.props.item.id)
  }

  // handleClickToEdit = () => {
  //   this.props.selectItem(this.props.item)
  // }

  render() {
    // console.log("item", this.props);
    const { name, image } = this.props.item
    return (
      <div className="col s12 l3">
        <div className="card small item-card z-depth-5" style={{padding: '5px'}}>
          <span className="card-title" style={{marginTop: '2px'}}>
            {name}
          </span>
          <div className="card-image" style={{width: 'auto', textAlign: 'center', marginRight: '1%', marginTop: '10%'}}>
            {image ? <img src={image} className="item-image" alt="item-img" /> : null}  
          </div>
          <div style={{align: 'center'}}>
          {/*  <button onClick={this.handleClickToEdit} className="small-actions edit-move-btn btn-floating btn-small waves-effect deep-orange accent-3">
              <span style={{fontFamily: 'Hammersmith One'}}><i className="material-icons">edit</i></span>
            </button> */}
            <button onClick={this.handleDelete} className="delete-move-btn btn-small waves-effect red accent-3" style={{marginTop: '10px'}}>
              <span style={{fontFamily: 'Hammersmith One'}}>Leave me behind :(</span>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteItem: (userId, moveId, boxId, itemId) => dispatch(deleteItem(userId, moveId, boxId, itemId)),
    // selectItem: (item) => dispatch(selectItem(item))
  }
}


export default withRouter(connect(null, mapDispatchToProps)(Item))

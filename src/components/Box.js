import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { deleteBox } from '../actions/boxActions'

class Box extends React.Component {

  handleDelete = () => {
    const { userId, moveId } = this.props.match.params
    this.props.deleteBox(userId, moveId, this.props.box.id)
  }

  render() {
    // debugger
    console.log("box props", this.props);
    return (
      <div className="col s12 m4">
        <div className="card small"><br />
        <p>Box Number: {this.props.idx + 1}</p>
        <span className="card-title">
          Name: "{this.props.box.name}"
        </span>
        <p>Category: {this.props.box.category}</p>
        <div style={{align: 'center'}}>
          <button onClick={this.handleDelete} className="small-actions delete-move-btn btn-floating btn-small waves-effect cyan lighten-2">
            <span style={{fontFamily: 'Hammersmith One'}}>X</span>
          </button>
        </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteBox: (userId, moveId, boxId) => dispatch(deleteBox(userId, moveId, boxId))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Box));

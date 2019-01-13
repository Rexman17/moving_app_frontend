import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { deleteBox, selectBox, prefillForm } from '../actions/boxActions'

class Box extends React.Component {

  constructor(props) {
    super(props)

    const { name, category } = this.props.box // destructuring

    this.state = {
      name: name,
      category: category
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.box.name !== state.name || props.box.category !== state.category) {
      return ({
        name: props.box.name,
        category: props.box.category
      })
    }
    return null;
  }

  handleDelete = () => {
    const { userId, moveId } = this.props.match.params
    this.props.deleteBox(userId, moveId, this.props.box.id)
  }

  handleClickToEdit = () => {
    console.log('editing attempt');
    this.props.selectBox(this.props.box)
    this.props.prefillForm(this.props.box)
  }

  render() {
    console.log("box props", this.props);
    return (
      <div className="col s12 m4">
        <div className="card small"><br />
        <p>Box Number: {this.props.idx + 1}</p>
        <span className="card-title">
          Name: "{this.state.name}"
        </span>
        <p>Category: {this.state.category}</p>
        <div style={{align: 'center'}}>
          <button onClick={this.handleDelete} className="small-actions delete-move-btn btn-floating btn-small waves-effect cyan darken-2">
            <span style={{fontFamily: 'Hammersmith One'}}>X</span>
          </button>
          <button onClick={this.handleClickToEdit} className="small-actions edit-move-btn btn-floating btn-small waves-effect cyan lighten-2">
            <span style={{fontFamily: 'Hammersmith One'}}><i className="material-icons">edit</i></span>
          </button>
        </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteBox: (userId, moveId, boxId) => dispatch(deleteBox(userId, moveId, boxId)),
    selectBox: (box) => dispatch(selectBox(box)),
    prefillForm: (box) => dispatch(prefillForm(box))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Box));

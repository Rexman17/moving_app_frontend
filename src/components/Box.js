import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { deleteBox, selectBox } from '../actions/boxActions'
import { deleteBoxItems } from '../actions/itemActions'

class Box extends React.Component {

  constructor(props) {
    super(props)

    const { name, category, index } = this.props.box // destructuring

    this.state = {
      name: name,
      category: category,
      index: index
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.box.name !== state.name || props.box.category !== state.category || props.box.index !== state.index) {
      return ({
        name: props.box.name,
        category: props.box.category,
        index: props.box.index
      })
    }
    return null;
  }

  handleDelete = () => {
    const { userId, moveId } = this.props.match.params
    this.props.deleteBox(userId, moveId, this.props.box.id)
    // also delete its items in the side bar
    // delete this.props.box.items

  }

  handleClickToEdit = () => {
    this.props.selectBox(this.props.box)
    // this.props.prefillForm(this.props.box)
  }

  handleClickToSeeItems = () => {
    // debugger
    const { userId, moveId } = this.props.match.params
    this.props.history.push(`/users/${userId}/moves/${moveId}/boxes/${this.props.box.id}/items`)
  }

  render() {
    // const { userId, moveId } = this.props.match.params
    console.log("box", this.props.box);
    return (
      <div className="col s12 m5">
        <div className="card small box-card z-depth-5" style={{padding: '5px'}}>
          <p style={{fontSize: '20px'}}>Box #{this.state.index + 1}</p>
        <span className="card-title">
          <div style={{marginTop: '20px'}}>
            "{this.state.name.toUpperCase()}"
          </div>
        </span>
        <div style={{marginTop: '30px'}}>
          <h5>Room: {this.state.category}</h5>
        </div>
        <div style={{position: 'relative', marginTop: '40px'}}>
          <div className="see-items-btn">
            <button onClick={this.handleClickToSeeItems} className="see-items-btn-text waves-effect cyan lighten-2 btn-small">
              See Items
            </button>
          </div>
          <div style={{align: 'center'}}>
            <button onClick={this.handleClickToEdit} className="small-actions edit-move-btn btn-floating btn-small waves-effect deep-orange accent-3">
              <span style={{fontFamily: 'Hammersmith One'}}><i className="material-icons">edit</i></span>
            </button>
            <button onClick={this.handleDelete} className="small-actions delete-move-btn btn-floating btn-small waves-effect red accent-3">
              <span style={{fontFamily: 'Hammersmith One'}}>X</span>
            </button>
          </div>
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
    deleteBoxItems: (userId, moveId, boxId) => dispatch(deleteBoxItems(userId, moveId, boxId))
    // prefillForm: (box) => dispatch(prefillForm(box))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Box));

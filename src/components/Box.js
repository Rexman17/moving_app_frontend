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
    this.props.selectBox(this.props.box)
    this.props.prefillForm(this.props.box)
  }

  handleClickToSeeItems = () => {
    // debugger
    const { userId, moveId } = this.props.match.params
    this.props.history.push(`/users/${userId}/moves/${moveId}/boxes/${this.props.box.id}/items`)
  }

  render() {
    // const { userId, moveId } = this.props.match.params
    console.log("box", this.props.history);
    return (
      <div className="col s12 m5">
        <div className="card small box-card z-depth-5" style={{padding: '5px'}}>
          <p style={{fontSize: '20px'}}>Box #{this.props.idx + 1}</p>
        <span className="card-title">
          "{this.state.name}"
        </span>
        <p>Room: {this.state.category}</p>
        <div style={{position: 'relative'}}>
          <div className="see-items-btn">
            <button onClick={this.handleClickToSeeItems} className="see-items-btn-text waves-effect cyan lighten-2 btn-small">
              See Items
            </button>
          </div>
          <div style={{align: 'center'}}>
            <button onClick={this.handleClickToEdit} className="small-actions edit-move-btn btn-floating btn-small waves-effect deep-orange accent-3">
              <span style={{fontFamily: 'Hammersmith One'}}><i className="material-icons">edit</i></span>
            </button>
            <button onClick={this.handleDelete} className="small-actions delete-move-btn btn-floating btn-small waves-effect cyan darken-2">
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
    prefillForm: (box) => dispatch(prefillForm(box))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Box));

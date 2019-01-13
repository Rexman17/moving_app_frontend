import React from 'react';
import { connect } from 'react-redux';
import { deleteMove, selectMove, prefillForm } from '../actions/moveActions'
// import BoxContainer from '../containers/BoxContainer'
import { withRouter } from 'react-router-dom'

class Move extends React.Component {
  constructor(props) {
    super(props)

    const { name, date } = this.props.move // destructuring

    this.state = {
      name: name,
      date: date
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.move.name !== state.name || props.move.date !== state.date) {
      return ({
        name: props.move.name,
        date: props.move.date
      })
    }
    return null;
  }

  handleClickToEdit = () => {
    this.props.selectMove(this.props.move) // pass selected move to redux store
    this.props.prefillForm(this.props.move)
  }

  handleDelete = () => {
    // console.log("triggered handleDelete");
    this.props.deleteMove(this.props.userId, this.props.move.id)
  }

  reformatDate = (date) => {
    if (date) {
      let arrayOfDate = date.split("-")
      let newArrOfDate = []
      newArrOfDate.push(arrayOfDate[1])
      newArrOfDate.push(arrayOfDate[2])
      newArrOfDate.push(arrayOfDate[0])
      return newArrOfDate.join(',').split(',').join("-")
    } else {
      return null;
    }
  }

  handleClickToSeeBoxes = () => {
    const { id, user_id } = this.props.move
    this.props.selectMove(this.props.move)
    this.props.history.push(`users/${user_id}/moves/${id}/boxes`)
  }

  render() {
    // debugger
    return (
      <div className="col s12 m4">
      <div className="card small move-card z-depth-5">
        <div className="card-content white-text">
          <span className="move_title card-title">
            {this.state.name}
          </span>
          {this.reformatDate(this.state.date)}
        </div>
        <div className="see-boxes-btn">
            <button onClick={this.handleClickToSeeBoxes} className="see-boxes-btn-text waves-effect cyan lighten-2 btn-small">
              See Boxes
            </button>
        </div>
        <div style={{align: 'center'}}>
          <button onClick={this.handleDelete} className="small-actions delete-move-btn btn-floating btn-small waves-effect red accent-3">
            <span style={{fontFamily: 'Hammersmith One'}}>X</span>
          </button>
          <button onClick={this.handleClickToEdit} className="small-actions edit-move-btn btn-floating btn-small waves-effect deep-orange accent-3">
            <span style={{fontFamily: 'Hammersmith One'}}><i className="material-icons">edit</i></span>
          </button>
        </div>
      </div>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userId: state.user.user_id,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteMove: (userId, moveId) => dispatch(deleteMove(userId, moveId)),
    selectMove: (move) => dispatch(selectMove(move)),
    prefillForm: (move) => dispatch(prefillForm(move))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Move));

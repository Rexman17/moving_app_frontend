import React from 'react';
import { connect } from 'react-redux';
import { deleteMove } from '../actions/moveActions'
import { selectMove } from '../actions/moveActions'
import { prefillForm } from '../actions/moveActions';

class Move extends React.Component {

  state = {
    name: this.props.move.name,
    date: this.props.move.date
  }

  static getDerivedStateFromProps(props, state) {
    if (props.move.name !== state.name || props.move.date !== state.date) {
      return ({
        name: props.move.name,
        date: props.move.date
      })
    }
  }

  handleClickToEdit = () => {
    // pass the selectedMove to the redux store via selectMove function
    console.log("clicked a move to edit");
    this.props.selectMove(this.props.move)
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

  render() {
    // debugger
    console.log("move props", this.props)
    return (
      <div className="col s12 m4">
      <div className="card small move-card">
        <div className="card-content white-text">
          <span className="move_title card-title">
            {this.state.name}

          </span>
          {this.reformatDate(this.state.date)}
        </div>
        <div className="see-boxes-btn">
            <button className="see-boxes-btn-text waves-effect cyan lighten-2 btn-small">
              See Boxes
            </button>
        </div>
        <button onClick={this.handleDelete} className="small-actions delete-move-btn btn-floating btn-small waves-effect red accent-3">
          <span style={{fontFamily: 'Hammersmith One'}}>X</span>
        </button>
        <button onClick={this.handleClickToEdit} className="small-actions edit-move-btn btn-floating btn-small waves-effect deep-orange accent-3">
          <span style={{fontFamily: 'Hammersmith One'}}><i className="material-icons">edit</i></span>
        </button>
      </div>
    </div>
    )
  }
}

function mapStateToProps(state) {
  console.log("REDUX STATE IS", state);
  return {
    userId: state.user.user_id,
    selectMove: state.move
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteMove: (userId, moveId) => dispatch(deleteMove(userId, moveId)),
    selectMove: (move) => dispatch(selectMove(move)),
    prefillForm: (move) => dispatch(prefillForm(move))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Move);

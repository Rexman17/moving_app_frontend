import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { addMove } from '../actions/moveActions';
import { prefillForm } from '../actions/moveActions';

class NewMoveForm extends React.Component {

  // Local react state for form since we are not passing any data down from this
  state = {
    moveName: '',
    moveDate: '',
    editMode: false
  }
  // now that we have selectedMove in props, we want to update local state with it to update form values
  // HOW DO I TRIGGER THE UPDATE STATE OF THE FORM VALUES?
  // componentWillReceiveProps(nextProps) { // this fn being deprecated
  //
  // }

  // static getDerivedStateFromProps(nextProps, prevState){
  //  if(this.props.move !== prevState.someValue){
  //    return { someState: nextProps.someValue};
  // }
  //   else return null;
  // }
  



  handleChange = (event) => {
    // console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addMove(this.state.moveName, this.state.moveDate, this.props.userId);
  }


  render() {
    console.log("%c move form props", 'color: pink', this.props);
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit} className="row new-move-form">
          <div className="input-field col s6">
            <input onChange={this.handleChange} value={this.state.moveName} name="moveName" placeholder="Move Name" id="move_name" type="text" autoComplete="off" required/>
          <label htmlFor="move_name">Name Your Move</label>
        </div>
          <div className="input-field col s6">
            <input onChange={this.handleChange} value={this.state.moveDate} name="moveDate"  id="move_date" type="date" autoComplete="off"/>
            <label htmlFor="move_date">Moving On...</label>
            <div className="submit-btn">
              <button type="submit" className="col s2 btn-small cyan lighten-2">Add</button>
            </div>
          </div>

        </form>
      </Fragment>
    )
  }
}


function mapStateToProps(state) {
  // console.log("state in NewMoveForm", state);
  return {
    userId: state.user.user_id,
    selectedMove: state.move
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addMove: (name, date, userId) => dispatch(addMove(name, date, userId)),
    prefillForm: (move) => dispatch(prefillForm(move))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewMoveForm);

import React, { Fragment } from 'react';

class NewMoveForm extends React.Component {

  // Local react state for form since we are not passing any data down from this
  state = {
    moveName: '',
    moveDate: ''
  }

  handleChange = event => {
    // console.log("triggered handle change");
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("triggered submit");
    // this.props.addUser(this.state.name, this.state.email, this.state.animalPreference);
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit} className="row new-move-form">
          <div className="input-field col s4">
            <input onChange={this.handleChange} value={this.state.moveName} name="moveName" placeholder="Move Name" id="move_name" type="text" autoComplete="off"/>
          <label htmlFor="move_name">Name Your Move</label>
        </div>
          <div className="input-field col s4">
            <input onChange={this.handleChange} value={this.state.moveDate} name="moveDate"  id="move_date" type="date" autoComplete="off"/>
            <label htmlFor="move_date">Moving On...</label>
          </div>
          <div className="submit-btn">
            <button type="submit" className="col s1 btn-small cyan lighten-2">Add</button>
          </div>
        </form>
      </Fragment>
    )
  }
}

export default NewMoveForm;

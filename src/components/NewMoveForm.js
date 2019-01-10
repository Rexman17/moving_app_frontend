import React, { Fragment } from 'react';

class NewMoveForm extends React.Component {

  // Local react state for form since we are not passing any data down from this
  state = {
    moveName: '',
    moveDate: null
  }

  handleChange = event => {
    console.log("triggered handle change");
  }

  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="input-field col s6">
            <input onChange={this.handleChange} placeholder="Move Name" id="move_name" type="text" autoComplete="off"/>
          <label htmlFor="move_name">Name Your Move</label>
        </div>
          <div className="input-field col s6">
            <input onChange={this.handleChange} id="move_date" type="date" autoComplete="off"/>
            <label htmlFor="move_date">Moving On...</label>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default NewMoveForm;

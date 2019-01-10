import React, { Fragment } from 'react';

class NewMoveForm extends React.Component {

  // Local react state for form since we are not passing any data down from this
  state = {
    moveName: '',
    moveDate: null
  }

  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="input-field col s6">
            <input placeholder="Move Name" id="move_name" type="text" autocomplete="off"/>
          <label for="move_name">Name Your Move</label>
        </div>
          <div className="input-field col s6">
            <input id="move_date" type="date" autocomplete="off"/>
            <label for="move_date">Moving On...</label>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default NewMoveForm;

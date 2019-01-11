import React from 'react';
import MoveList from '../components/MoveList'
import NewMoveForm from '../components/NewMoveForm'
import { withRouter } from 'react-router-dom'
// purely presentational component
const MoveContainer = (props) => {

  console.log('MoveContainer props', props);
  // Router has added props to this component
  // history keeps track of that history and pushes to that location

    return (
      <div className="container">
        <h2 className="card-panel white black-text cont-title">My Moves</h2>
          <NewMoveForm />
          <MoveList />
      </div>
    )
}

export default withRouter(MoveContainer);

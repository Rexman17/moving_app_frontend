import React from 'react';
import MoveList from '../components/MoveList'
import NewMoveForm from '../components/NewMoveForm'
// purely presentational component
const MoveContainer = props => {

    return (
      <div className="container">
        <h2 id="move-cont-title" className="card-panel white black-text">My Moves</h2>
          <NewMoveForm />
          <MoveList />
      </div>
    )
}

export default MoveContainer

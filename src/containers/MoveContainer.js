import React from 'react';
import MoveList from '../components/MoveList'
import NewMoveForm from '../components/NewMoveForm'
// purely presentational component
const MoveContainer = props => {

    return (
      <div className="container">
        <h2 className="card-panel blue-grey darken-1 darken-3-text white-text" style={{fontFamily: 'Oswald'}}>My Moves</h2>
          <NewMoveForm />
          <MoveList />
      </div>
    )
}

export default MoveContainer

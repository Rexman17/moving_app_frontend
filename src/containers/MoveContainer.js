import React from 'react';
import MoveList from '../components/MoveList'

// purely presentational component
const MoveContainer = props => {

    return (
      <div className="container">
        <h1 className="card-panel teal lighten-2">My Moves</h1>
          <MoveList />
      </div>
    )
}

export default MoveContainer

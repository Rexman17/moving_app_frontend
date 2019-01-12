import React from 'react';
import BoxList from '../components/BoxList'

const BoxContainer = props => {
  return (
    <div className="container">
      <h2 className="card-panel white black-text cont-title">My Boxes</h2>
      <BoxList />
    </div>
  )
}

export default BoxContainer;

import React from 'react';
import BoxList from '../components/BoxList'
import BoxesSideBar from '../components/BoxesSideBar'

const BoxContainer = props => {
  return (
    <div className="container">
      <h2 className="card-panel white black-text cont-title">My Boxes</h2>
      <div className="row">
        <BoxList />
        <BoxesSideBar />
      </div>
    </div>
  )
}

export default BoxContainer;

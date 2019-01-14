import React from 'react';
import {withRouter} from 'react-router-dom'
import ItemList from '../components/ItemList'

const ItemsContainer = props => {
console.log("ItemsContainer");

  return (
    <div className="container">
      <h2 className="card-panel white black-text cont-title">Items in Box: #[Box Num]</h2>
    </div>
  )
}

export default withRouter(ItemsContainer)

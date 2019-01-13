import React from 'react';

const ItemSearchBar = props => {

  return (
    <div id="item_search_bar" className="row col s7">
      <div className="input-field col s6">
        <i className="material-icons prefix">search</i>
        <input onChange={(event) => props.handleSearch(event)} id="item_search_field" type="text" placeholder="Search for an item..." value={props.searchTerm}/>
    </div>
  </div>
    )
}


export default ItemSearchBar

import React from 'react';


class ItemSearchBar extends React.Component {


  render() {
    return (
    <div id="item_search_bar" className="row col s7">
      <div className="input-field col s6">
        <i className="material-icons prefix">search</i>
        <input id="item_search_field" type="text" placeholder="Search for an item..."/>
    </div>
  </div>
    )
  }
}


export default ItemSearchBar


// import React from 'react'

// const Search = (props) => {
//   console.log("Search props:", props);
//   // make sure to add in value to make it a CONTROLLED FORM!!!!!!
//   return (
//     <div className="ui huge fluid icon input">
//       <input
//         type="text"
//         placeholder={"Search your Recent Transactions"}
//         onChange={(event) => props.handleChange(event)} value={props.searchTerm}
//       />
//       <i className="circular search link icon"></i>
//     </div>
//   )
// }
//
// export default Search

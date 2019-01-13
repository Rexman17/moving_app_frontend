import React from 'react';
// import { connect } from 'react-redux';
// import { updateSearchTerm } from '../actions/searchBarActions'

class ItemSearchBar extends React.Component {


  render() {
    console.log("ItemSearchBar", this.props);
    return (
    <div id="item_search_bar" className="row col s7">
      <div className="input-field col s6">
        <i className="material-icons prefix">search</i>
        <input onChange={(event) => this.props.handleSearch(event)} id="item_search_field" type="text" placeholder="Search for an item..." value={this.props.searchTerm}/>
    </div>
  </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     searchTerm: state.searchTerm
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     updateSearchTerm: (searchTerm) => dispatch(updateSearchTerm(searchTerm))
//   }
// }

export default ItemSearchBar
// export default connect(mapStateToProps, mapDispatchToProps)(ItemSearchBar)


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

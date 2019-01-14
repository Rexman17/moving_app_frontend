import React from 'react';
import Item from './Item'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

class ItemList extends React.Component {


  render() {
    return (
      <div className="col s9">
          {/*mappedItems*/}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return dispatch
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ItemList))

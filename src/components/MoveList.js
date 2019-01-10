import React from 'react';
import { connect } from 'react-redux';
// connect this one to redux and make class component!!!!!
const MoveList = props => {
console.log(props);

  return (
    <div>MOVE LIST</div>
  )
}


const mapStateToProps = (state) => {
  console.log("state inside MoveList", state);
  return {
    moves: state.moves
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMoves: () => dispatch(getMoves())
  }
}

export default MoveList;

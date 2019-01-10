import React from 'react';
import { connect } from 'react-redux';
import { getMoves } from '../actions/moveActions'
import Move from './Move'

class MoveList extends React.Component {

  componentDidMount() {
    this.props.getMoves()
  }

  render() {
    // console.log("MoveList PROPS FROM REDUX STORE", this.props.moves); <= returns array of move objects that we'll map over to create the list
    const mappedMoves = this.props.moves.map((move) => {
      // debugger
      return <Move move={move} key={move.id} />
    })

    return (
      <div className="row">
          {mappedMoves}
      </div>
    )
  }
}  // END CLASS

// CONNECT TO REDUX STORE:
// Retrieve the data from within the Redux Store:
const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    moves: state.moves
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMoves: () => dispatch(getMoves())
  }
}

// the connect is an HOC which is listening to the redux for when the mapStateToProps changes, i.e., when moves gets updated
// whenever the moves reducer gets updated

export default connect(mapStateToProps, mapDispatchToProps)(MoveList);

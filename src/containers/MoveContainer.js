import React from 'react';
import { connect } from 'react-redux';
import { getMoves } from '../actions/moveActions'
import MoveList from '../components/MoveList'

class MoveContainer extends React.Component {
// purely presentational 
  componentDidMount() {
    this.props.getMoves()
  }

  render() {
    // console.log("MoveContainer props:", this.props);
    // const mappedMoves = this.props.moves.map((move) => {
    //   return <li>{move.name}</li>
    // })
    return (
      <div>
        <h1 className="card-panel teal lighten-2">My Moves</h1>
          <MoveList />
      </div>
    )
  }
}

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
export default connect(mapStateToProps, mapDispatchToProps)(MoveContainer);

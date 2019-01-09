import React from 'react';
import { connect } from 'react-redux';
import { fetchMovesAction } from '../actions/moveActions'

class MoveContainer extends React.Component {

  componentDidMount() {
    this.props.fetchMovesAction()
  }

  render() {
    // const mappedMoves = this.props.moves.map((move) => {
    //   console.log(move);
    //   return <li>{move[0].name}</li>
    // })
    console.log("MoveContainer props:", this.props);
    return (
      <div>
          <h1 className="card-panel teal lighten-2">Your Moves</h1>

      </div>
    )
  }
}

// Retrieve the data from within the Redux Store:
const mapStateToProps = (state) => { // state is coming nested???????
  console.log("state", state);
  return {
    moves: state.moves
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovesAction: () => dispatch(fetchMovesAction())
  }
}

// the connect is an HOC which is listening to the redux for when the mapStateToProps changes, i.e., when moves gets updated
// whenever the moves reducer gets updated
export default connect(mapStateToProps, mapDispatchToProps)(MoveContainer);

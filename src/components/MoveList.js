import React from 'react';
import { connect } from 'react-redux';
import { getMoves } from '../actions/moveActions'
import Move from './Move'
import { withRouter } from 'react-router-dom'

class MoveList extends React.Component {

  componentDidMount() {

    this.props.getMoves(this.props.user.user_id)
  }

  render() {
    console.log("inside MoveList", this.props);
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
  // console.log("props in movelist", state);
  return {
    moves: state.moves,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMoves: () => dispatch(getMoves())
  }
}

// the connect is an HOC which is listening to the redux for when the mapStateToProps changes, i.e., when moves gets updated
// whenever the moves reducer gets updated

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MoveList));

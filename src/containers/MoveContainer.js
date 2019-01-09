import React from 'react';
import { connect } from 'react-redux';

// const allMoves = `http://localhost:3000/api/v1/moves/`
class MoveContainer extends React.Component {

  // state = {
  //   moves: []
  // }
  //
  // componentDidMount() {
  //   fetch(allMoves)
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data);
  //   })
  // }

  render() {
    console.log(this.props);
    return (
      <div>MoveContainer</div>
    )
  }
}

// Retrieve the data from within the Redux Store:
const mapStateToProps = (state) => {
  return {
    moves: state.moves
  }
}

export default connect(mapStateToProps)(MoveContainer);

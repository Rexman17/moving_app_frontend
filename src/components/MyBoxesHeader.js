import React from 'react';
import { connect } from 'react-redux';

class MyBoxesHeader extends React.Component {

  state = {
    moveName: ''
  }

  // componentDidMount() {
  //   this.setState({
  //     moveName: this.props.moveName
  //   }, () => console.log("getting move name", this.state))
  // }

  render() {
    // console.log("my boxes header props", this.props);
    return (
      <div>
        <h2 className="card-panel white black-text cont-title">
          My Boxes for MOVE NAME
        </h2>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    moveName: state.selectedMove.name,
  }
}


export default connect(mapStateToProps)(MyBoxesHeader);

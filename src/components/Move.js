import React from 'react';

class Move extends React.Component {

// // TODO: reformat date!
  render() {
    // console.log("move props", this.props); name date
    return (
      <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">{this.props.move.name}</span>
          <p>{this.props.move.date}</p>
        </div>
        <div class="card-action">
          <a href="#"><span style={{paddingLeft: '20px'}}>See Boxes</span></a>
        </div>
      </div>
    </div>
    )
  }
}

export default Move;

// <div className="col s12 m4">
// <div className="card small">
// <div>
// <div className="card-content">
// <h5>{this.props.move.name}</h5>
// <p>{this.props.move.date}</p>
// </div>
// <div className="card-action">
// <a href="#">See Boxes</a>
// </div>
// </div>
// </div>
// </div>

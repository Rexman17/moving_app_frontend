import React from 'react';


class Move extends React.Component {

// // TODO: reformat date!
  render() {
    // console.log("move props", this.props); name date
    return (
      <div className="col s12 m6">
      <div className="card small move-card">
        <div className="card-content white-text">
          <span className="move_title card-title">{this.props.move.name}</span>
          <p>{this.props.move.date}</p>
        </div>
        <div className="see-boxes-link">
            <button className="waves-effect cyan lighten-2 btn-small">See Boxes</button>
        </div>
      </div>
    </div>
    )
  }
}

export default Move;

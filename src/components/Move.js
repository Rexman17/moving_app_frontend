import React from 'react';

class Move extends React.Component {


  render() {
    // console.log("move props", this.props); name date icon
    return (
      <div class="col s12 m4">
        <div className="card small">
          <div className="card-image">
            <img className="responsive-img" src={this.props.move.icon} alt={this.props.move.name} style={{ width: '100px', height: '100px' }}/>
          </div>
        <div>
        <div className="card-content">
          <h4>{this.props.move.name}</h4>
          <p>{this.props.move.date}</p>
        </div>
        <div className="card-action">
          <a href="#">See Boxes</a>
        </div>
      </div>
      </div>
    </div>
    )
  }
}

export default Move;

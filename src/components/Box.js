import React from 'react';


class Box extends React.Component {


  render() {
    console.log("box props", this.props);
    return (
      <div className="col s12 m3">
        <div className="card small">
        <p>Box Number: </p>
        <span className="card-title">
          "{this.props.box.name}"

        </span>
        <p>Category: {this.props.box.category}</p>
        </div>
      </div>
    )
  }
}

export default Box;

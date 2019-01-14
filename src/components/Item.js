import React from 'react';


class Item extends React.Component {


  render() {
    console.log("item", this.props);
    const { name, image } = this.props.item
    return (
      <div className="col s12 l3">
        <div className="card small item-card z-depth-5" style={{padding: '5px'}}>
          <span className="card-title">
            {name}
          </span>
          <div className="card-image" style={{width: 'auto', textAlign: 'center', marginRight: '1%', marginTop: '10%'}}>
            <img className="item-image" src={image} alt="item-img" />
          </div>
        </div>
      </div>
    )
  }
}


export default Item






// <div className="col s12 m3">
// <div className="card">
// <div className="card-image">
// <img className="item-img" src={image} alt="item" />
// </div>
// <div className="card-content">
// <p>{name}</p>
// </div>
// <div className="card-action">
// Delete
// </div>
// </div>
// </div>

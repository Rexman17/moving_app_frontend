import React from 'react';


class Item extends React.Component {


  render() {
    console.log("item", this.props);
    const { name, image } = this.props.item
    return (
      <div className="col s12 l3">
        <div className="card small item-card z-depth-5" style={{padding: '5px'}}>
          <span className="card-title" style={{marginTop: '2px'}}>
            {name}
          </span>
          <div className="card-image" style={{width: 'auto', textAlign: 'center', marginRight: '1%', marginTop: '10%'}}>
            <img src={image} className="item-image" alt="item-img" />
          </div>
          <div style={{align: 'center'}}>
            <button className="small-actions edit-move-btn btn-floating btn-small waves-effect deep-orange accent-3">
              <span style={{fontFamily: 'Hammersmith One'}}><i className="material-icons">edit</i></span>
            </button>
            <button className="small-actions delete-move-btn btn-floating btn-small waves-effect red accent-3">
              <span style={{fontFamily: 'Hammersmith One'}}>X</span>
            </button>
          </div>
        </div>
      </div>
    )
  }
}


export default Item

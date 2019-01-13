import React from 'react';
import BoxList from '../components/BoxList'
import ItemsSideBar from '../components/ItemsSideBar'
import MyBoxesHeader from '../components/MyBoxesHeader'
import NewBoxForm from '../components/NewBoxForm'
import ItemSearchBar from '../components/ItemSearchBar'

const BoxContainer = props => {
  // console.log("BoxContainer", props);
  return (
    <div className="container">
      {/*<h2 className="card-panel white black-text cont-title">My Boxes</h2>*/}
      <div className="row">
        <MyBoxesHeader />
        <NewBoxForm />
        <ItemSearchBar />
        <BoxList props={props}/>
        <ItemsSideBar props={props}/>
      </div>
    </div>
  )
}

export default BoxContainer;

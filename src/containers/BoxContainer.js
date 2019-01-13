import React from 'react';
import BoxList from '../components/BoxList'
import ItemsSideBar from '../components/ItemsSideBar'
import MyBoxesHeader from '../components/MyBoxesHeader'
import NewBoxForm from '../components/NewBoxForm'
import ItemSearchBar from '../components/ItemSearchBar'

class BoxContainer extends React.Component {

  state = {
    searchTerm: ''
  }

  handleSearch = event => {
    this.setState({ searchTerm: event.target.value })
  }


  render() {
    return (
      <div className="container" id="box-cont">
        {/*<h2 className="card-panel white black-text cont-title">My Boxes</h2>*/}
        <div className="row">
          <MyBoxesHeader />
          <NewBoxForm />
          <ItemSearchBar handleSearch={this.handleSearch} searchTerm={this.state.searchTerm} />
          <BoxList searchTerm={this.state.searchTerm} props={this.props}/>
          <ItemsSideBar searchTerm={this.state.searchTerm} props={this.props}/>
        </div>
      </div>
    )
  }

}

export default BoxContainer;

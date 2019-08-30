import React from 'react';
import BoxList from '../components/BoxList'
import ItemsSideBar from '../components/ItemsSideBar'
import MyBoxesHeader from '../components/MyBoxesHeader'
import NewBoxForm from '../components/NewBoxForm'
import ItemSearchBar from '../components/ItemSearchBar'
import { connect } from 'react-redux';
import { getMoveItems } from '../actions/itemActions'
import { withRouter } from 'react-router-dom'
import { getMoves } from '../actions/moveActions'
import { getBoxes } from '../actions/boxActions'
import withAuth from '../HOCs/withAuth'


class BoxContainer extends React.Component {

  state = {
    searchTerm: ''
  }

  componentDidMount() {
    // destructuring
    const { moveId, userId } = this.props.match.params
    this.props.getMoveItems(userId, moveId)
    this.props.getBoxes(userId, moveId)


  }

  handleSearch = event => {
    this.setState({ searchTerm: event.target.value })
  }


  filterBoxes = () => {
    return this.props.boxes.filter(b => b.items.find(i => i.name.match(new RegExp(this.state.searchTerm, 'i'))))
  }

  filterItems = () => {
    return this.props.moveItems.filter((item) => {
      return item.name.match(new RegExp(this.state.searchTerm, 'i')) // regex case insensitive /i .match/i
    })
  }

  render() {

    const boxes = this.state.searchTerm ? this.filterBoxes() : this.props.boxes
    const items = this.state.searchTerm ? this.filterItems() : this.props.moveItems


    return (
      <div className="container" id="box-cont">
        <div className="row">
          <MyBoxesHeader moves={this.state.moves} />
          <NewBoxForm />
          <ItemSearchBar handleSearch={this.handleSearch} searchTerm={this.state.searchTerm} />
          <BoxList boxes={boxes} />
          <ItemsSideBar items={items} searchTerm={this.state.searchTerm} />
        </div>
      </div>
    )
  }

}

const mapStateToProps = state => {

  return {
    moves: state.moves,
    user: state.user,
    moveItems: state.items,
    boxes: state.boxes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMoveItems: (userId, moveId) => dispatch(getMoveItems(userId, moveId)),
    getMoves: () => dispatch(getMoves()),
    getBoxes: (userId, moveId) => dispatch(getBoxes(userId, moveId))
  }
}


export default withAuth(withRouter(connect(mapStateToProps, mapDispatchToProps)(BoxContainer)));

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


class BoxContainer extends React.Component {

  state = {
    searchTerm: '',
    items: [],
    moves: []
  }

  componentDidMount() {
    // destructuring
    const { moveId, userId } = this.props.match.params
    this.props.getMoveItems(userId, moveId)

    // React fetch to get moves to pass to MyBoxesHeader
    // fetch(`http://localhost:3000/api/v1/users/${userId}/moves`)
    // .then(r => r.json())
    // .then(moves => {
    //   debugger
    //   this.setState({ moves }, () => console.log("updated state", this.state))
    // })

  }

  handleSearch = event => {
    this.setState({ searchTerm: event.target.value }, () => {
      const filteredItems = this.props.moveItems.filter((item) => {
        return item.name.toLowerCase().includes(this.state.searchTerm)
      })
      this.setState({ items: filteredItems })
    })
  }


  render() {
    // console.log("props IN BOX CONTAINER", this.props.moves);
    const filteredItems = this.props.moveItems.filter((item) => {
      return item.name.toLowerCase().includes(this.state.searchTerm)
    })

    const itemBoxIds = this.state.searchTerm ? this.state.items.map((i) => i.box_id) : this.props.moveItems.map((i) => i.box_id)

    return (
      <div className="container" id="box-cont">
        {/*<h2 className="card-panel white black-text cont-title">My Boxes</h2>*/}
        <div className="row">
          <MyBoxesHeader moves={this.state.moves} />
          <NewBoxForm />
          <ItemSearchBar doubleFilter={this.doubleFilter} handleSearch={this.handleSearch} searchTerm={this.state.searchTerm} />
          <BoxList itemBoxIds={itemBoxIds} searchTerm={this.state.searchTerm} props={this.props}/>
          <ItemsSideBar items={filteredItems} searchTerm={this.state.searchTerm} props={this.props}/>
        </div>
      </div>
    )
  }

}

const mapStateToProps = state => {

  return {
    moves: state.moves,
    user: state.user,
    moveItems: state.items
    // move: state.move
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMoveItems: (userId, moveId) => dispatch(getMoveItems(userId, moveId)),
    getMoves: () => dispatch(getMoves())
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoxContainer));

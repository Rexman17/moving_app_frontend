import React from 'react';
import {withRouter} from 'react-router-dom'
import ItemList from '../components/ItemList'
import NewItemForm from '../components/NewItemForm'

class ItemsContainer extends React.Component {
  state = {
    boxNum: ''
  }

  componentDidMount() {
    const { userId, moveId } = this.props.match.params

    fetch(`http://localhost:3000/api/v1/users/${userId}/moves/${moveId}/boxes`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
         Authorization: `Bearer ${localStorage.getItem('jwt')}`
     }
    })
      .then(r => r.json())
      .then(boxes => {
        let boxIdInt = parseInt(this.props.match.params.boxId)
        let foundBox = boxes.find((b) => b.id === boxIdInt)
        let boxNum = boxes.indexOf(foundBox) + 1

        this.setState({ boxNum: boxNum })
    })
  }

  render() {
    return (
      <div className="container">
        <h2 className="card-panel white black-text cont-title">Items in Box #{this.state.boxNum}</h2>
        <NewItemForm />
        <ItemList />
      </div>
    )
  }

}

export default withRouter(ItemsContainer)

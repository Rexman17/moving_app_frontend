import React from 'react';
// import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
// import { getMoves } from '../actions/moveActions'


class MyBoxesHeader extends React.Component {
  state = {
    moveName: '',
    moveDate: ''
  }

  componentDidMount() {
    const { userId } = this.props.match.params

    fetch(`http://localhost:3000/api/v1/users/${userId}/moves`)
      .then(r => r.json())
      .then(moves => {
        let moveIdInt = parseInt(this.props.match.params.moveId)
        let foundMove = moves.find((m) => m.id === moveIdInt)
        let name = foundMove.name
        let date = foundMove.date
        this.setState({ moveName: name, moveDate: date}, () => console.log("updated state", this.state))
    })
  }

  // reformatDate = (date) => {
  //   if (date) {
  //     let arrayOfDate = date.split("-")
  //     let newArrOfDate = []
  //     newArrOfDate.push(arrayOfDate[1])
  //     newArrOfDate.push(arrayOfDate[2])
  //     newArrOfDate.push(arrayOfDate[0])
  //     return newArrOfDate.join(',').split(',').join("-")
  //   } else {
  //     return null;
  //   }
  // }

  render() {

    return (
      <div>
        <h2 className="card-panel white black-text cont-title">
          My Boxes for <span id="my_boxes_header">
            '{this.state.moveName}'
              </span>
        </h2>
      </div>
    )
  }
}




export default withRouter(MyBoxesHeader);

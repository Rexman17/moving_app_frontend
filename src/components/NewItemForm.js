import React, { Fragment } from 'react'
import { addItem } from '../actions/itemActions'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

class NewItemForm extends React.Component {
  // create a controlled form;
  state = {
    name: '',
    image: ''
  }

  handleChange = (event) => {
    // console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    const { userId, moveId, boxId } = this.props.match.params

    this.props.addItem(this.state.name, this.state.image, userId, moveId, boxId)

    this.setState({ name: '', image: '' }) // reset form fields
  }


  render() {
    console.log("item form", this.props);
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit} className="row">
          <div className="input-field col s6">
            <input onChange={this.handleChange} placeholder="Item Name/Description..." name="name" id="item_name" type="text" value={this.state.itemName} autoComplete="off" required/>
          </div>
          <div className="input-field col s6">
            <input onChange={this.handleChange} placeholder="Image Url..." name="image" id="item_image" type="text" value={this.state.itemImg} autoComplete="off" required/>
            <div className="submit-btn">
              <button type="submit" className="addOrEditMoveBtn col s2 btn-small cyan lighten-2" style={{fontFamily: 'Hammersmith One', fontSize: '15px'}}>
                add
              </button>
            </div>
          </div>
        </form>
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItem: (name, image, userId, moveId, boxId) => dispatch(addItem(name, image, userId, moveId, boxId))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(NewItemForm))
// TODO: CLOUDINARY FOR PIC UPLOADS

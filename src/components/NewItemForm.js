import React, { Fragment } from 'react'
import { addItem } from '../actions/itemActions'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

const MY_CLOUD_NAME = process.env.REACT_APP_CLOUD_NAME
// const PRESET = process.env.REACT_APP_UPLOAD_PRESET

class NewItemForm extends React.Component {
  // create a controlled form;
  state = {
    name: '',
    image: '',
    // editing: false
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

  openWidget = () => {
    window.cloudinary.createUploadWidget(
     {
       cloudName: MY_CLOUD_NAME,
       uploadPreset: "snvjog2a"
     },
     (error, result) => {

       if (result && result.event === "success") {
         // debugger
         this.setState({
           image: `https://res.cloudinary.com/${MY_CLOUD_NAME}/image/upload/${result.info.path}`
         });
       }
     }
   ).open()
  }



  render() {
    // console.log("item form", this.props);
    return (
      <Fragment>
      <button onClick={this.openWidget} className="addOrEditMoveBtn col s2 btn-small red accent-3" style={{fontFamily: 'Hammersmith One', fontSize: '15px', margin: '5px'}}>
        Upload / Take Pic of Item(s)
      </button>

        <form onSubmit={this.handleSubmit} className="container">
          <div className="input-field col s3 row container">
            <input onChange={this.handleChange} placeholder="Item Name/Description..." name="name" id="item_name" type="text" value={this.state.name} autoComplete="off" />
          </div>

          <div className="container">
            <button type="submit" className="addOrEditMoveBtn col s2 btn-small red accent-3" style={{fontFamily: 'Hammersmith One', fontSize: '15px', margin: '15px'}}>
              add item
            </button>
          </div>
        </form>
      </Fragment>
    )
  }
}



const mapDispatchToProps = dispatch => {
  return {
    addItem: (name, image, userId, moveId, boxId) => dispatch(addItem(name, image, userId, moveId, boxId)),
  }
}

export default withRouter(connect(null, mapDispatchToProps)(NewItemForm))
// TODO: CLOUDINARY FOR PIC UPLOADS

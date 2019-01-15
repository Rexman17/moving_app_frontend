import React, { Fragment } from 'react'
import { addItem } from '../actions/itemActions'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

class NewItemForm extends React.Component {
  // create a controlled form;
  state = {
    name: '',
    image: '',
    // editing: false
  }

  // Triggers the form to prefill when u click edit btn, updating local state values
  // componentDidUpdate(prevProps) {
  //   if (this.props.selectedItem !== prevProps.selectedItem) {
  //     this.setState({
  //       name: this.props.selectedItem.name,
  //       image: this.props.selectedItem.image,
  //       editing: !this.state.editing
  //     }, () => console.log("%c componentDidUpdate", 'color: red', this.state))
  //   }
  // }


  handleChange = (event) => {
    // console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { userId, moveId, boxId } = this.props.match.params

    // if (this.state.editing === false) {

      this.props.addItem(this.state.name, this.state.image, userId, moveId, boxId)

      this.setState({ name: '', image: '' }) // reset form fields

    // }
    // else if (this.state.editing === true) {
    //
    //   this.props.editItem(this.state.name, this.state.image, userId, moveId, boxId, this.props.selectedItem.id)
    //
    //   this.setState({
    //     name: '',
    //     image: '',
    //     editing: false
    //   })
    // }
  }


  render() {
    console.log("item form", this.props);
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit} className="row">
          <div className="input-field col s6">
            <input onChange={this.handleChange} placeholder="Item Name/Description..." name="name" id="item_name" type="text" value={this.state.name} autoComplete="off" required/>
          </div>
          <div className="input-field col s6">
            <input onChange={this.handleChange} placeholder="Image Url..." name="image" id="item_image" type="text" value={this.state.image} autoComplete="off" />
            <div className="submit-btn">
              <button type="submit" className="addOrEditMoveBtn col s2 btn-small red accent-3" style={{fontFamily: 'Hammersmith One', fontSize: '15px'}}>
                add item
              </button>
            </div>
          </div>
        </form>
      </Fragment>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     selectedItem: state.selectedItem
//   }
// }


const mapDispatchToProps = dispatch => {
  return {
    addItem: (name, image, userId, moveId, boxId) => dispatch(addItem(name, image, userId, moveId, boxId)),
    // editItem: (name, image, userId, moveId, itemId) => dispatch(editItem(name, image, userId, moveId, itemId))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(NewItemForm))
// TODO: CLOUDINARY FOR PIC UPLOADS

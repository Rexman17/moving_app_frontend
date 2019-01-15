import React, { Fragment } from 'react'


class NewItemForm extends React.Component {
  // create a controlled form;
  state = {
    itemName: '',
    itemImg: ''
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  render() {
    return (
      <Fragment>
        <form className="row">
          <div className="input-field col s6">
            <input onChange={this.handleChange} placeholder="Item Name/Description..." name="itemName" id="item_name" type="text" value={this.state.itemName} autoComplete="off" required/>
          </div>
          <div className="input-field col s6">
            <input onChange={this.handleChange} placeholder="Image Url..." name="itemImg" id="item_image" type="text" value={this.state.itemImg} autoComplete="off" required/>
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

export default NewItemForm
// TODO: CLOUDINARY FOR PIC UPLOADS

import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { addBox, editBox } from '../actions/boxActions';
import { withRouter } from 'react-router-dom'

class NewBoxForm extends React.Component {
// Need to make form controlled so hold inputs in state:
  state = {
    boxName: '',
    boxCategory: '',
    editing: false
  }

  // Triggers the form to prefill when u click edit btn, updating local state values
  componentDidUpdate(prevProps) {
    if (this.props.selectedBox !== prevProps.selectedBox) {
      this.setState({
        boxName: this.props.selectedBox.name,
        boxCategory: this.props.selectedBox.category,
        editing: !this.state.editing
      }, () => console.log("%c componentDidUpdate", 'color: red', this.state))
    }
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    if (this.state.editing === false) { // CREATE MODE
      const { userId, moveId } = this.props.match.params
      this.props.addBox(this.state.boxName, this.state.boxCategory, userId, moveId)

      this.setState({ // clear fields once u submit
        boxName: '',
        boxCategory: ''
      })
    } else if (this.state.editing === true ) { // EDIT MODE

      const { userId, moveId } = this.props.match.params
      this.props.editBox(this.state.boxName, this.state.boxCategory, userId, moveId, this.props.selectedBox.id)

      // reset form fields
      this.setState({
        boxName: '',
        boxCategory: '',
        editing: false
      })
    }

  } // end handleSubmit

  render() {
    // console.log("NEW BOX FORM PROPS", this.props);
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit} className="row">
          <div className="input-field col s6">
            <input onChange={this.handleChange} placeholder="Box Name..." name="boxName" id="box_name" type="text" value={this.state.boxName} autoComplete="off" required/>
          </div>
          <div className="input-field col s6">
            <input onChange={this.handleChange} placeholder="Room, i.e., where does this stuff belong?" name="boxCategory" id="box_category" type="text" value={this.state.boxCategory} autoComplete="off" required/>
            <div className="submit-btn">
              <button type="submit" className="addOrEditMoveBtn col s2 btn-small cyan lighten-2" style={{fontFamily: 'Hammersmith One', fontSize: '15px'}}>
                {this.state.editing ? "Submit" : "Add"}
              </button>
            </div>
          </div>
        </form>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedBox: state.selectedBox // box selected to edit
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBox: (name, category, userId, moveId) => dispatch(addBox(name, category, userId, moveId)),
    editBox: (name, category, userId, moveId, boxId) => dispatch(editBox(name, category, userId, moveId, boxId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewBoxForm));

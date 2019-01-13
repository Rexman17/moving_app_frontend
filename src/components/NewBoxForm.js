import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { addBox } from '../actions/boxActions';
import { withRouter } from 'react-router-dom'

class NewBoxForm extends React.Component {
// Need to make form controlled so hold inputs in state:
  state = {
    boxName: '',
    boxCategory: ''
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    console.log("NEW BOX FORM PROPS", this.props);
    return (
      <Fragment>
        <form className="row">
          <div className="input-field col s6">
            <input onChange={this.handleChange} name="boxName" id="box_name" type="text" value={this.state.boxName} autoComplete="off" required/>
            <label htmlFor="box_name">Box Name</label>
          </div>
          <div className="input-field col s6">
            <input onChange={this.handleChange} name="boxCategory" id="box_category" type="text" value={this.state.boxCategory} autoComplete="off" required/>
            <label htmlFor="box_category">Category, i.e., what room do I belong in?</label>
            <div className="submit-btn">
              <button type="submit" className="addOrEditMoveBtn col s2 btn-small cyan lighten-2" style={{fontFamily: 'Hammersmith One', fontSize: '15px'}}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </Fragment>
    )
  }
}

// const mapStateToProps = state => {
//   console.log("STATE", state);
// }

const mapDispatchToProps = dispatch => {
  console.log("DISPATCH", dispatch);
}

export default withRouter(connect(null, mapDispatchToProps)(NewBoxForm));

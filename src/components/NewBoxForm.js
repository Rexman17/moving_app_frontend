import React, { Fragment } from 'react';


class NewBoxForm extends React.Component {


  render() {
    return (
      <Fragment>
        <form className="row">
          <div className="input-field col s6">
            <input name="boxName" id="box_name" type="text" autoComplete="off" required/>
            <label htmlFor="box_name">Box Name</label>
          </div>
          <div className="input-field col s6">
            <input name="boxCategory" id="box_category" type="text" autoComplete="off" required/>
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


export default NewBoxForm;

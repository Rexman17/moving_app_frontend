// ALREADY EXISTING USER
export const /*FUNCTION*/ loginUser = (username, password) => {
  return /*FUNCTION*/ (dispatch) => { //thunk
    // console.log(process.env.REACT_APP_API_ENDPOINT)
    dispatch({ type: 'AUTHENTICATING_USER' })
    // dispatch(authenticatingUser())
    // fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/login`)
    // adapter.loginUser(username, password)
    // http://localhost:3000
    // console.log(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/login`);
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/login`, { //TODO: move this to an adapter
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password
        }
      })
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw response
        }
      })
      .then(JSONResponse => {
        console.log('%c INSIDE YE OLDE .THEN', 'color: navy')
        localStorage.setItem('jwt', JSONResponse.jwt)
        dispatch({ type: 'SET_CURRENT_USER', payload: JSONResponse.user })
        // dispatch(setCurrentUser(JSONResponse.user))
      })
      .catch(r => r.json().then(e => dispatch({ type: 'FAILED_LOGIN', payload: e.message })))
      // .then((jsonResponse) => {
      //   localStorage.setItem('jwt', jsonResponse.jwt)
      //   dispatch(setCurrentUser(jsonResponse.user))
      // })
  }
}

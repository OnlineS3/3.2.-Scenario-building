


export const checkAuthentication = () => {
  console.log("Checking for authentication");
  return dispatch => { // Redux thunk, helps with async operations
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    }
    fetch('http://localhost:8080/api/auth', options).then((response) => {
      return response.json().then((json) => {
        // dispatch(updateStoreWith(json)); // Do something with the fetched data
        console.log("Updating auth: ", json);
        dispatch({
          type: 'UPDATE_AUTH',
          auth: json.loggedIn
        })
      })
    })
  }
}

import mockdata from '../data/mockdata';

const updatePestleData = () => {
  return {
    type: 'UPDATE_PESTLE',
    boxes: mockdata.boxes
  }
}

export const loadPestleData = () => {
  return dispatch => {
    dispatch(updatePestleData());
  }
}


// Perform rest requests here. Example:

// export const getStuff = (requestUrl, otherParams) => {
//   return dispatch => { // Redux thunk, helps with async operations
//     fetch(requestUrl).then((response) => {
//       return response.json().then((json) => {
//         dispatch(updateStoreWith(json)); // Do something with the fetched data
//       })
//     })
//   }
// }

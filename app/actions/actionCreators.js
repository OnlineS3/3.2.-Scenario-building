import analysisData from '../data/analysisdata';


const updateAnalysisData = () => {
  return {
    type: 'UPDATE_DATA',
    data: analysisData.rows
  }
}

const removeItemFromState = (id) => {
  return {
    type: 'REMOVE_ITEM',
    id: id
  }
}

const addItemToState = (item) => {
  return {
    type: 'ADD_ITEM',
    item: item
  }
}

export const createAnalysis = (name) => {
  return dispatch => { // Redux thunk, helps with async operations
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin',
      body: JSON.stringify({name: name})
    }
    fetch('http://localhost:8080/api/analysis', options).then((response) => {
      return response.json().then((json) => {
        // dispatch(updateStoreWith(json)); // Do something with the fetched data
        console.log("Done.", json);
      })
    })
  }
}


export const loadAnalysisData = () => {
  return dispatch => {
    dispatch(updateAnalysisData());
  }
}

export const createItem = (item, analysisId) => {
  return dispatch => { // Redux thunk, helps with async operations
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin',
      body: JSON.stringify({item: item, analysisId: analysisId})
    }
    fetch('http://localhost:8080/api/item', options).then((response) => {
      return response.json().then((json) => {
        // dispatch(updateStoreWith(json)); // Do something with the fetched data
        console.log("Done.", json);
      })
    })
  }
}

export const removeItem = (id) => {
  return dispatch => {
    dispatch(removeItemFromState(id));
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

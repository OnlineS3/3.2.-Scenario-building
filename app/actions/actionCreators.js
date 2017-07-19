import analysisData from '../data/analysisdata';


const updateAnalysisData = () => {
  return {
    type: 'UPDATE_DATA',
    data: analysisData.rows
  }
}

const updateAnalyses = (analyses) => {
  return {
    type: 'UPDATE_ANALYSES',
    analyses: analyses
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

// All analyses

export const loadAnalyses = () => {
  return dispatch => { // Redux thunk, helps with async operations
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    }
    fetch('http://localhost:8080/api/analyses', options).then((response) => {
      return response.json().then((json) => {
        console.log("Response: ", json.analyses);
        if (json.analyses) {
        // dispatch(updateStoreWith(json)); // Do something with the fetched data
          dispatch(updateAnalyses(json.analyses))
        } else {
          console.log("No analyses returned.");
        }
      })
    })
  }
}


// Single analysis

export const createAnalysis = (name) => {
  console.log("creating new analysis...");
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

export const loadAnalysis = () => {
  return dispatch => {
    dispatch(updateAnalysisData());
  }
}

// Items

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

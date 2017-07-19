const analysesReducer = (state = [], action) => {
  if (action.type == "UPDATE_ANALYSES") {
    console.log("Updated analyses.");
    return action.analyses
  }
  if (action.type == "ADD_ANALYSIS") {
    console.log("Added analysis to state.");
    return [...state, action.data];
  }
  return state;
}

export default analysesReducer;

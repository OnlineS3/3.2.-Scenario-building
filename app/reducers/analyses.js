const analysesReducer = (state = [], action) => {
  if (action.type == "UPDATE_ANALYSES") {
    console.log("Updated analyses.");
    return action.analyses
  }
  if (action.type == "ADD_ANALYSIS") {
    console.log("Added analysis to state.");
    return [...state, action.data];
  }
  if (action.type == "REMOVE_ANALYSIS") {
    console.log("Deleted analysis from state.");
    return state.filter((analysis) => analysis.id !== action.analysisId)
  }
  return state;
}

export default analysesReducer;

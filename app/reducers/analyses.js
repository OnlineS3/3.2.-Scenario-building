const analysesReducer = (state = [], action) => {
  if (action.type == "UPDATE_ANALYSES") {
    console.log("Updated analyses.");
    return action.analyses
  }
  return state;
}

export default analysesReducer;

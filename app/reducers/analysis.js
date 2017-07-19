const analysisReducer = (state = [], action) => {
  if (action.type === "UPDATE_DATA") {
    console.log("Updating data...");
    console.log(action.data);
    return action.data;
  }
  if (action.type === "ADD_ITEM") {
    console.log("Adding item to state");
    return [...state, action.data]
  }
  if (action.type === "REMOVE_ITEM") {
    console.log("Removing item...");
    console.log(action.itemId)
    return state.filter(item => item.id !== action.itemId)
  }
  return state;
}

export default analysisReducer;

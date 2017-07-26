const analysisReducer = (state = {analysis: {name: ""}, items: []}, action) => {
  if (action.type === "UPDATE_DATA") {
    console.log("Updating data...");
    console.log(action.analysis);
    return action.data;
  }
  if (action.type === "ADD_ITEM") {
    console.log("Adding item to state");
    return {...state, items: [...state.items, action.data]}
  }
  if (action.type === "REMOVE_ITEM") {
    console.log("Removing item...");
    console.log(action.itemId)
    return {...state, items: state.items.filter(item => item.id !== action.itemId)}
  }
  return state;
}

export default analysisReducer;

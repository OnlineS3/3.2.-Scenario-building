const pestleReducer = (state = [], action) => {
  if (action.type === "UPDATE_PESTLE") {
    console.log("Updating pestle data...");
    return action.boxes;
  }
  return state;
}

export default pestleReducer;

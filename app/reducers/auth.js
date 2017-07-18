const authReducer = (state = [], action) => {
  if (action.type === "UPDATE_AUTH") {
    console.log("Updated auth status.");
    return action.auth
  }
  return state;
}

export default authReducer;

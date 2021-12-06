const postReducer = (state = {}, action) => {
  switch (action.type) {
    case "FET_POSTS":
      return {
        ...state,
        error: 0,
        post: action.payload,
      };

    case "FET_POSTS_ERROR":
      return {
        ...state,
        post: action.payload,
        error: 1,
      };

    default:
      return state;
  }
};

export default postReducer;

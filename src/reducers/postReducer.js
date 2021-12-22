import {
  SHOW_POST,
  FET_POSTS_ERROR,
  FET_POSTS,
  LOADING_POST,
} from "../constants/postTypes";

const postReducer = (state = {}, action) => {
  switch (action.type) {
    case LOADING_POST:
      return {
        ...state,
        error: 0,
        message: action.message,
        post: action.payload,
        loading: action.loading,
      };

    case FET_POSTS:
      return {
        ...state,
        error: 0,
        message: action.message,
        post: action.payload,
        loading: action.loading,
      };

    case SHOW_POST:
      return {
        ...state,
        error: 0,
        message: action.message,
        post: action.payload,
        loading: action.loading,
      };

    case FET_POSTS_ERROR:
      return {
        ...state,
        post: action.payload,
        error: 1,
        message: action.message,
        loading: action.loading,
      };

    default:
      return state;
  }
};

export default postReducer;

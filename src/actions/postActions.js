import Api from "../api/Api";
import {
  SHOW_POST,
  FET_POSTS_ERROR,
  FET_POSTS,
  LOADING_POST,
} from "../constants/postTypes";

export const showList = () => async (dispatch) => {
  const response = await Api.get("/posts");

  if (response.status === 200) {
    // return {
    //   type: "FET_POSTS",
    //   payload: response.data,
    // };
    return dispatch({ type: FET_POSTS, payload: response.data });
  } else {
    return dispatch({
      type: FET_POSTS_ERROR,
      payload: [],
    });
  }
};

export const getAll = () => {
  return async function (dispatch) {
    //dispatch(searchRequest());
    try {
      const response = await Api.get("/posts");
      dispatch({ type: "FET_POSTS", payload: response.data });
    } catch (error) {
      dispatch({
        type: FET_POSTS_ERROR,
        payload: [],
      });
    }
  };
};

export const showDetail = (id) => {
  return async function (dispatch) {
    dispatch({
      type: LOADING_POST,
      payload: [],
      message: "Loading...",
      loading: true,
    });

    try {
      const response = await Api.get(`/news/${id}`);
      dispatch({
        type: SHOW_POST,
        payload: response.data,
        message: response.message,
        loading: false,
      });
    } catch (error) {
      dispatch({
        type: FET_POSTS_ERROR,
        payload: [],
        error: 1,
        message: error,
        loading: false,
      });
    }
  };
};

//searchSuccess
//searchError
// const showListAll = {
//   showList,
//   showDetail,
//   getAll,
// };
// export default showListAll;

import Api from "../api/Api";

export const showList = () => async (dispatch) => {
  const response = await Api.get("/posts");

  if (response.status == 200) {
    // return {
    //   type: "FET_POSTS",
    //   payload: response.data,
    // };
    return dispatch({ type: "FET_POSTS", payload: response.data });
  } else {
    return dispatch({
      type: "FET_POSTS_ERROR",
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
        type: "FET_POSTS_ERROR",
        payload: [],
      });
    }
  };
  return;
};

//searchSuccess
//searchError
const showListAll = {
  showList,
  getAll,
};
export default showListAll;

import Api from "../api/Api";

export const showList = () => async (dispatch) => {
  const response = await api.get("/posts");

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

  //   dispatch({
  //     type: "FET_POSTS",
  //     payload: response.data,
  //   }).catch(function (err) {
  //     dispatch({
  //       type: "FOO" + "_REJECTED",
  //       payload: err,
  //     });
  //   });
};

export const getAll = () => {
  return api.get("/posts");
};

const showListAll = {
  showList,
  getAll,
};
export default showListAll;

// export const getUsers = () => async dispatch => {

//     try{
//         const res = await axios.get(`http://jsonplaceholder.typicode.com/users`)
//         dispatch( {
//             type: GET_USERS,
//             payload: res.data
//         })
//     }
//     catch(error){
//         dispatch( {
//             type: USERS_ERROR,
//             payload: error,
//         })
//     }

// }

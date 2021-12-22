import React, { useState, useEffect } from "react";
import { getAll, showList } from "./actions/postActions";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dataPost = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showList());
  }, []);

  const { post, error } = dataPost;

  let listItems;
  if (post && error === 0) {
    listItems = post.map((item) => <li key={item.id}>{item.title}</li>);
  }

  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
}

export default App;

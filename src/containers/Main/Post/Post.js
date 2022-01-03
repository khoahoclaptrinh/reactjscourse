import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAll } from "../../../actions/postActions";
import Loading from "../../../components/common/Loading";
import ListPost from "../../../components/Post/ListPost";
import Pagination from "../../../components/common/Pagination";
import Search from "../../../components/Post/Search";

export default function Post() {
  const dataPost = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();
  const [pageOffset, setPageOffset] = useState(0);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const params = {};
    setKeyword("");
    dispatch(getAll(params));
  }, []);

  const handlePageChange = (event) => {
    setPageOffset(event.selected);
    const params = {
      page: event.selected + 1,
      //search: keyword,
    };

    dispatch(getAll(params));
  };

  const changeHandleSearch = (q) => {
    const params = {
      page: 1,
      search: q,
    };
    setKeyword(q);
    dispatch(getAll(params));
  };

  const { post, error, loading } = dataPost;

  if (loading || (post && post.items == null)) {
    return <Loading />;
  }

  let content = "";
  var totalPage = 0;
  let perPage = 20;
  if (post && error === 0) {
    perPage = post.perPage;
    totalPage = Math.ceil(post.total / perPage);
    content = <ListPost dataPost={post.items} />;
  }

  return (
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto"></div>
        <Search keyword={keyword} changeHandleSearch={changeHandleSearch} />
        {content}
        <Pagination
          totalPage={totalPage}
          handlePageChange={handlePageChange}
          pageOffset={pageOffset}
        />
      </div>
    </section>
  );
}

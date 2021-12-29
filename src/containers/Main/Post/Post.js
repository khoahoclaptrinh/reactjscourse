import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import parse from "html-react-parser";
import { getAll } from "../../../actions/postActions";
import ReactPaginate from "react-paginate";
import Loading from "../../../components/common/Loading";
import ListPost from "../../../components/Post/ListPost";
import Pagination from "../../../components/common/Pagination";

export default function Post() {
  const dataPost = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();
  const [pageOffset, setPageOffset] = useState(0);

  useEffect(() => {
    const params = {};
    dispatch(getAll(params));
  }, []);

  const handlePageChange = (event) => {
    setPageOffset(event.selected);
    const params = {
      page: event.selected + 1,
    };

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
    content = (
      <>
        {post.items &&
          post.items.map((item) => (
            <div key={item.id}>
              <div className="alert alert-primary" role="alert">
                {item.name}
              </div>
            </div>
          ))}
      </>
    );

    //content = <ListPost dataPost={post.items} />;
  }

  return (
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto"></div>
        {content}

        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          pageCount={totalPage}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageChange}
          containerClassName="pagination"
          activeClassName="active"
          forcePage={pageOffset}
        />

        {/* <Pagination
          totalPage={totalPage}
          handlePageChange={handlePageChange}
          pageOffset={pageOffset}
        /> */}
      </div>
    </section>
  );
}

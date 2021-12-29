import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import parse from "html-react-parser";
import { showDetail } from "../../../actions/postActions";
import Loading from "../../../components/common/Loading";
export default function About() {
  const dataPost = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    let id = 402;
    dispatch(showDetail(id));
  }, []);

  const { post, error, loading } = dataPost;

  if (loading || (post && post.data == null)) {
    return <Loading />;
  }

  let content = "";
  if (post && error === 0) {
    const description = post.data.description || "";
    content = (
      <>
        <h1>{post.data.name || ""}</h1>
        <div className="card shadow-sm p-3 mb-5 bg-body rounded">
          <div className="card-body">{parse(description)}</div>
        </div>
      </>
    );
  }

  return (
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto"></div>
        {content}
      </div>
    </section>
  );
}

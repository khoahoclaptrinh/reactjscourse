import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { showDetail } from "../../../actions/postActions";
export default function About() {
  const dataPost = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    let id = 1;
    dispatch(showDetail(id));
  }, []);

  const { post, error, loading } = dataPost;

  if (loading) {
    return (
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <Skeleton height={5} count={5} width={600} />
          </div>
        </div>
      </section>
    );
  }

  let content = "";
  if (post && error === 0) {
    content = (
      <>
        <h1>{post.data.name}</h1>
        <div class="card shadow-sm p-3 mb-5 bg-body rounded">
          <div class="card-body">
            <div dangerouslySetInnerHTML={{ __html: post.data.description }} />
          </div>
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

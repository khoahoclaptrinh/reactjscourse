import React, { useEffect } from 'react';
import { showDetail } from '../../../actions/postActions'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import parse from "html-react-parser";


const PostDetail = () => {

    const postData = useSelector((state) => state.postReducer)
    const dispatch = useDispatch();
    let { id } = useParams();


    useEffect(() => {
        // Gọi Api load đầu tiên
        dispatch(showDetail(id))
    }, [dispatch])

    const { post } = postData;

    return (
        <section className="py-5 text-center container">
            <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                    {post && post.data && (
                        <div className="shadow-lg p-3 mb-5 bg-body rounded">
                            <h1> {parse(post.data.name)}</h1>
                            <div>{parse(post.data.description)}</div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default PostDetail;
import parse from "html-react-parser";
import React, { useState, useRef } from "react";
import faker from 'faker';
export default function ListPost({ dataPost }) {

  const [selectedItem, setSelectedItem] = useState(0);
  const pageViewRef = useRef(null);

  const showDetail = (item) => {


    // pageViewRef.current.scrollTo(
    //   {
    //     top: 0,
    //     behavior: 'smooth'
    //   }
    // );

    setSelectedItem(item.id);
    window.scrollTo({ behavior: 'smooth', top: pageViewRef.current.offsetTop })
    //pageViewRef.current.scrollIntoView({ behavior: 'smooth' })
  };


  let showContent = '';
  if (dataPost.length > 0) {
    // Lấy phần tử đầu tiền
    const [first] = dataPost;
    showContent = first;
    if (selectedItem > 0) {
      showContent = dataPost.find(element => element.id == selectedItem);
    }

  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {dataPost &&
            dataPost.map((item) => (
              <div className="card mb-3"
                style={{ maxWidth: 'max-width: 540px', cursor: 'pointer' }}
                key={item.id} onClick={(e) => showDetail(item)}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <svg class="bd-placeholder-img img-fluid rounded-start" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false">
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#868e96"></rect>
                      <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
                    </svg>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>

            ))}
        </div>
        <div className="col" ref={pageViewRef}>

          <div className="shadow p-3 mb-5 bg-body rounded">
            <p>{showContent.name}</p>
            {parse(showContent.description)}
          </div>

        </div>
      </div>
    </div>
  );
}
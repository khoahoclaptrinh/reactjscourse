import parse from "html-react-parser";
import React, { useState, useRef } from "react";
import faker from 'faker';
export default function ListPost({ dataPost }) {

  const [selectedItem, setSelectedItem] = useState(0);
  const pageViewRef = useRef()
  const showDetail = (item) => {
    setSelectedItem(item.id);
    pageViewRef.current.scrollIntoView({ behavior: 'smooth', inline: 'nearest' })
    // console.log(pageViewRef.current.top);


    // if (window !== undefined && window !== null) {
    //   window.scrollTo({
    //     top: 0,
    //     behavior: 'smooth'
    //   });
    // }


    // window.scrollTo(
    //   {
    //     top: 0,
    //     behavior: 'smooth'
    //   }
    // );
  };

  //https://robinvdvleuten.nl/blog/scroll-a-react-component-into-view/
  //https://www.codegrepper.com/code-examples/javascript/scrollintoview+react
  //https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView

  let content = '';
  if (dataPost) {
    const [first] = dataPost;
    content = first;
    if (selectedItem > 0) {
      content = dataPost.find(element => element.id == selectedItem);
    }
    console.log(content)
  }

  return (
    <div className="container" ref={pageViewRef}>
      <div className="row">
        <div className="col">
          {dataPost &&
            dataPost.map((item) => (
              <div key={item.id} className="card mb-3" style={{ maxWidth: '540px', cursor: 'pointer' }} onClick={(e) => showDetail(item)}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={faker.image.image()} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="col" >
          <div className="shadow p-3 mb-5 bg-body rounded" >{parse(content.description)}</div>
        </div>
      </div>
    </div>
  );
}

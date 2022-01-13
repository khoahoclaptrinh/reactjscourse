import parse from "html-react-parser";
import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
export default function ListPostTest({ dataPost }) {

  const [selectedItem, setSelectedItem] = useState(0);
  const [selectedItemTwo, setSelectedItemTwo] = useState(0);
  const [show, setShow] = useState(false);

  const showDetail = (item) => {
    setSelectedItem(item.id);
  };

  const showDetailTwo = (item) => {
    setSelectedItemTwo(item);
    setShow(true);
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container">
      {dataPost &&
        dataPost.map((item) => (
          <div key={item.id}>
            <div className="row mb-3">
              <div className="col">{item.name}</div>
              <div className="col">
                <div>
                  ddd
                </div>
                <button
                  type="button"
                  className="btn btn-primary btn-sm me-md-2"
                  onClick={(e) => showDetail(item, e)}
                >
                  <i className="bi bi-binoculars"></i> View 1
                </button>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm me-md-2"
                  onClick={(e) => showDetailTwo(item, e)}
                >
                  <i className="bi bi-binoculars-fill"></i> View 2
                </button>
                <button type="button" className="btn btn-success btn-sm">
                  <i className="bi bi-view-list"></i> View 3
                </button>
              </div>
              <div className="col">Column</div>

              <div
                className="row mt-3"
                style={{ display: selectedItem == item.id ? "block" : "none" }}
              >
                <div className="alert alert-secondary" role="alert">
                  {parse(item.description)}
                </div>
              </div>
            </div>
          </div>
        ))}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedItemTwo.id && selectedItemTwo.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedItemTwo.id && parse(selectedItemTwo.description)}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}


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

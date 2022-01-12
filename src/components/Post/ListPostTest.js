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

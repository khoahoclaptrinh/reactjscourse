import parse from "html-react-parser";
import React, { useState } from "react";
export default function ListPostTest({ dataPost }) {

  const [selectedItem, setSelectedItem] = useState(0);
  const showDetail = (item) => {
    setSelectedItem(item.id);
  };

  return (
    <div className="container">
      {dataPost &&
        dataPost.map((item) => (
          <div key={item.id}>
            <div className="row mb-3">
              <div className="col">{item.name}</div>
              <div className="col">
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
    </div>
  );
}

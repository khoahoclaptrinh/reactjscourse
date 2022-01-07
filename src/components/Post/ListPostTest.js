import parse from "html-react-parser";
import React, { useState } from "react";

export default function ListPost({ dataPost }) {
  const [selectedId, setSelectedId] = useState(0);
  const showPost = (item) => {
    setSelectedId(item.id);
  };

  return (
    <div className="container">
      {dataPost &&
        dataPost.map((item) => (
          <div key={item.id} className="row mb-3">
            <div className="col">{item.name}</div>
            <div className="col">
              <button
                type="button"
                className="btn btn-primary btn-sm me-md-2"
                onClick={(e) => showPost(item, e)}
              >
                <i className="bi bi-binoculars-fill"></i> Xem 1
              </button>

              <button type="button" className="btn btn-success btn-sm me-md-2">
                <i className="bi bi-binoculars"></i> Xem 2
              </button>

              <button type="button" className="btn btn-outline-danger btn-sm">
                <i className="bi-film"></i> Xem 3
              </button>
            </div>
            <div className="col">Column</div>
            <div
              className="row mb-3 mt-3"
              style={{ display: selectedId == item.id ? "block" : "none" }}
            >
              <div className="col-12">
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

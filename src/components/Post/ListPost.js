export default function ListPost({ dataPost }) {
  return (
    <div className="container">
      {dataPost &&
        dataPost.map((item) => (
          <div key={item.id} className="row mb-3">
            <div className="col">{item.name}</div>
            <div className="col">
              <button type="button" className="btn btn-primary me-md-2">
                <i className="bi bi-binoculars-fill"></i> Xem 1
              </button>

              <button type="button" className="btn btn-success me-md-2">
                <i className="bi bi-binoculars"></i> Xem 2
              </button>

              <button type="button" className="btn btn-outline-danger">
                <i className="bi-film"></i> Xem 3
              </button>
            </div>
            <div className="col">Column</div>
          </div>
        ))}
    </div>
  );
}

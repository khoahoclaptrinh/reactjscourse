import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark  fixed-top bg-dark">
        <div className="container-fluid">
          <Link className="nav-link active" to="/" aria-current="page">
            <img
              src="https://khoahoclaptrinh.top/frontend/assets/images/logo/01.png"
              alt="Mr Code Happy"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/admin"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/post">
                  Post
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Web
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}

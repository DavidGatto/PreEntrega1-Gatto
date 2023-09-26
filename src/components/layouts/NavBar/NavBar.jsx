import { CartWidget } from "../../common/CartWidget";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <header>
      <nav className="navbar appbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Mixned
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  All
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Hapebeast
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Monkey
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Wild pig
                </a>
              </li>
            </ul>
            <CartWidget />
          </div>
        </div>
      </nav>
    </header>
  );
};

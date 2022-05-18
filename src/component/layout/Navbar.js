import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { Link, NavLink,useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
    const logout = () => {
      localStorage.clear();
      // window.location.href = "/";
      navigate("/");
    };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      {/* <div classNameName="container"> */}
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/home">
          React User
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
        <Link className="btn btn-success" to="/user/add">
          Add User
        </Link>
        <button className="btn btn-danger mr-3" onClick={()=>{logout()}}>
          Logout
        </button>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;

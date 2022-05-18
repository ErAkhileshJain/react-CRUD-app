import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    email: "",
    username: "",
    phone: "",
    website: "",
    company: "",
    address: "",
  });

  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:4002/users/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container py-4">
      <div className="row">
        <div className="col">
          <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
            <Link className="btn btn-primary" to="/home">
              Back
            </Link>
          </nav>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="card mb-4">
            <div className="card-body text-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                alt="avatar"
                className="rounded-circle img-thumbnail"
                // style="width: 150px;"
              />
              <h5 className="my-3">{user.name}</h5>
              {/* <p className="text-muted mb-1">Full Stack Developer</p> */}
              {/* <p className="text-muted mb-4">{`${user.address.suite}, ${user.address.street}, ${user.address.city}, ${user.address.zipcode} `}</p>
              <div className="d-flex justify-content-center mb-2">
                <button type="button" className="btn btn-primary">
                  Follow
                </button>
                <button type="button" className="btn btn-outline-primary ms-1">
                  Message
                </button>
              </div> */}
            </div>
          </div>
          {/* <div className="card mb-4 mb-lg-0">
            <div className="card-body p-0">
              <ul className="list-group list-group-flush rounded-3">
                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                  <i className="fas fa-globe fa-lg text-warning"></i>
                  <p className="mb-0">https://mdbootstrap.com</p>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                  <i
                    className="fab fa-github fa-lg"
                    // style="color: #333333;"
                  ></i>
                  <p className="mb-0">mdbootstrap</p>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                  <i
                    className="fab fa-twitter fa-lg"
                    // style="color: #55acee;"
                  ></i>
                  <p className="mb-0">@mdbootstrap</p>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                  <i
                    className="fab fa-instagram fa-lg"
                    // style="color: #ac2bac;"
                  ></i>
                  <p className="mb-0">mdbootstrap</p>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                  <i
                    className="fab fa-facebook-f fa-lg"
                    // style="color: #3b5998;"
                  ></i>
                  <p className="mb-0">mdbootstrap</p>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
        <div className="col-lg-8">
          <div className="card mb-4">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0">Full Name</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">{user.name}</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0">Email</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">{user.email}</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0">Phone</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">{user.phone}</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0">Address</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">{`${user.address.suite}, ${user.address.street}, ${user.address.city}, ${user.address.zipcode} `}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Link className="btn btn-primary" to="/home">
        Back
      </Link>
      <h5 className="display-8">User Id: {id}</h5>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {user.name}</li>
        <li className="list-group-item">user name: {user.username}</li>
        <li className="list-group-item">email: {user.email}</li>
        <li className="list-group-item">phone: {user.phone}</li>
        <li className="list-group-item">website: {user.website}</li>
      </ul> */}
    </div>
  );
};

export default User;

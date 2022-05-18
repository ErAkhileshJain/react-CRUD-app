import React, { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [user, setUser] = useState({
    name: "",
    email: "",
    username: "",
    phone: "",
    website: "",
    company: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
    },
  });
  
  const [address, setAddress] = useState({
      street: "",
      suite: "",
      city: "",
      zipcode: ""
  });

  // const { name,email} = user;
  const onInputChange = (e) => {
    // console.log("USER--->",{ ...user, [e.target.name]: e.target.value });
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onAddressInputChange = (e) => {
    // console.log("Address---->",{ ...address, [e.target.name]: e.target.value });
    setAddress({ ...address, [e.target.name]: e.target.value });
    setUser({address:address})
  };

  useEffect(() => { 
    loadUser();
  },[])  
  const loadUser = async() => { 
    const result = await axios.get(`http://localhost:4002/users/${id}`);
    setUser(result.data)
    setAddress(result.data.address)
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    const un = user.email.split("@");
    user["username"] = un[0];
    await axios.put(`http://localhost:4002/users/${id}`, user);
    navigate("/home");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit User</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={user.name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={user.email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={user.phone}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          {/* <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Street"
              name="street"
              value={address.street}
              onChange={(e) => onAddressInputChange(e)}
            />
          </div> */}
          <button className="btn btn-primary btn-block">Update</button>
          <button type="button" className="btn btn-primary btn-lg btn-floating">
            <i className="fab fa-facebook-f"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;

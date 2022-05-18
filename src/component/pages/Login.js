import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [err, setErr] = useState();
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    // e.preventDefault();
    console.log("user--->", user);
    // const un = user.email.split("@");
    // user["username"] = un[0];
    try {
      const result = await axios.post(
        "https://peaceful-stream-42545.herokuapp.com/api/v1/auth/login",
        user
      );
      console.log(result.data);
      if (result.data.responseCode == 200) {
        localStorage.setItem("userToken", result.data.result.token);
        navigate("/home");
      }
    } catch (e) {
      console.log("ERROR--->", e.response.data.message);
      setErr(e.response.data.message);
    }
  };

  return (
    <div className="component">
      <div className="py-4">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Login</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group mb-3">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter Your Email"
                name="email"
                value={user.email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="password"
                className="form-control form-control-lg"
                placeholder="Enter Your Password"
                name="password"
                value={user.password}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="d-grid gap-2">
              <button
                className="btn btn-primary"
                type="button"
                onClick={(e) => onSubmit(e)}
              >
                Login
              </button>
            </div>
            {err ? (
              <div className="alert alert-danger mt-3" role="alert">
                {err}
              </div>
            ) : (
              ""
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

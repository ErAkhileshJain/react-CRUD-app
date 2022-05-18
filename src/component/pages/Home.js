import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'

  
const Home = () => {
  const [users, setusers] = useState([]);
  useEffect(() => { 
    loadUsers();
  }, [])
  
  const loadUsers = async () => { 
    const result = await axios.get("http://localhost:4002/users");
    console.log(result.data);
    setusers(result.data.reverse());
  }

  const deleteUser = async (id) => { 
    await axios.delete(`http://localhost:4002/users/${id}`);
    loadUsers();
  }
  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table className="table border">
          <thead className="table table-dark">
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link className="btn btn-primary me-md-2" to={`/user/view/${user.id}`}>
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary me-md-2" to={`/user/edit/${user.id}`}>
                    Edit
                  </Link>
                  <button className="btn btn-danger mr-2" onClick={() => { deleteUser(user.id)}}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;

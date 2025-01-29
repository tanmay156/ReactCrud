import axios from "axios";
import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch users");
      });
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Would you like to delete this user?")) {
      axios
        .delete(`http://localhost:3000/users/${id}`)
        .then(() => {
          setData(data.filter((user) => user.id !== id)); // Remove user from UI
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
      <h1 className="mb-4">List of Users</h1>
      <div className="w-75 rounded bg-white border shadow p-4">
        {error && <div className="alert alert-danger">{error}</div>}

        <table className="table table-striped table-bordered">
          <div className="d-flex justify-content-end mb-2 mt-2">
            <Link to="/create" className="btn btn-success">
              Add +
            </Link>
          </div>
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.phone}</td>
                <td>
                  <Link
                    to={`/read/${d.id}`}
                    className="btn btn-sm btn-info me-2 text-white"
                  >
                    Read
                  </Link>
                  <Link
                    to={`/update/${d.id}`}
                    className="btn btn-sm btn-success me-2 text-white"
                  >
                    Edit
                  </Link>
                  <Button
                    onClick={() => handleDelete(d.id)}
                    variant="danger"
                    className="btn-sm"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

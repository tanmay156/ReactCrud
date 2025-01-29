import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Read() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:3000/users/" + id)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch users");
      });
  }, []);

  return (
    <div className="d-flex w-100 flex-column justify-content-center align-items-center bg-light vh-100">
      <h1 className="mb-4">List of Users</h1>
      <div className="w-50 rounded bg-white border shadow p-4">
        <div className="mb-2">
          <strong>ID : {data.id}</strong>
        </div>

        <div className="mb-2">
          <strong>Name : {data.name}</strong>
        </div>

        <div className="mb-3">
          <strong>Email : {data.email}</strong>
        </div>

        <div className="mb-3">
          <strong>Phone : {data.phone}</strong>
        </div>
        <Link to={`/update/${id}`} className="btn btn-success">
          Edit
        </Link>
        <Link to="/" className="btn btn-primary ms-3">
          Back
        </Link>
      </div>
    </div>
  );
}

import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [values, setValue] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/users", values)
      .then((res) => {
        console.log(res);
        setValue(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch users");
      });
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1 className="text-center mb-4">Add a User</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="id" className="form-label">
              ID
            </label>
            <input
              type="text"
              id="id"
              name="id"
              className="form-control"
              placeholder="Enter ID"
              required
              onChange={(e) => setValue({ ...values, id: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Enter Name"
              required
              onChange={(e) => setValue({ ...values, name: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter Email"
              required
              onChange={(e) => setValue({ ...values, email: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="form-control"
              placeholder="Enter Phone Number"
              required
              onChange={(e) => setValue({ ...values, phone: e.target.value })}
            />
          </div>

          <Button type="submit" variant="success">
            Submit
          </Button>

          <Button variant="primary" className="mx-3">
            Back
          </Button>
        </form>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Create = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitData = () => {
    axios.post("https://jsonplaceholder.typicode.com/users", {
      name,
      userName,
      email,
      address,
      phone,
      website,
    }).then(()=>{
navigate("/home")
    })
  };
  return (
    <div className="container p-5">
      <div>
        <form onSubmit={handleSubmit(submitData)}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Your Full Name"
              {...register("fullname", {
                required: "full name is required",
                minLength: {
                  value: 4,
                  message: "minimum 4 characters",
                },
              })}
            />
            {errors.name && (
              <p className="text-danger">{errors.name.message}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="userName">User Name</label>
            <input
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              type="text"
              className="form-control"
              id="userName"
              placeholder="Enter Your user name"
              {...register("userName", {
                required: "userName is required",
                minLength: {
                  value: 4,
                  message: "minimum 4 characters",
                },
              })}
            />
            {errors.userName && (
              <p className="text-danger">{errors.userName.message}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail </label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter Your E-mail"
              {...register("email", {
                required: "email is required",
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "enter a valid email",
                },
              })}
            />
            {errors.email && (
              <p className="text-danger">{errors.email.message}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              type="text"
              className="form-control"
              id="address"
              placeholder="Enter Your address"
              {...register("address", {
                required: "address is required",
                minLength: {
                  value: 4,
                  message: "minimum 4 characters",
                },
              })}
            />
            {errors.address && (
              <p className="text-danger">{errors.address.message}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              type="text"
              className="form-control"
              id="phone"
              placeholder="Enter Your Phone Number"
              {...register("phone", {
                required: "phone is required",
                pattern: {
                  value: /^\d{10}/,
                  message: "enter valid phone number",
                },
              })}
            />
            {errors.phone && (
              <p className="text-danger">{errors.phone.message}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="website">Website </label>
            <input
              onChange={(e) => {
                setWebsite(e.target.value);
              }}
              type="text"
              className="form-control"
              id="website"
              placeholder="Enter Your website"
              {...register("website", {
                required: "website is required",
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "enter a valid website",
                },
              })}
            />
            {errors.website && (
              <p className="text-danger">{errors.website.message}</p>
            )}
          </div>

          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;

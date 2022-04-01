import { useForm } from "react-hook-form";
import React, { useState } from "react";
import './register.css'
import swal from "sweetalert";

function Register() {
  const [val, setVal] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitdata = (data) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    users.push({ name: data.fullname, password: data.password });
    localStorage.setItem("users", JSON.stringify(users));
    swal("registered successfully")
    .then(() => {
      setVal(() => "")
    });
    ;
  };

  return (
    <div className="register">
      <div className="container py-4">
        <h1 className="text-center text-info">Registration Form</h1>
        <form onSubmit={handleSubmit(submitdata)}>
          <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="fullname"
              value={val}
              placeholder="Enter Your Full Name"
              {...register("fullname", {
                required: "full name is required",
                minLength: {
                  value: 4,
                  message: "minimum 4 characters",
                },
              })}
            />
            {errors.fullname && (
              <p className="text-danger">{errors.fullname.message}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              className="form-control"
              id="age"
              value={val}
              placeholder="Enter Your age"
              {...register("age", {
                required: "age is required",
                min: {
                  value: 18,
                  message: "minimum age is 18",
                },
                max: {
                  value: 60,
                  message: "maximum age is 60",
                },
              })}
            />
            {errors.age && <p className="text-danger">{errors.age.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail Address</label>
            <input
              type="text"
              className="form-control"
              id="email"
              value={val}
              placeholder="Enter Your E-mail Address"
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
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              value={val}
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
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              
              value={val}
              placeholder="Enter Your Password"
              {...register("password", {
                required: "password required",
                minLength: { value: 8, message: "minimum 8 characters" },
                pattern: {
                  value:
                    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                  message:
                    "Password (UpperCase, LowerCase, Number/SpecialChar and min 8 Chars)",
                },
              })}
            />
            {errors.password && (
              <p className="text-danger">{errors.password.message}</p>
            )}
          </div>

          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;

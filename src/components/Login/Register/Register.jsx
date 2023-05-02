import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../../contexts/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setError("Password must contain at least one uppercase");
      return;
    } else if (!/(?=.*[!@#$&*])/.test(password)) {
      setError("Password must contain at least one special character");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        setSuccess("User has been created successfully");
        toast.success("User has been created successfully");
        setError("");
        form.reset();
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
        setSuccess("");
        toast.error(err.message);
      });

    console.log(name, email, photo, password);
  };

  return (
    <div
      className=" min-h-screen bg-[#000000] bg-opacity-[0.7] bg-blend-multiply bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: `url(https://i.ibb.co/DKS8v23/pexels-photo-1765005.webp)`,
      }}
    >
      <div className="w-[95%] px-5 py-7 max-w-md bg-blue-400 bg-opacity-[0.5] rounded-2xl card-shadow">
        <h2 className="text-center text-white text-2xl sm:text-3xl font-semibold mb-5 sm:mb-7">
          Sign Up
        </h2>
        <div className="h-10">
          <p className="text-success text-center">{success}</p>
          <p className="text-red-600 text-center">{error}</p>
        </div>
        <form onSubmit={handleRegister}>
          <div className="form-control w-full mb-3">
            <label className="label">
              <span className="label-text text-white">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control w-full mb-3">
            <label className="label">
              <span className="label-text text-white">Email Address</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control w-full mb-3">
            <label className="label">
              <span className="label-text text-white">Photo Url</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Your photo URL"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control w-full mb-7 relative">
            <label className="label">
              <span className="label-text text-white">Password</span>
            </label>
            <input
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Your Password"
              className="input input-bordered w-full"
              required
            />
            <p
              className="absolute top-[54px] right-[15px]"
              onClick={() => setShowPass(!showPass)}
            >
              <small>{showPass ? <FaEye /> : <FaEyeSlash />}</small>
            </p>
          </div>
          <button className="form-btn" type="submit">
            Register
          </button>
          <p className="mt-5 text-center text-white">
            Already have an account?{" "}
            <Link className="text-blue-800 font-semibold" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

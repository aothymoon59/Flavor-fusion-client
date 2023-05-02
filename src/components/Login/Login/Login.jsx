import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <div
      className=" min-h-screen bg-[#000000] bg-opacity-[0.7] bg-blend-multiply bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: `url(https://i.ibb.co/DKS8v23/pexels-photo-1765005.webp)`,
      }}
    >
      <div className="w-[95%] p-5 max-w-md bg-red-600 bg-opacity-[0.5] rounded-2xl card-shadow">
        <h2 className="text-center text-white text-2xl sm:text-3xl font-semibold mb-5 sm:mb-10">
          Sign In
        </h2>
        <form>
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
          <div className="form-control w-full mb-3 relative">
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
            <p className="p-1 text-sm">
              <Link className="underline text-blue-400">
                Forgotten Password?
              </Link>
            </p>
          </div>
          <button className="form-btn" type="submit">
            Login
          </button>
          <p className="mt-5 text-center text-white">
            New User?{" "}
            <Link className="text-blue-400" to="/register">
              Register
            </Link>
          </p>
        </form>
        <div className="flex gap-4 items-center my-6">
          <div className="border border-slate-400 w-full h-0"></div>
          <span className="text-slate-400">Or</span>
          <div className="border border-slate-400  w-full h-0"></div>
        </div>
        <div className="mt-4">
          <h2 className="text-center text-xl font-semibold my-4 text-white">
            Login With
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            <button className="social-btn btn-success">
              <FaGoogle className="mr-2" title="Google" /> Google
            </button>
            <button className="social-btn btn-info">
              <FaGithub className="mr-2" title="Twitter" /> Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

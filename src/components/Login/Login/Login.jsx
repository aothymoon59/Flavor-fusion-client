import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../contexts/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // sign in with email and password
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        form.reset();
        setSuccess("Successfully login");
        toast.success("Successfully login");
        setError("");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        let errorMessage = err.message;
        if (errorMessage == "Firebase: Error (auth/wrong-password).") {
          errorMessage = "Wrong password! Please try again";
        } else if (errorMessage == "Firebase: Error (auth/user-not-found).") {
          errorMessage = "User not found!";
        }
        console.log(errorMessage);
        setError(errorMessage);
        setSuccess("");
        toast.error(errorMessage);
      });
  };

  // sign in with google pop up
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        setSuccess("Successfully login With Google");
        toast.success("Successfully login With Google");
        setError("");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
        console.log(errorMessage);
        toast.error(err.message);
        setSuccess("");
      });
  };
  // sign in with github pop up
  const handleGithubSignIn = () => {
    signInWithGithub()
      .then((result) => {
        const loggedUser = result.user;
        setSuccess("Successfully login With Github");
        toast.success("Successfully login With Github");
        setError("");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
        console.log(errorMessage);
        toast.error(err.message);
        setSuccess("");
      });
  };

  return (
    <div
      className=" min-h-screen bg-[#000000] bg-opacity-[0.7] bg-blend-multiply bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: `url(https://i.ibb.co/DKS8v23/pexels-photo-1765005.webp)`,
      }}
    >
      <div className="w-full p-5 max-w-md bg-blue-400 bg-opacity-[0.5] sm:rounded-2xl card-shadow">
        <h2 className="text-center text-white text-2xl sm:text-3xl font-semibold mb-5 sm:mb-7">
          Sign In
        </h2>
        <div className="h-10">
          <p className="text-success text-center">{success}</p>
          <p className="text-error text-center">{error}</p>
        </div>
        <form onSubmit={handleSignIn}>
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
              <Link className="underline text-error font-medium">
                Forgotten Password?
              </Link>
            </p>
          </div>
          <button className="form-btn" type="submit">
            Login
          </button>
          <p className="mt-5 text-center text-white">
            New User?{" "}
            <Link className="text-blue-800 font-semibold" to="/register">
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
            <button
              onClick={handleGoogleSignIn}
              className="social-btn btn-success"
            >
              <FaGoogle className="mr-2" title="Google" /> Google
            </button>
            <button
              onClick={handleGithubSignIn}
              className="social-btn btn-info"
            >
              <FaGithub className="mr-2" title="Twitter" /> Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

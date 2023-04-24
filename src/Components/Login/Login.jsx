import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../Providers/AuthProviders";

const Login = () => {

  const { signIn } = useContext(authContext)
  console.log(signIn)

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
    .then(result => {
      const loggedUser = result.user
      console.log(loggedUser)
    })
    .catch(error => {
      console.log(error)
    })

  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Please Login now!</h1>
        </div>
        <form
          onSubmit={handleLogin}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="enter your email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link className="label-text-alt link">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
          <label className="label">
            <Link className="label-text-alt link link-hover">
              New to Auth master, please register.
            </Link>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Login;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../Providers/AuthProviders';

const Register = () => {
  const {user, createUser} = useContext(authContext)
    console.log(createUser)
    const handleRegister = event => {
        event.preventDefault();

        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, email, password)
        form.reset()

        createUser(email, password)
        .then (result => {
          const loggedUser = result.user;
          console.log(loggedUser)
        })
        .catch(error => {
          console.log(error.message)
        })

    }
    
    return (
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Please Register now!</h1>
        </div>
        <form onSubmit={handleRegister} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
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
                <div className="label-text-alt">
                  If you already register here, Please
                  <Link to='/login' className='link  ms-2 mr-2'>Login</Link>
                  here
                </div>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    );
};

export default Register;
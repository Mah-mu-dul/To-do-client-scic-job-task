import React, { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const Register = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  // const [token] = useToken(user || gUser);
  const handleGogle = () => {
    signInWithGoogle();
        navigate(from, { replace: true });


  };
  const handlesubmit = async (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    navigate(from, { replace: true });
    event.target.reset();
  };
  return (
    <div className="text-white">
      <div className="card w-[80%] lg:w-1/2 mx-auto mt-20 shadow-xl">
        <div className="card-body">
          <h2 className=" mx-auto text-3xl font-bold text-black">
            Register a new account
          </h2>
          <form className="" onSubmit={handlesubmit}>
            <label className="label  ">
              <span className="label-text">Name</span>
            </label>
            <input
              ref={nameRef}
              required
              name="name"
              placeholder="FirstName LastName"
              type="text"
              className="mx-auto input input-bordered input-primary w-full "
            />
            <label className="label  ">
              <span className="label-text">Email</span>
            </label>
            <input
              ref={emailRef}
              required
              name="email"
              placeholder="abc@def.com"
              type="email"
              className="mx-auto input input-bordered input-primary w-full "
            />

            <label className="label  ">
              <span className="label-text">Password</span>
            </label>
            <input
              minLength="4"
              placeholder="super secret "
              required
              ref={passwordRef}
              name="password"
              type="password"
              className=" mx-auto input input-bordered input-primary w-full "
            />

            <div className="card-actions flex-col  justify-center">
              {loading || gLoading || updating ? (
                <button className="btn btn-accent mx-auto mt-3 text-white w-full loading">
                  loading
                </button>
              ) : (
                <button className="btn btn-accent mx-auto mt-3 text-white w-full">
                  Signup
                </button>
              )}
              <label className="label  mx-auto">
                <span className="label-text text-xl">
                  Already have an account?{" "}
                  <Link to="/login" className="text-secondary">
                    Login
                  </Link>
                </span>
              </label>

              <div className="divider">OR</div>
            </div>
          </form>
          <button
            onClick={handleGogle}
            className="btn mx-auto btn-accent text-white w-full"
          >
            <h2 className="text-lg">Continue with goolge</h2>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;

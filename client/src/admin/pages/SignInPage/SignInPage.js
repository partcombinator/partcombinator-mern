import React from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  LOGIN_GOOGLE,
  LOGIN_FACEBOOK,
  RECOVER_PASS_USER,
  REGISTER_USER,
} from "../../../utils/constants";
import { Link } from "react-router-dom";
// Actions Redux
import { loginUser } from "../../../_actions/userActions";
import { useHistory } from "react-router-dom";


export default function SignInPage() {
  const dispatch = useDispatch();
  const _loginUser = (data) => dispatch(loginUser(data));
  const _error = useSelector((state) => state.users.error);
  const loading = useSelector((state) => state.users.loading);
  const token = useSelector((state) => state.users.token);
  const history = useHistory();
  
  token && history.push('/admin')


  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData, { resetForm }) => {
      try {
        _loginUser(formData);
        history.push('/admin')
      } catch (error) {
        toast.error(error);
      }
    },
  });

  return (
    <div className="container wallpaper-white">
     { _error && (
      <div
        className="alert alert-danger alert-dismissible fade show mt-2"
        role="alert"
      >
        <strong>Error:</strong> {_error}
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
     )}
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block">
                <img src="/react-logo.png" style={{ "width": "100%", "height": "100", "padding" : "20px" }} alt="logo"></img>
                </div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Login</h1>
                    </div>
                    <form className="user" onSubmit={formik.handleSubmit}>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control form-control-user"
                          id="exampleInputEmail"
                          name="email"
                          onChange={formik.handleChange}
                          value={formik.values.email}
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address..."
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control form-control-user"
                          id="exampleInputPassword"
                          name="password"
                          onChange={formik.handleChange}
                          value={formik.values.password}
                          placeholder="Password"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <div className="custom-control custom-checkbox small">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck"
                          />
                          {/* <label className="custom-control-label">Remember
                                                        Me</label> */}
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-user btn-block"
                      >
                        {!loading ? "Login" : "Loading"}
                      </button>

                      {LOGIN_GOOGLE && (
                        <>
                          <hr />
                          <a
                            href="index.html"
                            className="btn btn-google btn-user btn-block"
                          >
                            <i className="fab fa-google fa-fw"></i> Login with
                            Google
                          </a>
                        </>
                      )}
                      {LOGIN_FACEBOOK && (
                        <a
                          href="index.html"
                          className="btn btn-facebook btn-user btn-block"
                        >
                          <i className="fab fa-facebook-f fa-fw"></i> Login with
                          Facebook
                        </a>
                      )}
                    </form>
                    {RECOVER_PASS_USER && (
                      <div className="text-center">
                        <a className="small" href="forgot-password.html">
                          Forgot Password?
                        </a>
                      </div>
                    )}
                    <hr />
                    {REGISTER_USER && (
                      <div className="text-center">
                        <Link className="small" to="/signup">
                          Create an Account!
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function initialValues() {
  return {
    email: "",
    password: "",
  };
}

function validationSchema() {
  return {
    email: Yup.string().email(true).required(true),
    password: Yup.string().required(true),
  };
}

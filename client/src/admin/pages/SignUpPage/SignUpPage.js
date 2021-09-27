import React from 'react';
import { LOGIN_GOOGLE, LOGIN_FACEBOOK } from '../../../utils/constants';
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
    Link,
} from "react-router-dom";
import { registerUser } from "../../../_actions/userActions";

export default function SignUpPage() {
    // Todo : Check security
    const token = useSelector((state) => state.users.token);
    const dispatch = useDispatch();
    const _registerUser = (data) => dispatch(registerUser(data));
    const _error = useSelector((state) => state.users.error);
    const loading = useSelector((state) => state.users.loading);

    const history = useHistory();
    token && history.push('/admin')

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData, { resetForm }) => {
          try {
            _registerUser(formData);
            toast.success('ok');
            // history.push('/admin')
          } catch (error) {
            toast.error(error);
          }
        },
      });

    return (
        <div className="container">

            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">

                    <div className="row">
                        <div className="col-lg-5 d-none d-lg-block">
                            <img src="/react-logo.png" style={{ "width": "100%", "height": "100", "padding" : "20px" }} alt="logo"></img>
                        </div>
                        <div className="col-lg-7">
                            <div className="p-5">
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                                </div>
                                <form className="user" onSubmit={formik.handleSubmit}>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <input type="text" className="form-control form-control-user"
                                                id="exampleFirstName"
                                                placeholder="First Name"
                                                onChange={formik.handleChange}
                                                value={formik.values.name}
                                                name="name"
                                                required
                                                />
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control form-control-user" id="exampleLastName"
                                                placeholder="Last Name" 
                                                onChange={formik.handleChange}
                                                value={formik.values.lastname}
                                                name="lastname"
                                                required
                                                />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control form-control-user" id="exampleInputEmail"
                                            placeholder="Email Address" 
                                            onChange={formik.handleChange}
                                            value={formik.values.email}
                                            name="email"
                                            />
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <input type="password" className="form-control form-control-user"
                                                id="exampleInputPassword" placeholder="Password" 
                                                onChange={formik.handleChange}
                                                value={formik.values.password}
                                                name="password"
                                                />
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="password" className="form-control form-control-user"
                                                id="exampleRepeatPassword" placeholder="Repeat Password" 
                                                onChange={formik.handleChange}
                                                value={formik.values.repeatpassword}
                                                name="repeatpassword"
                                                />
                                        </div>
                                    </div>
                                    <button href="login.html" 
                                        className="btn btn-primary btn-user btn-block"
                                        type="submit"
                                        >
                                        Register Account
                                    </button>
                                    {LOGIN_GOOGLE && (
                                        <>
                                            <hr />
                                            <a href="index.html" className="btn btn-google btn-user btn-block">
                                                <i className="fab fa-google fa-fw"></i> Register with Google
                                            </a>
                                        </>
                                    )}

                                    {LOGIN_FACEBOOK && (
                                        <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                            <i className="fab fa-facebook-f fa-fw"></i> Register with Facebook
                                        </a>
                                    )}

                                </form>
                                <hr />
                                <div className="text-center">
                                    <Link className="small" to="/forgot-password">Forgot Password?</Link>
                                </div>
                                <div className="text-center">
                                    <Link className="small" to="/signin">Already have an account? Login!</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
    )
}

function initialValues() {
    return {
        name: "",
        lastname: "",
        email: "",
        password: "",
        repeatpassword: "",
    };
  }

  function validationSchema() {
    return {
      email: Yup.string().email(true).required(true),
      password: Yup.string().required(true),
      repeatpassword: Yup.string().required(true),
      name: Yup.string().required(true),
      lastname: Yup.string().required(true),
    };
  }  

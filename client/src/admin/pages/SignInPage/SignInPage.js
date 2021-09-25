import React from 'react'
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN_GOOGLE, LOGIN_FACEBOOK, RECOVER_PASS_USER, REGISTER_USER } from '../../../utils/constants';
import {
    Link,
} from "react-router-dom";
// Actions Redux
import { loginUser } from "../../../_actions/userActions";

export default function SignInPage() {
    const dispatch = useDispatch();
    const _loginUser = (post) => dispatch(loginUser(post));
    
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData, { resetForm }) => {
            _loginUser(formData);
        //   setLoading(true);
        //   const response = await loginApi(formData);
        //   const { email } = formData
        //   if (response?.jwt) {
        //     setLoading(false);
        //     login(response.jwt)
        //     toast.success(`Hola!!`);
        //     // resetForm({ values: '' })  // Limpiamos el formulario
        //     router.push("/") // Lo redirigimos al login
        //   } else {
        //     toast.error("Error de usuario, inténtelo mas tarde");
        //   }
        //   setLoading(false);
        toast.success(`Hola!!`);
        },
      });

    return (
        <div className="container wallpaper-white">
            <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12 col-md-9">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            <div className="row">
                                <div className="col-lg-6 d-none d-lg-block">
                                    <img src="/admin/img/your-logo.png" style={{ "width": "100%", "height": "100" }} alt="logo"></img>
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
                                                    placeholder="Enter Email Address..." />
                                            </div>
                                            <div className="form-group">
                                                <input 
                                                    type="password" 
                                                    className="form-control form-control-user"
                                                    id="exampleInputPassword"
                                                    name="password"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.password}
                                                    placeholder="Password" />
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox small">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                    {/* <label className="custom-control-label">Remember
                                                        Me</label> */}
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-primary btn-user btn-block">
                                                Login
                                            </button>

                                            {LOGIN_GOOGLE && (
                                                <>
                                                    <hr />
                                                    <a href="index.html" className="btn btn-google btn-user btn-block">
                                                        <i className="fab fa-google fa-fw"></i> Login with Google
                                                    </a>
                                                </>
                                            )}
                                            {LOGIN_FACEBOOK && (
                                                <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                                    <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                                </a>
                                            )}
                                        </form>
                                        {RECOVER_PASS_USER && (

                                            <div className="text-center">
                                                <a className="small" href="forgot-password.html">Forgot Password?</a>
                                            </div>
                                        )}
                                        <hr />
                                        {REGISTER_USER && (
                                            <div className="text-center">
                                                <Link className="small" to="/signup">Create an Account!</Link>
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
    )
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

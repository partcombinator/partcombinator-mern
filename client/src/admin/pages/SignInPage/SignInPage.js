import React from 'react'
import { LOGIN_GOOGLE, LOGIN_FACEBOOK, RECOVER_PASS_USER, REGISTER_USER } from '../../../utils/constants';
import {
    Link,
} from "react-router-dom";

export default function SignInPage() {
    return (
        <div className="container wallpaper-white">
            <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12 col-md-9">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            <div className="row">
                                <div className="col-lg-6 d-none d-lg-block">
                                    <img src="/img/your-logo.png" style={{ "width": "100%", "height": "100" }}></img>
                                </div>
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Login</h1>
                                        </div>
                                        <form className="user">
                                            <div className="form-group">
                                                <input type="email" className="form-control form-control-user"
                                                    id="exampleInputEmail" aria-describedby="emailHelp"
                                                    placeholder="Enter Email Address..." />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control form-control-user"
                                                    id="exampleInputPassword" placeholder="Password" />
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox small">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                    <label className="custom-control-label">Remember
                                                        Me</label>
                                                </div>
                                            </div>
                                            <a href="index.html" className="btn btn-primary btn-user btn-block">
                                                Login
                                            </a>

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

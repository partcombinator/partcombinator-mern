import React from "react";
import AdminLayout from "../../../layouts/AdminLayout";
import { Link } from "react-router-dom";

export default function ProfilePage() {
  return (
    <AdminLayout>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Profile</h1>
      </div>

      

      <div className="row">
        <div className="col-lg-6">
          <div className=" card shadow">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-secoundary">
                Change Your Password
              </h6>
            </div>
            <div className="card-body">
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Repeat your Password"
                />
              </div>

              <button className="btn btn-secondary btn-block">
                <i className="fab fa-save fa-fw"></i>Change
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className=" card shadow">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-secoundary">
                Change Your Data
              </h6>
            </div>
            <div className="card-body">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Name" />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                />
              </div>

              <div className="form-group">
                <input type="text" className="form-control" placeholder="Email" />
              </div>

              <Link to="/" className="btn btn-secondary btn-block">
                <i className="fab fa-save fa-fw"></i>Change
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

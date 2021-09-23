import React from "react";
import AdminLayout from "../../../layouts/AdminLayout";

export default function AdminPage() {
  return (
    <AdminLayout>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Profile</h1>
      </div>

      <div className="row">
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    Numbers of Post
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    0
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-calendar fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Numbers of Categories
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    0
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-6 col-md-6 mb-4">
        <p className="mb-4">Hello User, I am  
        <a target="_blank" href="https://www.partcominator.com"> PartCombinator</a>. By Marlon Falcón Hernández.</p>
        </div>  




      </div>

      <div className="row">
        <div className="col-lg-6">
          <div className=" card shadow">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-success">
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

              <a href="#" className="btn btn-success btn-block">
                <i className="fab fa-save fa-fw"></i>Change
              </a>
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

              <a href="#" className="btn btn-secondary btn-block">
                <i className="fab fa-save fa-fw"></i>Change
              </a>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

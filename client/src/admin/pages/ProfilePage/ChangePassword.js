import React from 'react'

export default function ChangePassword() {
    return (
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
    )
}

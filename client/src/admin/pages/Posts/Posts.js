import React, { useEffect } from "react";
import AdminLayout from "../../../layouts/AdminLayout";
import { Link } from "react-router-dom";

// Redux Component
import { useSelector, useDispatch } from "react-redux";
import {  givePostAction  } from "../../../_actions/postsActions"


export default function Posts() {
  const dispatch = useDispatch();

  useEffect(() => {
      const loadPost = () => dispatch( givePostAction() )
      loadPost();
  }, [])

  return (
    <AdminLayout>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Posts List</h1>
      </div>

      <div className="card shadow mb-4">
        <div className="card-header py-3">
            <Link to="/admin/post" className="btn btn-primary btn-icon-split"> <span className="icon text-white-50"><i className="fas fa-edit"></i> CREATE </span></Link>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Text</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Tiger Nixon</td>
                  <td>System Architect</td>
                  <td> 
                    <a href="#" className="btn btn-danger btn-icon-split"> <span className="icon text-white-50"><i className="fas fa-trash"></i></span></a>
                  </td>
                  <td>
                    <a href="#" className="btn btn-warning btn-icon-split"> <span className="icon text-white-50"><i className="fas fa-pen"></i></span></a>
                  </td>
                </tr>
               
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

import React from "react";
import AdminLayout from "../../../layouts/AdminLayout";
import { Link } from "react-router-dom";

export default function Categories() {
    return (
        <AdminLayout>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Categories</h1>
      </div>

      <div className="card shadow mb-4">
                        <div className="card-header py-3">
                        <Link to="/" className="btn btn-primary btn-icon-split"> <span className="icon text-white-50"><i className="fas fa-edit"></i> CREATE </span></Link>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th width="10px">Edit</th>
                                            <th width="10px">Delete</th>
                                        </tr>
                                    </thead>
                                   
                                    <tbody>
                                        <tr>
                                            <td>Tiger Nixon</td>
                                            <td> 
                    <Link to="/" className="btn btn-danger btn-icon-split"> <span className="icon text-white-50"><i className="fas fa-trash"></i></span></Link>
                  </td>
                  <td>
                    <Link to="/" className="btn btn-warning btn-icon-split"> <span className="icon text-white-50"><i className="fas fa-pen"></i></span></Link>
                  </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

      
    </AdminLayout>
    )
}

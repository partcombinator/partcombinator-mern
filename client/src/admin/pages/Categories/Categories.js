import React from "react";
import AdminLayout from "../../../layouts/AdminLayout";

export default function Categories() {
    return (
        <AdminLayout>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Categories</h1>
      </div>

      <div className="card shadow mb-4">
                        <div className="card-header py-3">
                        <a href="#" class="btn btn-primary btn-icon-split"> <span class="icon text-white-50"><i class="fas fa-edit"></i> CREATE </span></a>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                   
                                    <tbody>
                                        <tr>
                                            <td>Tiger Nixon</td>
                                            <td> 
                    <a href="#" class="btn btn-danger btn-icon-split"> <span class="icon text-white-50"><i class="fas fa-trash"></i></span></a>
                  </td>
                  <td>
                    <a href="#" class="btn btn-warning btn-icon-split"> <span class="icon text-white-50"><i class="fas fa-pen"></i></span></a>
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

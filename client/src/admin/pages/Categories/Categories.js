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
                            <h6 className="m-0 font-weight-bold text-secundary">List Categories</h6>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                        </tr>
                                    </thead>
                                   
                                    <tbody>
                                        <tr>
                                            <td>Tiger Nixon</td>
                                        </tr>
                                        <tr>
                                            <td>Garrett Winters</td>
                                        </tr>
                                       
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

      
    </AdminLayout>
    )
}

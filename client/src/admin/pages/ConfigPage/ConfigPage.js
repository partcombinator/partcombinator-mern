import React from "react";
import AdminLayout from "../../../layouts/AdminLayout";
import { Link } from "react-router-dom";

export default function ConfigPage() {
  return (
    <AdminLayout>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Config</h1>
      </div>  

        <div className="col-xl-6 col-md-6 mb-4">
        <p className="mb-4">Hello User, I am  
        <Link target="_blank" to="https://www.partcominator.com"> PartCombinator</Link>. By Marlon Falcón Hernández.</p>
        </div> 
    
    </AdminLayout>
  );
}

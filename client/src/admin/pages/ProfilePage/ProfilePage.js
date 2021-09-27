import React from "react";
import AdminLayout from "../../../layouts/AdminLayout";
import { useSelector } from "react-redux";
import ChangePassword from './ChangePassword';
import ChangeYourData from './ChangeYourData';
import ChangeEmail from './ChangeEmail';

export default function ProfilePage() {
  const user = useSelector((state) => state.users.user);

  return (
    <AdminLayout>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Profile</h1>
      </div>


      <div className="row">
        <div className="col-lg-6">
          <ChangeYourData user={user}/>
        </div>

        <div className="col-lg-6">
           <ChangePassword/>
      </div>
      </div>
    <br/>
      <div className="row">
        <div className="col-lg-6">
          <ChangeEmail/>
        </div>

        <div className="col-lg-6">
          
        </div>
      </div>

      
    </AdminLayout>
  );
}

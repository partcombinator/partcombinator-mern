import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <ul
      className="navbar-nav bg-gradient-dark sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* <!-- Sidebar - Brand --> */}
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="/admin"
      >
        <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-database"></i>
                </div>
        <div className="sidebar-brand-text mx-3">PartComb</div>
      </Link>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider my-0" />

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider" />

      {/* <!-- Nav Item - Pages Collapse Menu --> */}
      <li className="nav-item active">
        <a
          className="nav-link"
          href="/"
          data-toggle="collapse"
          data-target="#collapsePages"
          aria-expanded="true"
          aria-controls="collapsePages"
        >
          <i className="fas fa-fw fa-user"></i>
          <span>User</span>
        </a>
        <div
          id="collapsePages"
          className="collapse show"
          aria-labelledby="headingPages"
          data-parent="#accordionSidebar"
        >
          <div
            className="bg-white py-2 collapse-inner rounded"
            
          >
            <Link className="collapse-item" to="/admin">
              Profile
            </Link>
          </div>

          

        </div>
      </li>

      <li className="nav-item active">
        <a
          className="nav-link"
          href="/"
          data-toggle="collapse"
          data-target="#collapsePages"
          aria-expanded="true"
          aria-controls="collapsePages"
        >
          <i className="fas fa-fw fa-atom"></i>
          <span>Admin</span>
        </a>

        <div
          id="collapsePages"
          className="collapse show"
          aria-labelledby="headingPages"
          data-parent="#accordionSidebar"
        >
          

          <div
            className="bg-white py-2 collapse-inner rounded"
            
          >
            <Link className="collapse-item" to="/admin/posts">
              Posts
            </Link>
            <Link className="collapse-item" to="/admin/categories">
              Categories
            </Link>
          </div>
          <div
            className="bg-white py-2 collapse-inner rounded"
            
          >
            <Link className="collapse-item" to="/config">
              Config
            </Link>
          </div>

        </div>
    </li>  

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider d-none d-md-block" />

      {/* <!-- Sidebar Toggler (Sidebar) --> */}
      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
      </div>
    </ul>
  );
}

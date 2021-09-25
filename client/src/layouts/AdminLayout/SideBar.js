import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../i18n/i18n";

export default function SideBar() {
  const { t } = useTranslation();
  return (
    <ul
      className="navbar-nav bg-gradient-dark sidebar sidebar-dark accordion"
      id="accordionSidebar">
      {/* <!-- Sidebar - Brand --> */}
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="/admin">
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-database"></i>
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
          data-target="#collapseUser"
          aria-expanded="true"
          aria-controls="collapsePages">
          <i className="fas fa-fw fa-users"></i>
          <span>{t("User")}</span>
        </a>
        <div
          id="collapseUser"
          className="collapse show"
          aria-labelledby="headingPages"
          data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <Link className="collapse-item" to="/admin">
              <i className="fas fa-fw fa-user"></i> {t("Dashboard")}
            </Link>

            <Link className="collapse-item" to="/admin/profile">
              <i className="fas fa-fw fa-user"></i> {t("Profile")}
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
          aria-controls="collapsePages">
          <i className="fas fa-fw fa-circle"></i>
          <span>{t("public")}</span>
        </a>

        <div
          id="collapsePages"
          className="collapse show"
          aria-labelledby="headingPages"
          data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <Link className="collapse-item" to="/admin/posts">
              <i className="fas fa-fw fa-file"></i> {t("Posts")}
            </Link>
            <Link className="collapse-item" to="/admin/posts">
              <i className="fas fa-fw fa-archive"></i> {t("Products")}
            </Link>
            <Link className="collapse-item" to="/admin/categories">
              <i className="fas fa-fw fa-file-alt"></i> {t("Categories")}
            </Link>
            
            <Link className="collapse-item" to="/admin/categories">
              <i className="fas fa-fw fa-at"></i> {t("Emails_Contact")}
            </Link>

            <Link className="collapse-item" to="/admin/calendar">
              <i className="fas fa-fw fa-calendar"></i> {t("Calendar")}
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
          aria-controls="collapsePages">
          <i className="fas fa-fw fa-atom"></i>
          <span>{t("Admin")}</span>
        </a>

        <div
          id="collapsePages"
          className="collapse show"
          aria-labelledby="headingPages"
          data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <Link className="collapse-item" to="/admin/categories">
              <i className="fas fa-fw fa-at"></i> Emails Contact
            </Link>
            <Link className="collapse-item" to="/admin/categories">
              <i className="fas fa-fw fa-people-arrows"></i> Users
            </Link>
            <Link className="collapse-item" to="/admin/categories">
              <i className="fas fa-fw fa-people-arrows"></i> Profiles
            </Link>
          </div>
          
        </div>
      </li>

      <li className="nav-item active">
        <a
          className="nav-link"
          href="/"
          data-toggle="collapse"
          data-target="#headingConfig"
          aria-expanded="true"
          aria-controls="collapsePages">
          <i className="fas fa-fw fa-atom"></i>
          <span>{t("Config")}</span>
        </a>

        <div
          id="headingConfig"
          className="collapse show"
          aria-labelledby="headingConfig"
          data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">

            <Link className="collapse-item" to="/admin/config">
              <i className="fas fa-fw fa-fan"></i> General
            </Link>
            <Link className="collapse-item" to="/admin/config">
              <i className="fas fa-fw fa-fan"></i> Email Servers
            </Link>
            <Link className="collapse-item" to="/admin/config">
              <i className="fas fa-fw fa-phone"></i> WhatsApp API
            </Link>
            <Link className="collapse-item" to="/admin/config">
              <i className="fas fa-fw fa-check-square"></i> Cron / Jobs
            </Link>
            <Link className="collapse-item" to="/admin/config">
              <i className="fas fa-fw fa-backspace"></i> Params
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

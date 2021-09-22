import React from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

export default function AdminLayout(props) {
  const { children } = props;
  return (
    <div id="wrapper">
      <SideBar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopBar />
          <div className="container-fluid">{children}</div>
        </div>
      </div>
    </div>
  );
}

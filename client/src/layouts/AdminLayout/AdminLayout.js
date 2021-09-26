import React from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";


export default function AdminLayout(props) {
  const history = useHistory();
  const token = useSelector((state) => state.users.token);
  const { children } = props;

  token || history.push('/signin')

  return (
    <div id="wrapper">
      <SideBar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopBar />
          <div className="container-fluid">{children}</div>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

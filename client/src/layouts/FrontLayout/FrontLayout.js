import React from "react";
import Footer from "./Footer";
import "./styles.scss";
import NavBar from "./Navbar";
import { Link } from "react-router-dom";

export default function FrontLayout(props) {
  const { children } = props;
  return (
    <div>
      <NavBar />
      {children}

      <Footer />
    </div>
  );
}

import React from "react";
import Footer from "./Footer";
// import "./styles.scss";
import NavBar from "./Navbar";

export default function FrontLayout(props) {
  const { children, title, text } = props;
  return (
    <div>
      <NavBar title={title} text={text}/>
      {children}

      <Footer />
    </div>
  );
}

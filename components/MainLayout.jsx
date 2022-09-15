import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MainLayout(props) {
  return (
    <div>
      <Navbar />
      <hr style={{ maxWidth: "1000px" }} className="mx-auto" />
      {props.children}
      <hr style={{ maxWidth: "1000px" }} className="mx-auto" />
      <Footer />
    </div>
  );
}

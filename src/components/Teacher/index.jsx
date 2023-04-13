// import React from "react";

// export default function Index(props) {
//     return <h1>This page for teacher</h1>
// }
import React from "react";
import {Outlet } from "react-router-dom";
import LayoutComponent from "./Layout/Layout";
import "./index.css"

function Index(props) {
  return (
      <div className="TeacherIndex">
        <LayoutComponent {...props}>
        <Outlet />
        </LayoutComponent>
      </div>
  );
}

export default Index;

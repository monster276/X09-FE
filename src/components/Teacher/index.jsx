// import React from "react";

// export default function Index(props) {
//     return <h1>This page for teacher</h1>
// }
import React from "react";
import LayoutComponent from "./Layout/Layout";
import "./index.css";
import RouterPage from "./Router/RouterPage";

function Index(props) {
  return (
    <div className="TeacherIndex">
      <LayoutComponent {...props}>
       <RouterPage/>
      </LayoutComponent>
    </div>
  );
}

export default Index;

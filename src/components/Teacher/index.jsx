// import React from "react";

// export default function Index(props) {
//     return <h1>This page for teacher</h1>
// }
import React from "react";
import { Route, Routes } from "react-router-dom";
import LayoutComponent from "./Layout/Layout";
import routes from "./Router/RouterConfig";
function Index(props) {
  return (
    <div className="TeacherIndex">
      <LayoutComponent {...props}>
        <Routes>
          {routes.length > 0 &&
            routes.map((item) => {
              return (
                <Route
                  path={item.path}
                  element={<item.component />}
                  key={item.path}
                />
              );
            })}
        </Routes>
      </LayoutComponent>
    </div>
  );
}

export default Index;

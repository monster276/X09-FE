import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/PgHome/PgHome";
import ListFacility from "../Pages/PgFacility/ListFacility";
import ListTeacher from "../Pages/PgTeacher/ListTeacher";
import ListClass from "../Pages/PgClass/ListClass";
import ListCourse from "../Pages/PgCourse/ListCourse";


function RoutesPage() {
  return (
      <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/DSCoSo" element={<ListFacility />}></Route>
          <Route path="/DSGV" element={<ListTeacher />}></Route>
          <Route path="/DSKH" element={<ListClass></ListClass>}></Route>
          <Route path="/DSDK" element={<ListCourse></ListCourse>}></Route>
      </Routes>
  );
}

export default RoutesPage;

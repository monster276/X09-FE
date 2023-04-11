import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/PgHome/PgHome";
import ListLocation from "../Pages/PgLocations/ListLocation/ListLocation";
import ListTeacher from "../Pages/PgTeacher/ListTeacher";
import ListClass from  "../Pages/PgClass/ListClass/ListClass";
import ListCourse from "../Pages/PgCourse/ListCourse/ListCourse";

function RoutesPage() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>  
      <Route path="/DSCoSo" element={<ListLocation />}></Route>
      <Route path="/DSGV" element={<ListTeacher />}></Route>
      <Route path="/DSLH" element={<ListClass></ListClass>}></Route>
      <Route path="/DSKH" element={<ListCourse />}></Route>
    </Routes>
  );
}

export default RoutesPage;

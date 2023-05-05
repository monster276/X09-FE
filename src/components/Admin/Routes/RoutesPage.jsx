import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/PgHome/PgHome";
import ListLocation from "../Pages/PgLocations/ListLocation/ListLocation";
import ListUsers from '../Pages/PgUsers/ListUsres/ListUsres'
import ListClass from '../Pages/PgClass/ListClass/ListClass'
import ListCourse from "../Pages/PgCourse/ListCourse/ListCourse";
import ListEnrollCourse from "../Pages/PgEnrollCourse/LitsEnrollCourse/LitsEnrollCourse";
import FeedbackManager from '../../../Pages/Feedback/FeedbackManager'

function RoutesPage() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>  
      <Route path="/DSCoSo" element={<ListLocation />}></Route>
      <Route path="/DSGV" element={<ListUsers />}></Route>
      <Route path="/DSLH" element={<ListClass/>}></Route>
      <Route path="/DSKH" element={<ListCourse />}></Route>
      <Route path="/DSDK" element={<ListEnrollCourse />}></Route>
      <Route path="/feedbackmng" element={<FeedbackManager />}></Route>

    </Routes>
  );
}

export default RoutesPage;

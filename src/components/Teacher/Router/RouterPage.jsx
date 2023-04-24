// import React from "react";

// export default function Index(props) {
//     return <h1>This page for teacher</h1>
// }
import React from "react";
import { Routes, Route } from "react-router-dom";
import routesTeacher, { path } from "./RouterConfig";
import { Lecture } from "../Lecture";
import { Classroom } from "../Classroom";
import { ClassroomDetail } from "../Classroom/ClassroomDetail";
import { CreateLecture } from "../Lecture/CreateLecture";
import { UpdateLecture } from "../Lecture/UpdateLecture";
import { ViewLecture } from "../Lecture/ViewLecture";
import { Lesson } from "../Lesson";
import { CreateLesson } from "../Lesson/CreateLesson";
import { UpdateLesson } from "../Lesson/UpdateLesson";
import { ViewLesson } from "../Lesson/ViewLesson";
import { Register } from "../Register";
import { ClassroomManagement } from "../ClassroomManagement";
import { CreateClassroom } from "../ClassroomManagement/CreateClassroom";
import { UpdateClassroom } from "../ClassroomManagement/UpdateClassroom";
import { ViewClassroom } from "../ClassroomManagement/ViewClassroom";
import { FacilityManagement } from "../FacilityManagement";
import { CreateFacility } from "../FacilityManagement/CreateFacility";
import { UpdateFacility } from "../FacilityManagement/UpdateFacility";
import { ViewFacility } from "../FacilityManagement/ViewFacility";

function RouterPage(props) {
  return (
    <Routes>
      <Route path={path.classroom} element={<Classroom />}></Route>
      <Route path={path.classroomDetail} element={<ClassroomDetail />}></Route>
      <Route path={path.lecture} element={<Lecture />}></Route>
      <Route path={path.createLecture} element={<CreateLecture />}></Route>
      <Route path={path.updateLecture} element={<UpdateLecture />}></Route>
      <Route path={path.viewLecture} element={<ViewLecture />}></Route>
      <Route path={path.lesson} element={<Lesson />}></Route>
      <Route path={path.createLesson} element={<CreateLesson />}></Route>
      <Route path={path.updateLesson} element={<UpdateLesson />}></Route>
      <Route path={path.viewLesson} element={<ViewLesson />}></Route>
      <Route path={path.register} element={<Register />}></Route>
      <Route path={path.classroomManagement} element={<ClassroomManagement />}></Route>
      <Route path={path.createClassroom} element={<CreateClassroom />}></Route>
      <Route path={path.updateClassroom} element={<UpdateClassroom />}></Route>
      <Route path={path.viewClassroom} element={<ViewClassroom />}></Route>
      <Route path={path.facilityManagement} element={<FacilityManagement />}></Route>
      <Route path={path.createFacility} element={<CreateFacility />}></Route>
      <Route path={path.updateFacility} element={<UpdateFacility />}></Route>
      <Route path={path.viewFacility} element={<ViewFacility />}></Route>
    
    </Routes>
  );
}

export default RouterPage;

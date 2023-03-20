import React,{lazy} from "react";
import {Classroom} from "../Classroom"
import { ClassroomDetail } from "../Classroom/ClassroomDetail";
import { Lecture } from "../Lecture";
export const path ={
    classroom:"/classroom",
    classroomDetail:"/classroom-detail",
    lecture:"/lecture",
}
    
const routes = [
  {
    path:path.classroom,
    component: Classroom,
  },
  {
    path: path.classroomDetail,
    component: ClassroomDetail,
  },
  {
    path: path.lecture,
    component: Lecture,
  },
];
export default routes;
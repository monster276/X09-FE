import React, { lazy } from "react";
import { Classroom } from "../Classroom";
import { ClassroomDetail } from "../Classroom/ClassroomDetail";
import { Lecture } from "../Lecture";
import { Register } from "../Register";
import { ClassroomManagement } from "../ClassroomManagement";
import { CreateClassroom } from "../ClassroomManagement/CreateClassroom";
import { ViewClassroom } from "../ClassroomManagement/ViewClassroom";
import { FacilityManagement } from "../FacilityManagement";
import { CreateFacility } from "../FacilityManagement/CreateFacility";
import { ViewFacility } from "../FacilityManagement/ViewFacility";
import { UpdateFacility } from "../FacilityManagement/UpdateFacility";
import { UpdateClassroom } from "../ClassroomManagement/UpdateClassroom";
import { CreateLecture } from "../Lecture/CreateLecture";
import { UpdateLecture } from "../Lecture/UpdateLecture";
import { ViewLecture } from "../Lecture/ViewLecture";
import { Lesson } from "../Lesson";
import { CreateLesson } from "../Lesson/CreateLesson";
import { UpdateLesson } from "../Lesson/UpdateLesson";
import { ViewLesson } from "../Lesson/ViewLesson";
export const path = {
  classroom: "classroom",
  classroomDetail: "classroom/detail" + "/:id",
  lecture: "lecture",
  createLecture: "lecture/create",
  updateLecture: "lecture/update" + "/:id",
  viewLecture: "lecture/view" + "/:id",
  lesson: "lesson",
  createLesson: "lesson/create",
  updateLesson: "lesson/update" + "/:id",
  viewLesson: "lesson/view" + "/:id",
  register: "register",
  classroomManagement: "classroom-management",
  createClassroom: "classroom-management/create",
  updateClassroom: "classroom-management/update" + "/:id",
  viewClassroom: "classroom-management/view" + "/:id",
  facilityManagement: "Facility-management",
  createFacility: "Facility-management/create",
  viewFacility: "Facility-management/view" + "/:id",
  updateFacility: "Facility-management/update" + "/:id",
};

function objectMap(object, mapFn) {
  return Object.keys(object).reduce(function(result, key) {
    result[key] = mapFn(object[key])
    return result
  }, {})
}
export const link = objectMap(path, function(value) {
  return "/teacher/" + value.replace("/:id","")
})

const routes = [
  {
    path: path.classroom,
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
  {
    path: path.createLecture,
    component: CreateLecture,
  },
  {
    path: path.updateLecture ,
    component: UpdateLecture,
  },
  {
    path: path.viewLecture,
    component: ViewLecture,
  },
  {
    path: path.lesson,
    component: Lesson,
  },
  {
    path: path.createLesson,
    component: CreateLesson,
  },
  {
    path: path.updateLesson ,
    component: UpdateLesson,
  },
  {
    path: path.viewLesson,
    component: ViewLesson,
  },
  {
    path: path.register,
    component: Register,
  },
  {
    path: path.classroomManagement,
    component: ClassroomManagement,
  },
  {
    path: path.createClassroom,
    component: CreateClassroom,
  },
  {
    path: path.updateClassroom ,
    component: UpdateClassroom,
  },
  {
    path: path.viewClassroom ,
    component: ViewClassroom,
  },
  {
    path: path.facilityManagement,
    component: FacilityManagement,
  },
  {
    path: path.createFacility,
    component: CreateFacility,
  },
  {
    path: path.viewFacility ,
    component: ViewFacility,
  },
  {
    path: path.updateFacility ,
    component: UpdateFacility,
  },
];
export default routes;

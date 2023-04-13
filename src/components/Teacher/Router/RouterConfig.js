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
import {Lesson}from"../Lesson";
import {CreateLesson}from"../Lesson/CreateLesson";
import {UpdateLesson}from"../Lesson/UpdateLesson";
import {ViewLesson}from"../Lesson/ViewLesson";
export const path = {
    classroom: "/teacher/classroom",
    classroomDetail: "/teacher/classroom/detail",
    lecture: "/teacher/lecture",
    createLecture: "/teacher/lecture/create",
    updateLecture: "/teacher/lecture/update",
    viewLecture: "/teacher/lecture/view",
    lesson:"/teacher/lesson",
    createLesson:"/teacher/lesson/create",
    updateLesson:"/teacher/lesson/update",
    viewLesson:"/teacher/lesson/view",
    register: "/teacher/register",
    classroomManagement: "/teacher/classroom-management",
    createClassroom: "/teacher/classroom-management/create",
    updateClassroom: "/teacher/classroom-management/update",
    viewClassroom: "/teacher/classroom-management/view",
    facilityManagement : "/teacher/Facility-management",
    createFacility:"/teacher/Facility-management/create",
    viewFacility:"/teacher/Facility-management/view",
    updateFacility:"/teacher/Facility-management/update",
  };

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
        path: path.updateLecture + "/:id",
        component: UpdateLecture,
      },
      {
        path: path.viewLecture + "/:id",
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
        path: path.updateLesson + "/:id",
        component: UpdateLesson,
      },
      {
        path: path.viewLesson + "/:id",
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
        path: path.updateClassroom + "/:id",
        component: UpdateClassroom,
      },
      {
        path: path.viewClassroom + "/:id",
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
        path: path.viewFacility + "/:id",
        component: ViewFacility,
      },
      {
        path: path.updateFacility + "/:id" ,
        component: UpdateFacility,
      },
  ];
export default routes;

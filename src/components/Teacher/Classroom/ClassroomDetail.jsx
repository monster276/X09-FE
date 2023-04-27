import { Table, Select, Input, InputNumber } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { path } from "../Router/RouterConfig";
import * as _unitOfWork from "../api"
import { useEffect, useState } from "react";



const { Option } = Select;

export function ClassroomDetail() {
  const params = useParams();
  const [attendances,setAttendances] = useState([])
  const [lessons,setLessons] = useState([])

  useEffect(()=> {fetchAttendance()},[])
  
  const fetchAttendance = async () => {
    let res = await _unitOfWork.getAllAttendance({classroom:params.id})
    if(res){
      setAttendances(res.studentsAttendances)
      setLessons(res.studentsAttendances[0].attendances)
    }
  } 
  const studentColumns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
    },
    {
      title: "Lop Học",
      dataIndex: "classroomName",
      key: "classroomName",
      render: (text,record) => {
        return <span>{record.classroom?.name}</span>;
      },
    },
    {
   
      title: "Họ tên",
      dataIndex: "studentName",
      key: "studentName",
      render: (text,record) => {
        return <span>{record.student?.fullName}</span>;
      },
    },
  ];
  const scheduleColums = lessons
    .map((s) => {
      return {
        title: s.lesson,
       
        children: [
          {
            title: "Điểm danh",
            dataIndex: s.id,
            key: s.id,
            width:"100px",
            render: (text, record) => {
              let attend = record.attendances.find(
                (e) => e.lesson == s.lesson
              );
              return (
                <Select
                  style={{ width: "100%" }}
                  defaultValue={attend?.presence}
                >
                  <Option value="MUON">Muộn</Option>
                  <Option value="DUNG_GIO">Đúng giờ</Option>
                  <Option value="VANG">Vắng</Option>
                  <Option value="VANG_CO_PHEP">Vắng Có Phép</Option>
                </Select>
              );
            },
          },
          {
            title: "Chấm điểm",
            dataIndex: s.id,
            key: s.id,
            width:"100px",
            render: (text, record) => {
              let attend = record.attendances.find(
                (e) => e.lesson == s.lesson
              );
              return (
                <InputNumber
                  style={{ width: "100%" }}
                  defaultValue={attend?.score}
                  min="0"
                  max="10"
                />
              );
            },
          },
          {
            title: "Nhận xét",
            dataIndex: s.id,
            key: s.id,
            width:"100px",
            render: (text, record) => {
              let attend = record.attendances.find(
                (e) => e.lesson == s.lesson
              );
              return (
                <Input
                  style={{ width: "100%" }}
                  defaultValue={attend?.comment}
                ></Input>
              );
            },
          },
        ],
      };
    })
    .flat(1);
  return (
    <>
      <Table
        columns={[...studentColumns, ...scheduleColums]}
        dataSource={attendances}
        // scroll={{ x: true }}
      />
    </>
  );
}

import { Button, Space, Table, Row, Col } from "antd";
import Search from "antd/es/input/Search";
import { useNavigate } from "react-router-dom";
import { link, path } from "../Router/RouterConfig";
import momnent from "moment";
import React, { useEffect, useState } from "react";
import * as _unitOfWork from "../api";

export function Classroom() {
  const navigate = useNavigate();
  const [classrooms, setClassrooms] = useState([]);
  
  useEffect(() => {
    fetchClassroom();
  }, []);

  const fetchClassroom = async () => {
    let res = await _unitOfWork.getAllClassroom();
    if (res)
      setClassrooms(res.classrooms.map((c, i) => ({ ...c, stt: i + 1 })));
  };
  const handleDelete = async (value) => {
    let res = await _unitOfWork.deleteASingleClassroom(value);
    if (res) {
      fetchClassroom()
    }
  }

  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
    },
    {
      title: "Mã Lớp",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tên Lớp",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Giảng viên",
      dataIndex: "user",
      key: "user",
      render: (value, record) => (
        <>{record.user?.fullName}</>
      ),
    },
    {
      title: "Khóa Học",
      dataIndex: "course",
      key: "course",
      render: (value, record) => (
        <>{record.course?.name}</>
      ),
    },
    {
      title: "Cơ sở",
      dataIndex: "location",
      key: "location",
      render: (value, record) => (
        <>{record.location?.name}</>
      ),
    },

    {
      title: "Ngày bắt đầu",
      dataIndex: "startTime",
      key: "startTime",
      render: (value, record) => (
        <>{momnent(value).add("hours", 7).format("DD-MM-YYYY")}</>
      ),
    },
    {
      title: "Ngày kết thúc",
      dataIndex: "endTime",
      key: "endTime",
      render: (value, record) => (
        <>{momnent(value).add("hours", 7).format("DD-MM-YYYY")}</>
      ),
    },
    {
      title: "Số bài giảng",
      dataIndex: "numberOfLessons",
      key: "numberOfLessons",
    },
    {
      title: "Giờ học",
      dataIndex: "classTime",
      key: "classTime",
    },
    {
      title: "Lịch Học",
      dataIndex: "schedule",
      key: "schedule",
      render: (value, record) => <>{value.join(",")}</>,
    },

    {
      title: "Ghi Chú",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
             <Button  onClick={() => navigate(link.classroomDetail + "/" + record._id)}>
            Chi tiết
          </Button>
       
        </Space>
      ),
    },
  ];
  return (
    <>
      <Row style={{ marginBottom: "10px" }}>
        <Col span={12}>
          <Search placeholder="Tìm kiếm"></Search>
        </Col>
     
      </Row>
      <Table  scroll={{
      x: true,
    }} columns={columns} dataSource={classrooms} bordered />
    </>
  );
}

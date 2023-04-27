import { Button, Space, Table, Row, Col, Form, Input } from "antd";
import Search from "antd/es/input/Search";
import { useNavigate } from "react-router-dom";
import { link, path } from "../Router/RouterConfig";
import momnent from "moment";
import React, { useEffect, useState } from "react";
import * as _unitOfWork from "../api";
import { cleanObj } from "../helper/objHelper";

export function Classroom() {
  const navigate = useNavigate();
  const [formSearch] = Form.useForm();
  const [classrooms, setClassrooms] = useState([]);
  
  useEffect(() => {
    fetchClassroom();
  }, []);

  const fetchClassroom = async (value) => {
    let payload = {
      ...cleanObj(value)
    }
    let res = await _unitOfWork.getClassroomByUser(payload);
    if (res)
      setClassrooms(res.map((c, i) => ({ ...c, stt: i + 1 })));
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
      <Form form={formSearch} layout="vertical" onFinish={fetchClassroom}>
        <Row gutter={32}>
          <Col span={6}>
            <Form.Item label="Mã lớp" name = "id" >
              <Input ></Input>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="Tên lớp" name = "name" >
              <Input></Input>
            </Form.Item>
          </Col>
        </Row>
        <Row style={{ marginBottom: "10px" }}>
          <Col span={12}>
            <Button type="primary" htmlType="submit">
              Tìm kiếm
            </Button>
          </Col>
        </Row>
        </Form>
      <Table  scroll={{
      x: true,
    }} columns={columns} dataSource={classrooms} bordered />
    </>
  );
}

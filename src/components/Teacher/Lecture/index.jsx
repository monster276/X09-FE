import { Button, Space, Table, Row, Col, Input, Form } from "antd";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as _unitOfWork from "../api"
import { link, path } from "../Router/RouterConfig";
const {Search} = Input
export function Lecture() {
  const navigate = useNavigate()
  const [formSearch] = Form.useForm();
  const [lectures, setLectures] = useState([]);
  useEffect(() => {
    fetchLectures()
  }, []);

  const fetchLectures = async () => {
    let res = await _unitOfWork.getAllLecture()
    if(res){
      setLectures(res.lectures.map((item,index) => ({...item,stt:index+1})))
    }
  }
  const handleDelete = async (value) => {
    let res = await _unitOfWork.deleteASingleLecture(value);
    if (res) {
      fetchLectures()
    }
  }
  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
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
      title: "Tên Bài Giảng",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Ghi Chú",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
            <Button  onClick={() => navigate(link.viewLecture + "/" + record._id)}>
            Chi tiết
          </Button>
          {/* <Button type="primary" onClick={() => navigate(link.updateLecture + "/" + record._id)}>
            Cập nhật
          </Button>
          <Button danger type="primary" onClick={() => handleDelete(record._id)}>
            Xóa
          </Button> */}
        </Space>
      ),
    },
  ];

  return (
    <>
      <Form form={formSearch} layout="vertical">
        <Row gutter={32}>
          <Col span={6}>
            <Form.Item label="Khóa Học" >
              <Input placeholder="Khóa Học"></Input>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="Tên Bài Giảng" >
              <Input placeholder="Tên Bài Giảng"></Input>
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
      {/* <Row style={{ marginBottom: "10px" }}>
        <Col span={12}>
          <Button type="primary" onClick={() => navigate(link.createLecture)}>
            Thêm mới
          </Button>
          </Col>
      </Row> */}
      </Form>
      <Table columns={columns} dataSource={lectures} />
    </>
  );
}

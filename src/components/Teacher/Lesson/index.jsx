import { Button, Space, Table, Row, Col, Input } from "antd";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as _unitOfWork from "../api"
import { path } from "../Router/RouterConfig";
const {Search} = Input
export function Lesson() {
  const navigate = useNavigate()
  const [lessons, setLessons] = useState([]);
  useEffect(() => {
    fetchLessons()
  }, []);

  const fetchLessons = async () => {
    let res = await _unitOfWork.getAllLesson()
    if(res){
      setLessons(res.lessons.map((item,index) => ({...item,stt:index+1})))
    }
  }
  const handleDelete = async (value) => {
    let res = await _unitOfWork.deleteASingleLesson(value);
    if (res) {
      fetchLessons()
    }
  }
  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
    },
    {
      title: "Bài học",
      dataIndex: "lecture",
      key: "lecture",
      render: (value, record) => (
        <>{record.lecture?.name}</>
      ),
    },
    {
      title: "Tiêu đề",
      dataIndex: "title",
      key: "title",
    },
    {
        title: "Nội dung",
        dataIndex: "content",
        key: "content",
      },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
            <Button  onClick={() => navigate(path.viewLesson + "/" + record._id)}>
            Chi tiết
          </Button>
          <Button type="primary" onClick={() => navigate(path.updateLesson + "/" + record._id)}>
            Cập nhật
          </Button>
          <Button danger type="primary" onClick={() => handleDelete(record._id)}>
            Xóa
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
        <Col span={12} style={{ textAlign: "right" }}>
          <Button type="primary" onClick={() => navigate(path.createLesson)}>
            Thêm mới
          </Button>
        </Col>
      </Row>
      <Table columns={columns} dataSource={lessons} />
    </>
  );
}

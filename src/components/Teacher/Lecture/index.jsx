import { Button, Space, Table, Row, Col, Input } from "antd";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as _unitOfWork from "../api"
import { link, path } from "../Router/RouterConfig";
const {Search} = Input
export function Lecture() {
  const navigate = useNavigate()
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
      title: "Ten bai giang",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
            <Button  onClick={() => navigate(link.viewLecture + "/" + record._id)}>
            Chi tiết
          </Button>
          <Button type="primary" onClick={() => navigate(link.updateLecture + "/" + record._id)}>
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
          <Button type="primary" onClick={() => navigate(link.createLecture)}>
            Thêm mới
          </Button>
        </Col>
      </Row>
      <Table columns={columns} dataSource={lectures} />
    </>
  );
}

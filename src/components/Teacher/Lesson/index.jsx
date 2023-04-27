import { Button, Space, Table, Row, Col, Input } from "antd";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as _unitOfWork from "../api";
import { link, path } from "../Router/RouterConfig";
import { CreateLesson } from "./CreateLesson";
import { UpdateLesson } from "./UpdateLesson";
import { ViewLesson } from "./ViewLesson";
const { Search } = Input;
export function Lesson({lectureId}) {
  const navigate = useNavigate();
  const [lessons, setLessons] = useState([]);
  const [showCreateLesson, setShowCreateLesson] = useState(false);
  const [showUpdateLesson, setShowUpdateLesson] = useState(false);
  const [showViewLesson, setShowViewLesson] = useState(false);
  const [lessonTarget, setLessonTarget] = useState(null);
  useEffect(() => {
    if(lectureId)
      fetchLessons();
  }, [lectureId]);

  const fetchLessons = async () => {
    let payload ={}
    if(lectureId)
      payload = {lecture:lectureId}
    let res = await _unitOfWork.getAllLesson(payload);
    if (res) {
      setLessons(
        res.lessons.map((item, index) => ({ ...item, stt: index + 1 }))
      );
    }
  };
  const handleDelete = async (value) => {
    let res = await _unitOfWork.deleteASingleLesson(value);
    if (res) {
      fetchLessons();
    }
  };
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
      render: (value, record) => <>{record.lecture?.name}</>,
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
    // {
    //   title: "Ghi Chú",
    //   key: "action",
    //   render: (_, record) => (
    //     <Space size="middle">
    //       <Button onClick={() => onClickViewLesson(record)}>Chi tiết</Button>
    //       <Button type="primary" onClick={() => onClickUpdateLesson(record)}>
    //         Cập nhật
    //       </Button>
    //       <Button danger type="primary" onClick={() => handleDelete(record._id)}>
    //         Xóa
    //       </Button>
    //     </Space>
    //   ),
    // },
  ];

  const onClickCreateLesson = () => setShowCreateLesson(true);
  const onCancleCreateLesson = () => setShowCreateLesson(false);
  const onCallbackCreateLesson = () => {
    setShowCreateLesson(false);
    fetchLessons();
  };

  const onClickUpdateLesson = (value) => {
    setLessonTarget(value);
    setShowUpdateLesson(true);
  };
  const onCancleUpdateLesson = () => setShowUpdateLesson(false);
  const onCallbackUpdateLesson = () => {
    setShowUpdateLesson(false);
    fetchLessons();
  };

  const onClickViewLesson = (value) => {
    setLessonTarget(value);
    setShowViewLesson(true);
  };
  const onCancleViewLesson = () => setShowViewLesson(false);
  const onCallbackViewLesson = () => setShowViewLesson(false);
  return (
    <>
      {/* <Row style={{ marginBottom: "10px" }}>
        <Col span={12}>
          <Search placeholder="Tìm kiếm"></Search>
        </Col>
        <Col span={12} style={{ textAlign: "right" }}>
          <Button type="primary" onClick={() => navigate(link.createLesson)}>
            Thêm mới
          </Button>
        </Col>
      </Row> */}
      {/* <div style={{ width: "100%", textAlign: "right" }}>
        <Button type="primary" onClick={() => onClickCreateLesson()}>
          Thêm mới
        </Button>
      </div> */}
      <Table columns={columns} dataSource={lessons} />
      <CreateLesson
        isModalOpen={showCreateLesson}
        onCancel={onCancleCreateLesson}
        onCallback={onCallbackCreateLesson}
      ></CreateLesson>
      <UpdateLesson
        lesson={lessonTarget}
        isModalOpen={showUpdateLesson}
        onCancel={onCancleUpdateLesson}
        onCallback={onCallbackUpdateLesson}
      ></UpdateLesson>
      <ViewLesson
        lesson={lessonTarget}
        isModalOpen={showViewLesson}
        onCancel={onCallbackViewLesson}
        onCallback={onCallbackViewLesson}
      ></ViewLesson>
    </>
  );
}

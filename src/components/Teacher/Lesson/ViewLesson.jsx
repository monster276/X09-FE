import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Form,
  Input,
  DatePicker,
  Table,
  Checkbox,
  Button,
  Select,
  InputNumber,
  Modal,
} from "antd";
import { useNavigate, useParams } from "react-router-dom";
import * as _unitOfWork from "../api";
const { Option } = Select;
const { TextArea } = Input;

export function ViewLesson({isModalOpen,lesson,onCancel,onCallback}) {
  const param = lesson;
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [lectures, setLectures] = useState([]);

  useEffect(() => {
    fetchLectures();
    fetchLesson();
  }, []);

  const fetchLectures = async () => {
    let res = await _unitOfWork.getAllLecture();
    if (res) setLectures(res.lectures);
  };
  const fetchLesson = async () => {
    let res = await _unitOfWork.getASingleLesson(param.id);
    if (res) {
      form.setFieldsValue({ ...res, lecture: res.lecture?._id });
    }
  };


 
  return (
    <>
     <Modal
        Key="id"
        visible={isModalOpen}
        title="Chi Tiết Lớp Học "
        onCancel={onCancel}
        centered
        footer={[
          <Button onClick={onCancel}>Thoát</Button>,
        ]}
      >
      <Form form={form} layout="vertical" >
        <Row gutter={32}>
          <Col span={8}>
            <Form.Item
              label="Tên bài giảng"
              name="lecture"
              rules={[{ required: true, message: "Vui lòng chọn khóa học" }]}
            >
              <Select placeholder="Tên bài giảng">
                {lectures?.map((item, index) => (
                  <Option id={index} key={item._id}>
                    {item.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Tiêu đề"
              name="title"
              rules={[{ required: true, message: "Vui lòng nhập tiêu đề" }]}
            >
              <Input placeholder="Tên bài học"></Input>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Thứ tư"
              name="order"
              rules={[{ required: true, message: "Vui lòng nhập thứ tự" }]}
            >
              <InputNumber
                style={{ width: "100%" }}
                placeholder="Thứ tự"
              ></InputNumber>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="Nội dung"
              name="content"
              rules={[{ required: true, message: "Vui lòng nhập thứ tự" }]}
            >
              <TextArea placeholder="nôi dung" rows={4}></TextArea>
            </Form.Item>
          </Col>
          {/* <Col span={24} style={{ textAlign: "right" }}>
            <Button onClick={() => navigate(-1)}>Quay lại</Button>
          
          </Col> */}
        </Row>
      </Form>
      </Modal>
    </>
  );
}

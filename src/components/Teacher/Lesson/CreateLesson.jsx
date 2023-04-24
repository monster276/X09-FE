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
} from "antd";
import { useNavigate } from "react-router-dom";
import * as _unitOfWork from "../api";
const { Option } = Select;
const {TextArea} = Input

export function CreateLesson() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [lectures, setLectures] = useState([]);

  useEffect(() => {
    fetchLectures();
  }, []);

  const fetchLectures = async () => {
    let res = await _unitOfWork.getAllLecture();
    if (res) setLectures(res.lectures);
  };

  const onFinish = async () => {
    form.validateFields();

    let payload = {
      ...form.getFieldsValue(),
    };

    let res = await _unitOfWork.createASingleLesson(payload);
    if (res) {
      navigate(-1);
    }
  };

  return (
    <>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Row gutter={32}>
          <Col span={8}>
            <Form.Item
              label="Bài giảng"
              name="lecture"
              rules={[{ required: true, message: "Vui lòng chọn khóa học" }]}
            >
              <Select placeholder="Bài giảng" >
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
              <InputNumber style={{width:"100%"}} placeholder="Thứ tự"></InputNumber>
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
          <Col span={24} style={{ textAlign: "right" }}>
            <Button onClick={() => navigate(-1)}>Quay lại</Button>
            <Button type="primary" htmlType="submit">
              Lưu lại
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

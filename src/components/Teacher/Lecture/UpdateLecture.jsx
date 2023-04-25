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
import { useNavigate, useParams } from "react-router-dom";
import * as _unitOfWork from "../api";
import { Lesson } from "../Lesson";
const { Option } = Select;

export function UpdateLecture() {
  const param = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
    fetchLecture();
  }, []);

  const fetchCourses = async () => {
    let res = await _unitOfWork.getAllCourse();
    if (res) setCourses(res.courses);
  };
  const fetchLecture = async () => {
    let res = await _unitOfWork.getASingleLecture(param.id);
    if (res) {
      form.setFieldsValue({ ...res, course: res.course?._id });
    }
  };

  const onFinish = async () => {
    form.validateFields();

    let payload = {
      _id: param.id,
      ...form.getFieldsValue(),
    };

    let res = await _unitOfWork.updateASingleLecture(payload, param.id);
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
              label="Khóa học"
              name="course"
              rules={[{ required: true, message: "Vui lòng chọn khóa học" }]}
            >
              <Select placeholder="Khóa học" >
                {courses?.map((item, index) => (
                  <Option id={index} key={item._id}>
                    {item.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Tên bài học"
              name="name"
              rules={[{ required: true, message: "Vui lòng nhập tên bài học" }]}
            >
              <Input placeholder="Tên bài học"></Input>
            </Form.Item>
          </Col>
          <Lesson></Lesson>
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

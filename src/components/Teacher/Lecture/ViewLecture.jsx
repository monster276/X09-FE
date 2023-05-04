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

export function ViewLecture() {
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

  return (
    <>
      <Form form={form} layout="vertical" >
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
              label="Tên bài giảng"
              name="name"
              rules={[{ required: true, message: "Vui lòng chọn bài giảng" }]}
            >
             <Input></Input>
            </Form.Item>
          </Col>
          
          <Lesson lectureId={param.id}></Lesson>
          <Col span={24} style={{ textAlign: "right" }}>
            <Button onClick={() => navigate(-1)}>Quay lại</Button>
          
          </Col>
        </Row>
      </Form>
    </>
  );
}

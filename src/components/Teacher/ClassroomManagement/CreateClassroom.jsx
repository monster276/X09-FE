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
import moment from "moment";
const { Option } = Select;

export function CreateClassroom() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [classCodeArr, setClassCodeArr] = useState(["", "", ""]);
  const [courses, setCourses] = useState([]);
  const [locations, setLocations] = useState([]);
  const [teachers, setTeachers] = useState([
    { _id: "64141ea1e59fd2544534942a", name: "64141ea1e59fd2544534942a" },
  ]);
  const [enrollCourses, setEnrollCourses] = useState([]);

  useEffect(() => {
    fetchLocations();
    fetchCourses();
    // fetchTeacher();
  }, []);
  useEffect(() => {
    console.log("set code");
    console.log(classCodeArr, classCodeArr.indexOf(""));
    if (classCodeArr.indexOf("") == 2) fetchErollCourse();
    form.setFieldValue("id", classCodeArr.join(" "));
  }, [classCodeArr]);
  const fetchLocations = async () => {
    let res = await _unitOfWork.getAllLocation();
    if (res) setLocations(res.locations);
  };
  const fetchCourses = async () => {
    let res = await _unitOfWork.getAllCourse();
    if (res) setCourses(res.courses);
  };
  const fetchTeacher = async () => {
    let res = await _unitOfWork.getAllTeacher();
    if (res) setTeachers(res.teachers);
  };
  const fetchErollCourse = async () => {
    let course = form.getFieldsValue().course;
    let location = form.getFieldsValue().location;
    console.log(course, location);
    let res = await _unitOfWork.getAllEnrollCourse();
    if (res)
      setEnrollCourses(
        res.enrollCourses
          .filter((e) => e.course?._id == course && e.location?._id == location)
          .map((c, i) => ({ ...c, stt: i + 1 }))
      );
  };
  const onChangeCourse = (value) => {
    let id = courses.find((item) => item._id == value).id;
    classCodeArr.splice(1, 1, id);
    setClassCodeArr([...classCodeArr]);
  };
  const onChangeFacility = (value) => {
    let id = locations.find((item) => item._id == value).id;
    classCodeArr.splice(0, 1, id);
    setClassCodeArr([...classCodeArr]);
  };

  const onFinish = async () => {
    form.validateFields();

    let payload = {
      ...form.getFieldsValue(),
    };
    payload.startTime = moment(payload.startTime)
      .add("hours", 7)
      .format("YYYY-MM-DD");
    payload.endTime = moment(payload.endTime)
      .add("hours", 7)
      .format("YYYY-MM-DD");
    let res = await _unitOfWork.createASingleClassroom(payload);
    if (res) {
      navigate(-1);
    }
  };

  const columns = [
    {
      title: "Lịch học",
    },
    {
      title: "Thứ 2",
      render: () => <Checkbox value="2">Thứ 2</Checkbox>,
    },
    {
      title: "Thứ 3",
      render: () => <Checkbox value="3">Thứ 3</Checkbox>,
    },
    {
      title: "Thứ 4",
      render: () => <Checkbox value="4">Thứ 4</Checkbox>,
    },
    {
      title: "Thứ 5",
      render: () => <Checkbox value="5">Thứ 5</Checkbox>,
    },
    {
      title: "Thứ 6",
      render: () => <Checkbox value="6">Thứ 6</Checkbox>,
    },
    {
      title: "Thứ 7",
      render: () => <Checkbox value="7">Thứ 7</Checkbox>,
    },
    {
      title: "Chủ nhật",
      render: () => <Checkbox value="8">Chủ nhật</Checkbox>,
    },
  ];
  const enrollColumns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
    },
    {
      title: "Họ tên",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "SĐT",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Cơ sở",
      dataIndex: "location",
      key: "location",
      render: (value, record) => <>{record.location?.name}</>,
    },
    {
      title: "Khóa Học",
      dataIndex: "course",
      key: "course",
      render: (value, record) => <>{record.course?.name}</>,
    },
  ];
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
              <Select placeholder="Khóa học" onChange={onChangeCourse}>
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
              label="Cơ sở"
              name="location"
              rules={[{ required: true, message: "Vui lòng chọn cơ sở học" }]}
            >
              <Select placeholder="Cơ sở" onChange={onChangeFacility}>
                {locations?.map((item, index) => (
                  <Option id={index} key={item._id}>
                    {item.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Mã lớp học"
              name="id"
              rules={[{ required: true, message: "Vui lòng nhập mã lớp học" }]}
            >
              <Input placeholder="Mã lớp học"></Input>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Tên lớp học"
              name="name"
              rules={[{ required: true, message: "Vui lòng nhập tên lớp học" }]}
            >
              <Input placeholder="Mã lớp học"></Input>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Số bài học" name="numberOfLessons">
              <InputNumber
                placeholder="Số buổi học"
                style={{ width: "100%" }}
              ></InputNumber>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Thời gian học" name="classTime">
              <InputNumber
                placeholder="Thời lượng trên lớp"
                style={{ width: "100%" }}
              ></InputNumber>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Ngày bắt đầu" name="startTime">
              <DatePicker
                format="DD-MM-YYYY"
                placeholder="Ngày bắt đầu"
                style={{ width: "100%" }}
              ></DatePicker>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Ngày kết thúc dự kiến" name="endTime">
              <DatePicker
                format="DD-MM-YYYY"
                placeholder="Ngày kết thúc dự kiến"
                style={{ width: "100%" }}
              ></DatePicker>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="schedule">
              <Checkbox.Group style={{ width: "100%" }}>
                <Table
                  style={{ width: "100%" }}
                  columns={columns}
                  dataSource={[{}]}
                  bordered
                  pagination={false}
                />
              </Checkbox.Group>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Giảng viên" name="user">
              <Select placeholder="Giảng viên">
                {teachers?.map((item, index) => (
                  <Option id={index} key={item._id}>
                    {item.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={24}>
            {enrollCourses.length > 0 && (
              <Table columns={enrollColumns} dataSource={enrollCourses} />
            )}
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

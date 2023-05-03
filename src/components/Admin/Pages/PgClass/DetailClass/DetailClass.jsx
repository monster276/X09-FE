import React, { useContext, useState, useEffect } from "react";
import {
  Button,
  Modal,
  Form,
  Input,
  Select,
  Table,
  DatePicker,
  Checkbox,
  InputNumber,
  Row,
  Col,
} from "antd";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import { ListContext } from "../ListClass/ListClass";
import * as _unitOfWork from "../api";
import moment from "moment";
const { Option } = Select;
const DetailClass = ({ classId }) => {
  const param = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [classCodeArr, setClassCodeArr] = useState(["", "", ""]);
  const [courses, setCourses] = useState([]);
  const [locations, setLocations] = useState([]);
  const [teachers, setTeachers] = useState([
    { _id: "64141ea1e59fd2544534942a", name: "64141ea1e59fd2544534942a" },
  ]);
  const [attendances, setAttendances] = useState([]);
  const {
    showDetaillModal,
    DetailsModalOpen,
  } = useContext(ListContext);

  useEffect(() => {
    if (classId) {
      fetchClassroom();
      fetchLocations();
      fetchCourses();
      // fetchTeacher();
      fetchAttendances();
    }
  }, [classId]);
  useEffect(() => {
    console.log("set code");
    form.setFieldValue("id", classCodeArr.join(" "));
  }, [classCodeArr]);

  const fetchClassroom = async () => {
    let res = await _unitOfWork.getASingleClassroom(classId);
    if (res) {
      console.log(res);
      form.setFieldsValue({
        ...res,
        startTime: res.startTime && moment(res.startTime).add("hours", 7),
        endTime: res.endTime && moment(res.endTime).add("hours", 7),
        location: res.location?._id,
        course: res.course?._id,
        user: res.user?._id,
      });
    }
  };

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
  const fetchAttendances = async () => {
    let res = await _unitOfWork.getAllAttendance({ classroom: classId });
    if (res)
      setAttendances(
        res.studentsAttendances.map((c, i) => ({ ...c, stt: i + 1 }))
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
      _id: classId,
      ...form.getFieldsValue(),
    };
    payload.startTime = moment(payload.startTime)
      .add("hours", 7)
      .format("YYYY-MM-DD");
    payload.endTime = moment(payload.endTime)
      .add("hours", 7)
      .format("YYYY-MM-DD");
    let res = await _unitOfWork.getASingleClassroom(payload, classId);
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
  const attendanceColumns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
    },
    {
      title: "Họ tên",
      dataIndex: "fullName",
      key: "fullName",
      render: (value, record) => <>{record.student?.fullName}</>,
    },
  ];
  return (
    <div>
      <Modal
        Key="id"
        visible={DetailsModalOpen}
        title="CHỈNH SỬA LỚP HỌC"
        onCancel={showDetaillModal}
        centered
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        width={800}
      >
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Row gutter={32}>
            <Col span={8}>
              <Form.Item label="Khóa học" name="course">
                <Select
                  placeholder="Khóa học"
                  onChange={onChangeCourse}
                  disabled
                >
                  {courses?.map((item, index) => (
                    <Option id={index} key={item._id}>
                      {item.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Cơ sở" name="location">
                <Select
                  placeholder="Cơ sở"
                  disabled
                  onChange={onChangeFacility}
                >
                  {locations?.map((item, index) => (
                    <Option id={index} key={item._id}>
                      {item.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Mã lớp học" name="id">
                <Input placeholder="Mã lớp học"></Input>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Tên lớp học" name="name">
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
              <Table columns={attendanceColumns} dataSource={attendances} />
            </Col>
            <Col span={24} style={{ textAlign: "right" }}>
              <Button
                style={{ background: "red", color: "white" }}
                onClick={showDetaillModal}
              >
                Quay lại
              </Button>
              {/* <Button
                style={{ background: "blue", color: "white" }}
                type="primary"
                htmlType="submit"
              >
                Lưu lại
              </Button> */}
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
};
export default DetailClass;

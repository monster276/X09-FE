import React, { useContext, useState, useEffect } from "react";
import Modal from "react-modal";
import { Button, Select, Input } from "antd";
import { ToastContainer, toast } from "react-toastify";
import { CloseOutlined } from "@ant-design/icons";
import EnrollContext from "../Context/enrollCourse/EnrollContext";
import LocationContext from "../Context/location/LocationContext";
import "./Detail.css";
const { Option } = Select;

const EnrollCourse = (props) => {
  const enrollContext = useContext(EnrollContext);
  const { addEnrollCourse } = enrollContext;
  const locationContext = useContext(LocationContext);
  const { getLocations, locations } = locationContext;

  const [enrollCourse, setEnrollCourse] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    course: props.CourseId,
    location: "",
  });

  const { fullName, email, phoneNumber, location } = enrollCourse;

  useEffect(() => {
    getLocations();
    // eslint-disable-next-line
  }, []);

  // onChange event for all input
  const onChange = (e) => {
    setEnrollCourse({ ...enrollCourse, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    addEnrollCourse(enrollCourse);
    setEnrollCourse({
      fullName: "",
      email: "",
      phoneNumber: "",
      course: props.CourseId,
      location: "",
    });

    toast.success("Đăng ký thành công!", {
      position: toast.POSITION.TOP_RIGHT,
    });
    props.setIsOpen(false);
  };

  return (
    <Modal isOpen={props.isOpen} onRequestClose={props.handleCloseModal}>
      <ToastContainer />
      <form onSubmit={onSubmit}>
        <CloseOutlined className="regis-btn" onClick={props.handleCloseModal} />
        <div className="regis-container">
          <div className="regis-pic">
            <img
              alt="idk"
              src="https://media.istockphoto.com/id/1146311489/vi/anh/n%C3%BAt-register-tr%C3%AAn-b%C3%A0n-ph%C3%ADm-m%C3%A1y-t%C3%ADnh.jpg?s=170667a&w=0&k=20&c=b2JXZkTnmi1IE5baGUsYA1qBXJgXwOJy2cGVEtXnt94="
            />
          </div>
          <div className="register-title">
            <h2>Đăng ký khóa học</h2>
            <p>Chọn cơ sở:</p>
            <Select
              className="select-regis"
              defaultValue="Chọn cơ sở"
              style={{ width: 200 }}
              name="location"
              value={location}
              onChange={(value) =>
                setEnrollCourse({
                  ...enrollCourse,
                  location: value,
                })
              }
            >
              {locations.map((location) => (
                <Option value={location._id}>{location.name}</Option>
              ))}
            </Select>
            <p>Họ và tên:</p>
            <Input
              placeholder="Nhập vào đây"
              className="regis-input"
              name="fullName"
              value={fullName}
              onChange={onChange}
              required
            />
            <p>Email:</p>
            <Input
              placeholder="Nhập vào đây"
              className="regis-input"
              name="email"
              value={email}
              onChange={onChange}
              required
            />
            <p>Số điện thoại:</p>
            <Input
              placeholder="Nhập vào đây"
              className="regis-input"
              name="phoneNumber"
              value={phoneNumber}
              onChange={onChange}
              required
            />
            <p>Khóa học:</p>
            <Input
              placeholder="Nhập vào đây"
              className="regis-input"
              value={props.course.name}
              disabled
            />
            <Button className="regis-submit" type="primary" htmlType="submit">
              Đăng ký
            </Button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default EnrollCourse;

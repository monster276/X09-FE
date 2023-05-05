import React, { useContext, useState, useEffect } from "react";
import Modal from "react-modal";
import { Button, Select, Input } from "antd";
import { ToastContainer, toast } from "react-toastify";
import { CloseOutlined } from "@ant-design/icons";
import { useForm } from "react-hook-form";
import EnrollContext from "../Context/enrollCourse/EnrollContext";
import LocationContext from "../Context/location/LocationContext";
import "./Detail.css";
const { Option } = Select;

const EnrollCourse = (props) => {
  const enrollContext = useContext(EnrollContext);
  const { addEnrollCourse } = enrollContext;
  const locationContext = useContext(LocationContext);
  const { getLocations, locations } = locationContext;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [enrollCourse, setEnrollCourse] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    course: props.CourseId,
    location: "64435027edac2684b9443bb5",
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

  console.log(watch("fullName", "email", "phoneNUmber"));

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.handleCloseModal}
      style={{ margintop: "2%" }}
    >
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)}>
        <CloseOutlined
          className="regis-btn"
          onClick={props.handleCloseModal}
          style={{ paddingTop: "2%" }}
        />
        <div className="regis-container">
          <div className="regis-pic">
            <img alt="idk" src="https://wondercopier.in/Images/signup.png" />
          </div>
          <div className="register-title">
            <h2>Đăng ký khóa học</h2>
            <p>Chọn cơ sở:</p>
            <select
              className="select-regis"
              defaultValue="Chọn cơ sở"
              name="location"
              value={location}
              onChange={(e) =>
                setEnrollCourse({
                  ...enrollCourse,
                  location: e.target.value,
                })
              }
            >
              {locations.map((location) => (
                <option value={location._id}>{location.name}</option>
              ))}
            </select>
            <p>Họ và tên:</p>
            <input
              {...register("fullName", {
                required: true,
                maxLength: 30,
                pattern:
                  /[^a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/u,
              })}
              placeholder="Nhập vào đây"
              className="regis-input"
              name="fullName"
              value={fullName}
              onChange={onChange}
            />
            {errors.fullName?.type === "required" && (
              <p style={{ color: "red", fontSize: "16px" }}>
                Không được để trống thông tin này
              </p>
            )}
            {errors.fullName?.type === "maxLength" && (
              <p style={{ color: "red", fontSize: "16px" }}>
                độ dài không được quá 30 kí tự
              </p>
            )}
            {errors.fullName?.type === "pattern" && (
              <p style={{ color: "red", fontSize: "16px" }}>
                Định dạng họ tên không đúng
              </p>
            )}
            <p>Email:</p>
            <input
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
              placeholder="Nhập vào đây"
              className="regis-input"
              name="email"
              value={email}
              onChange={onChange}
            />
            {errors.email?.type === "required" && (
              <p style={{ color: "red", fontSize: "16px" }}>
                Không được để trống thông tin này
              </p>
            )}
            {errors?.email?.type === "pattern" && (
              <p style={{ color: "red", fontSize: "16px" }}>
                Định dạng email không đúng
              </p>
            )}
            <p>Số điện thoại:</p>
            <input
              {...register("phoneNumber", {
                required: true,
                pattern:
                  /^(?:0\.(?:0[0-9]|[0-9]\d?)|[0-9]\d*(?:\.\d{1,2})?)(?:e[+-]?\d+)?$/,
              })}
              placeholder="Nhập vào đây"
              className="regis-input"
              name="phoneNumber"
              value={phoneNumber}
              onChange={onChange}
            />
            {errors.phoneNumber?.type === "required" && (
              <p style={{ color: "red", fontSize: "16px" }}>
                Không được để trống thông tin này
              </p>
            )}
            {errors.phoneNumber?.type === "pattern" && (
              <p style={{ color: "red", fontSize: "16px" }}>
                Định dạng số điện thoại không đúng
              </p>
            )}
            <p>Khóa học:</p>
            <input
              style={{ backgroundColor: "gray" }}
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

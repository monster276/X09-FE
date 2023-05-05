import { React, useContext, useEffect, useState } from "react";
import Axios from "axios";
import "./Search.css";
import swal from "sweetalert";
import { ListContext } from "../ListClass/ListClass";
import { SreachDeBounce } from "../../hooks";

import {
  Space,
  Button,
  Input,
  AutoComplete,
  Modal,
  Form,
  Checkbox,
  Select,
  DatePicker,
  Row,
  Col,
  InputNumber,
  Table,
} from "antd";
const { Item } = Form;
const { Search } = Input;
const { Option } = Select;

const SearchClass = () => {
  const [form] = Form.useForm();
  const [classCodeArr, setClassCodeArr] = useState(["", "", ""]);
  const [courses, setCourses] = useState([]);
  const [locations, setLocations] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [enrollCourses, setEnrollCourses] = useState([]);
  const [courseId, setCourseId] = useState("");
  const [locationId, setLocationId] = useState("");

  const [createModalOpen, setcreateModalOpen] = useState(false);
  const {
    setloading,
    setData,
    postData,
    setPostData,
    getData,
    options,
    searchValue,
    setOptions,
    setSearchValue,
    baseUrlClass,
    Layout,
  } = useContext(ListContext);

  const debounced = SreachDeBounce(searchValue, 700);
  useEffect(() => {
    getCourse();
    getLocation();
    getEnrollCourse();
    getTeachers();
    // fetchTeacher();
  }, [courseId, locationId]);
  useEffect(() => {
    getSearchData();
  }, [debounced]);

  const mockVal = (str, repeat = 1) => ({
    value: str.repeat(repeat),
  });
  const getPanelValue = (searchText) =>
    !searchText ? [] : [mockVal(searchText)];
  const onSelect = (data) => {
    console.log("onSelect", data);
  };

  const getSearchData = async () => {
    const { data } = await Axios.get(
      `https://x09-be.onrender.com/api/classrooms?keyword=${searchValue}`
    );
    setloading(false);

    setData(
      data.classrooms.map((row, index) => ({
        stt: index + 1,
        _id: row._id,
        id: row.id,
        name: row.name,
        user: row.user,
        location: row.location,
        course: row.course,
        schedule: row.schedule,
        numberOfLessons: row.numberOfLessons,
        classTime: row.classTime,
      }))
    );
  };

  const handleCreateCancel = () => {
    setcreateModalOpen(!createModalOpen);
  };
  const handeChange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
    console.log(postData);
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
  const getCourse = async () => {
    const { data } = await Axios.get("https://x09-be.onrender.com/api/courses");
    setloading(false);
    setCourses(
      data.courses.map((row) => ({
        _id: row._id,
        id: row.id,
        name: row.name,
      }))
    );
  };

  const getLocation = async () => {
    const { data } = await Axios.get(
      "https://x09-be.onrender.com/api/locations"
    );
    setloading(false);
    setLocations(
      data.locations.map((row) => ({
        _id: row._id,
        id: row.id,
        name: row.name,
      }))
    );
  };

  const getEnrollCourse = async () => {
    const { data } = await Axios.get(
      `https://x09-be.onrender.com/api/enrollCourse?course=${courseId}&location=${locationId}`
    );

    setloading(false);
    setEnrollCourses(
      data.enrollCourses.map((row) => ({
        _id: row._id,
        fullName: row.fullName,
        email: row.email,
        phoneNumber: row.phoneNumber,
        location: row.location,
        course: row.course,
      }))
    );
  };

  const getTeachers = async () => {
    const config = {
      headers: {
        token: `Bearer ${JSON.parse(localStorage.getItem("accesstoken"))}`,
      },
    };

    const { data } = await Axios.get(
      `https://x09-be.onrender.com/api/user`,
      config
    );

    setTeachers(
      data.users.map((row) => ({
        _id: row._id,
        fullName: row.fullName,
        username: row.username,
      }))
    );
  };

  const onFinish = async (value) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { newData } = await Axios.post(
      "https://x09-be.onrender.com/api/classrooms",
      postData,
      config,
      handleCreateCancel()
    );
    setTimeout(() => {
      swal({
        title: "Tuyệt Vời",
        text: "Bạn Đã Thêm Lớp Thành Công",
        icon: "success",
        button: "Thoát",
      });
    }, 2000);
    getData(newData);
    setTimeout(() => {
      form.resetFields();
    }, 500);
    form.validateFields();
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
    <div>
      <div className="SpaceandButton">
        <Space direction="vertical">
          <AutoComplete
            style={{
              height: 10,
              width: 460,
              background: "none",
            }}
            onSubmit={(text) => setOptions(getPanelValue(text))}
            options={options}
            onSelect={onSelect}
            type="primary"
          >
            <Search
              className="searchClass"
              size="large"
              placeholder="nhập tìm kiếm"
              enterButton="Tìm Kiếm"
              onChange={(e) => setSearchValue(e.target.value)}
              value={debounced}
            />
          </AutoComplete>
        </Space>
        <Space>
          <Button
            type="primary"
            onClick={handleCreateCancel}
            className="ButtonTM"
          >
            TẠO MỚI LỚP HỌC
          </Button>
        </Space>
        <Modal
          visible={createModalOpen}
          title="TẠO MỚI LỚP HỌC"
          destroyOnClose={true}
          onCancel={handleCreateCancel}
          centered
          cancelButtonProps={{ style: { display: "none" } }}
          okButtonProps={{ style: { display: "none" } }}
          width={800}
        >
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <Row gutter={32}>
              <Col span={8}>
                <Form.Item
                  label="Khóa học"
                  name="course"
                  rules={[
                    { required: true, message: "Vui lòng chọn khóa học" },
                  ]}
                >
                  <Select
                    placeholder="Khóa học"
                    onChange={(value) => {
                      handeChange({
                        target: { value: value, name: "course" },
                      });
                      console.log(value);
                      setCourseId(value);
                    }}
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
                <Form.Item
                  label="Cơ sở"
                  name="location"
                  rules={[
                    { required: true, message: "Vui lòng chọn cơ sở học" },
                  ]}
                >
                  <Select
                    placeholder="Cơ sở"
                    onChange={(value) => {
                      handeChange({
                        target: { value: value, name: "location" },
                      });
                      setLocationId(value);
                    }}
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
                <Form.Item
                  label="Mã lớp học"
                  name="id"
                  rules={[
                    { required: true, message: "Vui lòng nhập mã lớp học" },
                  ]}
                >
                  <Input
                    name="id"
                    placeholder="Mã lớp học"
                    onChange={handeChange}
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Tên lớp học"
                  name="name"
                  rules={[
                    { required: true, message: "Vui lòng nhập tên lớp học" },
                  ]}
                >
                  <Input
                    name="name"
                    placeholder="Tên lớp học"
                    onChange={handeChange}
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Số bài học" name="numberOfLessons">
                  <InputNumber
                    min={1}
                    placeholder="Số buổi học"
                    style={{ width: "100%" }}
                    onChange={(postData) =>
                      handeChange({
                        target: { value: postData, name: "numberOfLessons" },
                      })
                    }
                  ></InputNumber>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Thời gian học" name="classTime">
                  <InputNumber
                    min={1}
                    placeholder="Thời lượng trên lớp"
                    style={{ width: "100%" }}
                    onChange={(postData) =>
                      handeChange({
                        target: { value: postData, name: "classTime" },
                      })
                    }
                  ></InputNumber>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Ngày bắt đầu" name="startTime">
                  <DatePicker
                    format="DD-MM-YYYY"
                    placeholder="Ngày bắt đầu"
                    style={{ width: "100%" }}
                    onChange={(postData) =>
                      handeChange({
                        target: { value: postData, name: "startTime" },
                      })
                    }
                  ></DatePicker>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Ngày kết thúc dự kiến" name="endTime">
                  <DatePicker
                    format="DD-MM-YYYY"
                    placeholder="Ngày kết thúc dự kiến"
                    style={{ width: "100%" }}
                    onChange={(postData) =>
                      handeChange({
                        target: { value: postData, name: "endTime" },
                      })
                    }
                  ></DatePicker>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Giảng viên" name="user">
                  <Select
                    placeholder="Giảng viên"
                    onChange={(postData) =>
                      handeChange({
                        target: { value: postData, name: "user" },
                      })
                    }
                  >
                    {teachers?.map((item, index) => (
                      <Option id={index} key={item._id}>
                        {item.fullName}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  name="schedule"
                  onChange={(value) =>
                    handeChange({
                      target: { value: [value.target.value], name: "schedule" },
                    })
                  }
                >
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

              {/* <Col span={24}>
                {enrollCourses.length > 0 && (
                  <Table columns={enrollColumns} dataSource={enrollCourses} />
                )}
              </Col> */}
              <Col span={24}>
                <Table
                  rowSelection={{
                    onChange: (selectedRowKeys, selectedRows) => {
                      console.log(
                        `selectedRowKeys: ${selectedRowKeys}`,
                        "selectedRows: ",
                        selectedRows
                      );
                      handeChange({
                        target: {
                          value: selectedRowKeys,
                          name: "students",
                        },
                      });
                    },
                  }}
                  columns={enrollColumns}
                  dataSource={enrollCourses.map((e) => ({ ...e, key: e._id }))}
                />
              </Col>
              <Col span={24} style={{ textAlign: "right" }}>
                <Button
                  style={{ background: "red", color: "white" }}
                  onClick={handleCreateCancel}
                >
                  Quay lại
                </Button>
                <Button
                  style={{ background: "blue", color: "white", marginLeft: 20 }}
                  type="primary"
                  htmlType="submit"
                >
                  Lưu lại
                </Button>
              </Col>
            </Row>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default SearchClass;

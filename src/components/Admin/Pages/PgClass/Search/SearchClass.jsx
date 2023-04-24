import { React, useContext, useEffect, useState } from "react";
import Axios from "axios";
import "./Search.css";
import { ListContext } from "../ListClass/ListClass";
import { Space, Button, Input, AutoComplete, Modal, Form } from "antd";
const { Item } = Form;
const { Search } = Input;
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const onFinish = (values) => {
  console.log("Success:", values);
};
const SearchClass = () => {
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

  useEffect(() => {
    getSearchData();
  }, [searchValue]);

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
      data.classrooms.map((row) => ({
        _id: row._id,
        id: row.id,
        nameclass: row.name,
        fullname: row.user._id,
        fullname: row.user.fullName,
        location: row.location._id,
        location: row.location.name,
        course: row.course._id,
        course: row.course.name,
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

  const PostlistData = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { newData } = await Axios.post(
      baseUrlClass,
      postData,
      config,
      handleCreateCancel()
    );
    getData(newData);
  };

  return (
    <div>
      <div className="SpaceandButton">
        <Space direction="vertical">
          <AutoComplete
            style={{
              height: 10,
              width: 460,
            }}
            onSearch={(text) => setOptions(getPanelValue(text))}
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
              value={searchValue}
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
          footer={[
            <Button style={{background: "red", color: "white"}} onClick={handleCreateCancel}>Thoát</Button>,
            <Button style={{background: "blue", color: "white"}} type="primary" onClick={PostlistData} htmlType="Lưu" >
              Lưu
            </Button>,
          ]}
        >
          <Form
            {...Layout}
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Item
              label="Mã Lớp Học "
              rules={[
                {
                  required: true,
                  message: "Vui Lòng Nhập Mã Lớp Học ",
                },
                {
                  whitespace: true,
                  message: "Không có khoảng cách",
                },
                {
                  min: 3,
                  message: "Ít nhất là 3 ký tự",
                },
              ]}
              name="id"
            >
              <Input onChange={handeChange} placeholder="nhập Mã Lớp Học " />
            </Item>

            <Item
              label=" Tên Lớp Học "
              rules={[
                {
                  required: true,
                  message: "Vui Lòng Nhập Têm Lớp Học ",
                },
                {
                  whitespace: true,
                  message: "Không có khoảng cách",
                },
                {
                  min: 3,
                  message: "Ít nhất là 3 ký tự",
                },
              ]}
              name="name"
            >
              <Input onChange={handeChange} placeholder="nhập Tên Lớp Học " />
            </Item>

            <Item
              label="Tên Giảng Viên"
              name="user"
              rules={[
                {
                  required: true,
                  message: "Vui Lòng Nhập Tên Giảng viên ",
                },
                {
                  whitespace: true,
                  message: "Không có khoảng cách",
                },
                {
                  min: 3,
                  message: "Ít nhất là 3 ký tự",
                },
              ]}
            >
              <Input
                onChange={handeChange}
                placeholder="nhập Tên Giảng Viên "
              />
            </Item>

            <Item
              label="Địa Chỉ Cơ Sở"
              name="location"
              rules={[
                {
                  required: true,
                  message: "Vui Lòng Nhập Địa Chỉ Cơ Sở ",
                },
                {
                  whitespace: true,
                  message: "Không có khoảng cách",
                },
                {
                  min: 3,
                  message: "Ít nhất là 3 ký tự",
                },
              ]}
            >
              <Input.TextArea
                rows={4}
                placeholder="nhập địa Chỉ Cơ Sở "
                onChange={handeChange}
              />
            </Item>
            <Item
              label=" Khóa Học"
              name="course"
              rules={[
                {
                  required: true,
                  message: "Vui Lòng Nhập Khóa Học ",
                },
                {
                  whitespace: true,
                  message: "Không có khoảng cách",
                },
                {
                  min: 3,
                  message: "Ít nhất là 3 ký tự",
                },
              ]}
            >
              <Input onChange={handeChange} placeholder="nhập Khóa Học " />
            </Item>

            <Item
              label=" Khóa Học bắt đầu"
              name="startTime"
              rules={[
                {
                  required: true,
                  message: "Vui Lòng Nhập Khóa Học bắt đầu",
                },
                {
                  whitespace: true,
                  message: "Không có khoảng cách",
                },
                {
                  min: 3,
                  message: "Ít nhất là 3 ký tự",
                },
              ]}
            >
              <Input onChange={handeChange} placeholder="nhập Khóa Học bắt đầu " />
            </Item>

            <Item
              label="Khóa Học Kêt thúc"
              name="endTime"
              rules={[
                {
                  required: true,
                  message: "Vui Lòng Nhập  Khóa Học Kêt thúc",
                },
                {
                  whitespace: true,
                  message: "Không có khoảng cách",
                },
                {
                  min: 3,
                  message: "Ít nhất là 3 ký tự",
                },
              ]}
            >
              <Input onChange={handeChange} placeholder="nhập Khóa Học Kêt thúc" />
            </Item>

            <Item
              label="Số Học Sinh"
              name="numberOfLessons"
              rules={[
                {
                  required: true,
                  message: "Vui Lòng Nhập Số Học Sinh",
                },
                {
                  whitespace: true,
                  message: "Không có khoảng cách",
                },
                {
                  min: 3,
                  message: "Ít nhất là 3 ký tự",
                },
              ]}
            >
              <Input onChange={handeChange} placeholder="nhập  Số Học Sinh" />
            </Item>

            <Item
              label="Giờ Học"
              name="classTime"
              rules={[
                {
                  required: true,
                  message: "Vui Lòng Nhập Giờ Học ",
                },
                {
                  whitespace: true,
                  message: "Không có khoảng cách",
                },
                {
                  min: 3,
                  message: "Ít nhất là 3 ký tự",
                },
              ]}
            >
              <Input onChange={handeChange} placeholder="nhập Giờ Học " />
            </Item>
            <Item
              label="Lịch Học"
              name="schedule"
              rules={[
                {
                  required: true,
                  message: "Vui Lòng Nhập Lịch Học ",
                },
                {
                  whitespace: true,
                  message: "Không có khoảng cách",
                },
                {
                  min: 3,
                  message: "Ít nhất là 3 ký tự",
                },
              ]}
            >
              <Input onChange={handeChange} placeholder="nhập Lịch Học " />
            </Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default SearchClass;

import { React, useContext, useEffect, useState } from "react";
import Axios from "axios";
import "./Search.css";
import { AudioOutlined } from "@ant-design/icons";
import { ListContext } from "../ListCourse/ListCourse";
import { Space, Button, Input, AutoComplete, Modal, Form } from "antd";
const { Search } = Input;
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const onFinish = (values) => {
  console.log('Success:', values);
};
const SearchCourse = () => {
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
    baseUrl,
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
      `https://x09-be.onrender.com/api/courses?keyword=${searchValue}`
    );
    setloading(false);
    setData(
      data.courses.map((row) => ({
        name: row.name,
        id: row.id,
        description: row.description,
        price: row.price,
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
      baseUrl,
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
          >
            <Search
              className="Search"
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
            Tạo Mới khóa học
          </Button>
        </Space>
        <Modal
          visible={createModalOpen}
          title="Tạo Mới Khóa Học"
          destroyOnClose={true}
          onCancel={handleCreateCancel}
          centered
          footer={[
            <Button onClick={handleCreateCancel}>Thoát</Button>,
            <Button type="primary" onClick={PostlistData} htmlType="Lưu" >
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
            <Form.Item
              name="id"
              label="Mã Khóa Học"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input onChange={handeChange} name="id" />
            </Form.Item>

            <Form.Item label=" Tên Khóa Học ">
              <Input name="name" onChange={handeChange} />
            </Form.Item>

            <Form.Item label="Giá Khóa Học ">
              <Input name="price" onChange={handeChange} />
            </Form.Item>

            <Form.Item label="Nội Dung Khóa Học ">
              <Input.TextArea
                rows={4}
                name="description"
                placeholder="nhập nội dung khóa học "
                onChange={handeChange}
              />
            </Form.Item>

            <Form.Item label="Thời Lượng Khóa Học">
              <Input name="courseTime" onChange={handeChange} />
            </Form.Item>

            <Form.Item label="Thời Lượng Giờ Học ">
              <Input name="classTime" onChange={handeChange} />
            </Form.Item>

            <Form.Item label="Số học sinh ">
              <Input name="maxNumberOfStudents" onChange={handeChange} />
            </Form.Item>

            <Form.Item label="ảnh">
              <Input name="image" onChange={handeChange} />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default SearchCourse;

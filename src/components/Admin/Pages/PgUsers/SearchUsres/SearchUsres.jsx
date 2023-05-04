import { React, useContext, useEffect, useState } from "react";
import Axios from "axios";
import "./SearchUsres.css";
import { ListContext } from "../ListUsres/ListUsres";
import { SreachDeBounce } from "../../hooks";
import { Space, Button, Input, AutoComplete, Modal, Form } from "antd";
import swal from "sweetalert";
const { Item } = Form;
const { Search } = Input;
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const onFinish = (values) => {
  console.log("Success:", values);
};
const SearchUsers = () => {
  const [form] = Form.useForm();
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
    Layout,
  } = useContext(ListContext);

  const debounced = SreachDeBounce(searchValue, 700);

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
    const { data } = await Axios.get(`https://x09-be.onrender.com/api/user?`, {
      params: {
        keyword: `${debounced}`,
      },
      headers: {
        token: `Bearer ${JSON.parse(localStorage.getItem("accesstoken"))}`,
      },
    });
    setloading(false);
    setData(
      data.users.map((row) => ({
        _id: row._id,
        fullName: row.fullName,
        email: row.email,
        username: row.username,
        password: row.password,
        phoneNumber: row.phoneNumber,
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
        token: `Bearer ${JSON.parse(localStorage.getItem("accesstoken"))}`,
      },
    };

    const { newData } = await Axios.post(
      `https://x09-be.onrender.com/api/auth/create`,
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
            // type="primary"
            onClick={handleCreateCancel}
            className="ButtonTM"
            Key="id"
          >
            TẠO MỚI NGƯỜI DÙNG
          </Button>
        </Space>
        <Modal
          visible={createModalOpen}
          title="TẠO MỚI NGƯỜI DÙNG"
          destroyOnClose={true}
          onCancel={handleCreateCancel}
          centered
          footer={[
            <Button style={{background: "red", color: "white"}} onClick={handleCreateCancel}>Thoát</Button>,
            <Button style={{background: "blue", color: "white"}} type="primary" onClick={PostlistData}>
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
              label="Họ và Tên"
              rules={[
                {
                  required: true,
                  message: "Vui Lòng Nhập Họ và Tên ",
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
              name="fullName" 
            >
              <Input   name="fullName" onChange={handeChange} placeholder="Nhập Họ và Tên" />
            </Item>

            <Item
              label=" email "
              name="email"
              rules={[
                {
                  required: true,
                  message: "Vui Lòng Nhập Email ",
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
              <Input name="email" onChange={handeChange} placeholder=" Nhập email" />
            </Item>

            <Item
              label="Tên Đăng Nhập"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Vui Lòng Nhập Tên Đăng Nhập ",
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
              <Input name="username" onChange={handeChange} placeholder="nhập Tên Đăng Nhập" />
            </Item>

            <Item
              label="Mật Khẩu"
              rules={[
                {
                  required: true,
                  message: "Vui Lòng Nhập password",
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
              name="password"
            >
              <Input.Password name="password" onChange={handeChange} placeholder="nhập password" />
            </Item>

            <Item
              label="Số Điện Thoại"
              name="phoneNumber"
              rules={[
                {
                  required: true,
                  message: "Vui Lòng Nhập Số Điện Thoại",
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
              <Input name="phoneNumber" placeholder="Số Điện Thoại" onChange={handeChange} />
            </Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default SearchUsers;

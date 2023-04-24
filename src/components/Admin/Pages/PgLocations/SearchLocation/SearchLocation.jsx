import { React, useContext, useEffect, useState } from "react";
import Axios from "axios";
import "./SearchLocation.css";
import { ListContext } from "../ListLocation/ListLocation";
import { Space, Button, Input, AutoComplete, Modal, Form, Select, message } from "antd";
const { Search } = Input;
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const onFinish = (values) => {
  console.log("Success:", values);
};
const SearchLocation = () => {
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
    baseUrlLocations,
    Layout,
  } = useContext(ListContext);
  // get data
  useEffect(() => {
    getSearchData();
  }, [searchValue]);
    
  // hiện message 
  
  // tìm kiếm

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
      `https://x09-be.onrender.com/api/locations?keyword=${searchValue}`
    );
    setloading(false);
    setData(
      data.locations.map((row) => ({
        name: row.name,
        id: row.id,
        status: row.status,
        address: row.address,
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
      baseUrlLocations,
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
            Key={handleCreateCancel}
          >
            TẠO MỚI CỞ SỞ
          </Button>
        </Space>
            
    
        <Modal
          visible={createModalOpen}
          title="TẠO MỚI CỞ SỞ"
          destroyOnClose={true}
          onCancel={handleCreateCancel}
          centered
          footer={[
            <Button
              style={{ background: "red", color: "white" }}
              onClick={handleCreateCancel}
            >
              Thoát
            </Button>,
            <Button
              style={{ background: "blue", color: "white" }}
              type="primary"
              onClick={PostlistData}
              htmlType="Luu"
            >
              Lưu
            </Button>,
          ]}
        >
          <Form {...Layout}
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
          
          autoComplete="off"
          >
            <Form.Item
              label="Mã Cơ Sở "
              name="username"
              rules={[
                {
                  required: true,
                  message: "Vui Lòng nhập Mã Cơ Sở",
                },
              ]}
            >
              <Input
                name="id"
                onChange={handeChange}
                placeholder="Nhập Mã Cở Sở"
              />
            </Form.Item>

            <Form.Item
              label=" Tên Cở Sở "
              name="tencoso"
              rules={[
                {
                  required: true,
                  message: "Vui Lòng Nhập Tên Cơ Sở",
                },
              ]}
            >
              <Input
                name="name"
                onChange={handeChange}
                placeholder=" Nhập Tên Cở Sở "
              />
            </Form.Item>

            <Form.Item
              label="Trạng Thái Cở cở"
              name="TrạngTháiCởcở"
              rules={[
                {
                  required: true,
                  message: "Trạng Thái Cở Sở",
                },
              ]}
            >
              <Select
                style={{
                  width: 160,
                }}
                onChange={(postData) =>
                  handeChange({ target: { value: postData, name: "status" } })
                }
              >
                <Select.Option value={true}>Hoạt Động</Select.Option>
                <Select.Option value={false}>Ngừng Hoạt Động</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label=" ĐịaChỉCởSở"
              name="ĐịaChỉCởSở"
              rules={[
                {
                  required: true,
                  message: "Vui Lòng Nhập Địa Chỉ Cở Sở",
                },
              ]}
            >
              <Input.TextArea
                rows={4}
                name="address"
                placeholder="nhập Địa Chỉ Cở Sở "
                onChange={handeChange}
              />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default SearchLocation;

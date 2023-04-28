import { React, useContext, useEffect, useState } from "react";
import Axios from "axios";
import "./SearchLocation.css";
import { ListContext } from "../ListLocation/ListLocation";
import { SreachDeBounce } from "../../hooks"
import { Space, Button, Input, AutoComplete, Modal, Form, Select, message } from "antd";
import swal from 'sweetalert';
const { Search } = Input;


const SearchLocation = () => {
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
    baseUrlLocations,
    Layout,
  } = useContext(ListContext);


  const debounced = SreachDeBounce(searchValue , 700)
  // get data
  useEffect(() => {
    getSearchData();
  }, [debounced]);
    
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
      `https://x09-be.onrender.com/api/locations?keyword=${debounced}`
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

  const onFinish = async () => {
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
    setTimeout(()=>{
      swal({
        title: "Tuyệt Vời",
        text: "Bạn Đã Thêm Cở Sở Thành Công",
        icon: "success",
        button: "Thoát",
      })
    }, 2000)
    getData(newData);
    setTimeout(() => {
      form.resetFields()
    }, 500)
    form.validateFields();
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
          cancelButtonProps={{ style: { display: 'none' } }}
          okButtonProps={{ style: { display: 'none' } }}
        >
          <Form {...Layout}
           form={form}
           onFinish={onFinish}
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
            <div style={{marginLeft: 310, marginTop: 50 }} >
              <Button style={{background: "red", color: "white" }} onClick={handleCreateCancel}>Thoát</Button>,
              <Button  style={{background: "blue", color: "white", marginLeft: 15}} type="submit" value="Submit" htmlType="submit" >
                Lưu lại
              </Button>,
            </div>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default SearchLocation;

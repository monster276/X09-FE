
import { React, useContext, useEffect, useState } from "react";
import Axios from "axios";
import "./SearchCourse.css";
import { ListContext } from "../ListCourse/ListCourse";
import { SreachDeBounce } from "../../hooks"
import { Space, Button, Input, AutoComplete, Modal, Form, Spin  } from "antd";
import swal from 'sweetalert';
const { Search } = Input;

const SearchCourse = () => {
  const [form] = Form.useForm();
  const [createModalOpen, setcreateModalOpen] = useState(false);
 
  const {
    loading,
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

  const debounced = SreachDeBounce(searchValue , 700)

 
  // const onFinish = (values) => {
  //   console.log('Success:', values);
  // };
  // const onFinishFailed = (errorInfo) => {
  //   console.log('Failed:', errorInfo);
  // };
  
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
      `https://x09-be.onrender.com/api/courses?keyword=${debounced}`
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
  const onFinish = async (value) => {
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
      setTimeout(()=>{
        swal({
          title: "Tuyệt Vời",
          text: "Bạn Đã Thêm khóa Học Thành Công",
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
            // type="primary"
            onClick={handleCreateCancel}
            className="ButtonTM"
          >
            TẠO MỚI KHÓA HỌC
          </Button>
        </Space>
        <Modal
          visible={createModalOpen}
          title="TẠO MỚI KHÓA HỌC"
          destroyOnClose={true}
          onCancel={handleCreateCancel}
          cancelButtonProps={{ style: { display: 'none' } }}
          okButtonProps={{ style: { display: 'none' } }}
          
        >
          <Spin spinning={loading}>
          <Form
            form={form}
            onFinish={onFinish}
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
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              
              name="id"
              label="Mã Khóa Học"
              rules={[
                {
                  required: true,
                  message: "Vui Lòng Nhập Mã Khóa Học ",
                },
                {
                  whitespace: true,
                  message: "Không có khoảng cách",
                },
                {
                  min: 3,
                  message: "Ít nhất là 3 ký tự",
                }
              ]}
            >
              <Input onChange={handeChange} name="id" />
            </Form.Item>

            <Form.Item
              label=" Tên Khóa Học "
              name="ten"
              rules={[
                {
                  required: true,
                  message: "Vui Lòng Nhập Tên Khóa Học ",
                },
              ]}
            >
              <Input name="name" onChange={handeChange} />
            </Form.Item>

            <Form.Item
              label="Giá Khóa Học "
              name="tien"
              rules={[
                {
                  required: true,
                  message: "Vui Lòng Nhập Giá Khóa Học",
                },
                
              ]}
            >
              <Input name="price" onChange={handeChange} />
            </Form.Item>

            <Form.Item
              label="Nội Dung Khóa Học "
              rules={[
                {
                  required: true,
                  message: "Vui Lòng Nhập Giá Khóa Học",
                },
              ]}
              name="noi dung"
            >
              <Input.TextArea
                name="description"
                rows={4}
                placeholder="nhập nội dung khóa học "
                onChange={handeChange}
              />
            </Form.Item>

            <Form.Item
              label="Thời Lượng Khóa Học"
              rules={[
                {
                  required: true,
                  message: "Vui Lòng Nhập Thời Lượng Khóa Học",
                },
              ]}
              name="thoi gian lowp"
            >
              <Input  name="courseTime" onChange={handeChange} />
            </Form.Item>

            <Form.Item
              label="Thời Lượng Giờ Học "
              rules={[
                {
                  required: true,
                  message: "Vui Lòng Nhập Thời Lượng Giờ Học",
                },
              ]}
              name="thoi gian"
            >
              <Input name="classTime" onChange={handeChange} />
            </Form.Item>

            <Form.Item
              label="Số học sinh"
              rules={[
                {
                  required: true,
                  message: "Vui Lòng Nhập Số học sinh",
                },
              ]}
              name="so hoc sinh "
            >
              <Input name="maxNumberOfStudents" onChange={handeChange} />
            </Form.Item>

            {/* <Form.Item
              label="ảnh"
              rules={[
                {
                  required: true,
                  message: "Vui Lòng Nhập ảnh",
                },
              ]}
              name="anh"
            >
              <Input  name="image" onChange={handeChange} />
            </Form.Item> */}
            <div style={{marginLeft: 310, marginTop: 50 }} >
              <Button style={{background: "red", color: "white" }} onClick={handleCreateCancel}>Thoát</Button>,
              <Button  style={{background: "blue", color: "white", marginLeft: 15}} type="submit" value="Submit" htmlType="submit" >
                Lưu lại
              </Button>,
            </div>
          </Form>
          </Spin>
        </Modal>
      </div>
    </div>
  );
};

export default SearchCourse;

import React, { useState, useEffect, useRef } from "react";
import Axios from "axios";
import {
  Table,
  Space,
  Button,
  Input,
  Drawer,
  Form,
  Row,
  Col,
  Upload,
  AutoComplete,
} from "antd";
import { Editor } from "@tinymce/tinymce-react";
import { UploadOutlined } from "@ant-design/icons";
import "./DSKH.css";
const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});

function DSKH() {
  const [searchValue, setSearchValue] = useState('');
  const [options, setOptions] = useState([]);
  const [state, setstate] = useState({});
  const [loading, setloading] = useState(true);
  const [open, setOpen] = useState(false);


  // seach
  const getPanelValue = (searchText) =>
    !searchText
      ? []
      : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
  const onSelect = (data) => {
    console.log("onSelect", data);
  };
  // show Drawer 
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const editorRef = useRef();

  // get data Danh Sach 
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    getSearchData();
  }, [searchValue]);


  const getData = async () => {
    const { data } = await Axios.get("https://x09-be.onrender.com/api/courses");
    setloading(false);
    setstate(
      data.courses.map((row) => ({
        name: row.name,
        message: row.description,
        price: row.price,
        id: row.id,
      }))
    );
  };
  const getSearchData = async () => {
    const { data } = await Axios.get(`https://x09-be.onrender.com/api/courses?keyword=${searchValue}`);
    setloading(false);
    setstate(
      data.courses.map((row) => ({
        name: row.name,
        message: row.description,
        price: row.price,
        id: row.id,
      }))
    );
  };


  const columns = [
    {
      title: "Mã Khóa Học",
      dataIndex: "id",
      key: "id",
      width: 150,
    },
    {
      title: "Tên Khóa Học",
      dataIndex: "name",
      key: "name",
      width: 200,
    },
    {
      title: "Mô Tả Khóa Học",
      dataIndex: "message",
      key: "message",
      width: 600,
    },
    {
      title: "Giá Thành ",
      dataIndex: "price",
      key: "price",
      width: 150,
    },
    {
      title: "Chức Năng",
      idth: 100,
      render: (_, record) => (
        <Space size="middle">
          <Button> Chi Tiết </Button>
          <Button> Chỉnh sửa </Button>
          <Button> Delete </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div className="SpaceandButton">
        <Space direction="vertical">
          <AutoComplete
            style={{
              width: 450,
            }}
            value={searchValue}
            options={options}
            onSelect={onSelect}
            onSearch={(text) => setOptions(getPanelValue(text))}
          
          >
            <Input.Search size="large" placeholder="input here" enterButton   onChange={(e) => setSearchValue(e.target.value)}   />
          </AutoComplete>
        </Space>
        <Space>
          <Button type="primary" onClick={showDrawer} className="ButtonTM">
            Tạo Mới Cở Sở
          </Button>
        </Space>
      </div>

      {loading ? (
        "Loading"
      ) : (
        <Table
          className="TableCS"
          columns={columns}
          dataSource={state}
          rowKey="id"
        />
      )}
      <Drawer
        width={750}
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="MKhoaHoc"
                label="Mã Khóa Học "
                rules={[
                  {
                    required: true,
                    message: "Nhap Ma Khoa Hoc",
                  },
                ]}
              >
                <Input placeholder="Nhập Mã Khóa Học " />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="TKhoaHoc"
                label="Tên Khóa Học "
                rules={[
                  {
                    required: true,
                    message: "Nhap Ten Khoa Hoc",
                  },
                ]}
              >
                <Input placeholder="Nhập Tên Khóa Học" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="GThanh"
                label="Giá Thành "
                rules={[
                  {
                    required: true,
                    message: "nhap gia thanh",
                  },
                ]}
              >
                <Input placeholder="Nhập Giá Thành" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="SSlop"
                label="Số Học Viên Trên Lớp "
                rules={[
                  {
                    required: true,
                    message: "Please enter user name",
                  },
                ]}
              >
                <Input placeholder="Nhập Số Học Viên" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="SB"
                label="Số Buổi"
                rules={[
                  {
                    required: true,
                    message: "Nhap So Buoi",
                  },
                ]}
              >
                <Input placeholder="Nhập Số Buổi" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="TLTrenLop"
                label="Thời Lượng Trên Lớp "
                rules={[
                  {
                    required: true,
                    message: "Nhap Thoi Luong",
                  },
                ]}
              >
                <Input placeholder="Nhập Thời Lương" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="Anh"
                label="Ảnh"
                rules={[
                  {
                    required: true,
                    message: "anh",
                  },
                ]}
              >
                <Space>
                  <Upload>
                    <Button>
                      <UploadOutlined /> Click to Upload
                    </Button>
                  </Upload>
                </Space>
              </Form.Item>
            </Col>
          </Row>
          <Editor>
            onInit={(evt, editor) => (editorRef.current = editor)}
          </Editor>
          <Space className="Space">
            <Button onClick={onClose} className="BTSpace">
              Thoát{" "}
            </Button>
            <Button onClick={onClose} className="BTSpace " type="primary">
              Lưu lại
            </Button>
          </Space>
        </Form>
      </Drawer>
    </div>
  );
}

export default DSKH;

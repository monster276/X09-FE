import React, { useState, useEffect, useRef  } from "react";
import Axios from "axios";
import "./DSKH.css";
import { Table, Space, Button,Input, Drawer, Form, Row, Col, Upload, } from "antd";
import { Editor } from "@tinymce/tinymce-react";
import { UploadOutlined } from "@ant-design/icons";


function DSKH() {
  const { Search } = Input;

  const [state, setstate] = useState({});
  const [loading, setloading] = useState(true);
  const [open, setOpen] = useState(false);
  const [keyword, setKeyword] = useState("");

  const onSearch = (value) => console.log(value);
  
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const editorRef = useRef();


  useEffect(() => {
    getData();
  }, []);
  
 
  const getData = async () => {
    const { data } = await Axios.get(
      "https://x09-be.onrender.com/api/courses"
    );
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

    const handlSearch = async (e) =>{
      e.preventDefault();
      const { seachdata } = await Axios.get(
        `https://x09-be.onrender.com/api/courses/${keyword}`
      )
      setstate(       
        seachdata.courses.map((row) => ({
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
          <Search
            onClick={handlSearch}
            className="Search"
            placeholder="Nhập Tìm Kiêm"
            enterButton="Tìm Kiêm"
            size="large"
            onChange={(e) => setKeyword(e.target.value)}
            value={keyword}
          />
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

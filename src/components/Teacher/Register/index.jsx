import React from "react";
import { Button, Form, Select, Space, Table, Row, Col, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { path } from "../Router/RouterConfig";
const { Option } = Select;

const data = [
  {
    stt: "1",
    course: "X-Cater",
    registerName: "Nguyễn Trung Hiếu",
    phoneNumber: "0847363125",
    address: "112 trần phú ,hà đông, hà nội",
    email: "jusshieu97@gmail.com",
  },
  {
    stt: "2",
    course: "X-Cater",
    registerName: "Tạ Tiến Thành",
    phoneNumber: "0966289654",
    address: "112 trần phú ,hà đông, hà nội",
    email: "kevindinh@gmail.com",
  },
  {
    stt: "3",
    course: "X-Cater",
    registerName: "Trần Quỳnh Anh",
    phoneNumber: "0969259941",
    address: "112 trần phú ,hà đông, hà nội",
    email: "quynhanhtran@gmail.com",
  },
  {
    stt: "4",
    course: "X-Cater",
    registerName: "Dương Thùy Dương",
    phoneNumber: "0942952463",
    address: "112 trần phú ,hà đông, hà nội",
    email: "duongthuyduong811@gmail.com",
  },
];
export function Register() {
  const navigate = useNavigate();
  const [formSearch] = Form.useForm();
  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
    },
    {
      title: "Tên khóa Học",
      dataIndex: "course",
      key: "course",
    },
    {
      title: "Tên người đăng ký",
      dataIndex: "registerName",
      key: "registerName",
    },
    {
      title: "SĐT",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Cơ sở",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary" danger>
            Xóa
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <>
      <Form form={formSearch} layout="vertical">
        <Row gutter={32}>
          <Col span={6}>
            <Form.Item label="Khóa học" >
              <Input placeholder="Khóa học"></Input>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="Người đăng ký" >
              <Input placeholder="Người đăng ký"></Input>
            </Form.Item>
          </Col>
        </Row>
        <Row style={{ marginBottom: "10px" }}>
          <Col span={12}>
            <Button type="primary" htmlType="submit">
              Tìm kiếm
            </Button>
          </Col>
        </Row>
      </Form>

      <Table columns={columns} dataSource={data} bordered />
    </>
  );
}

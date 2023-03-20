import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space,
  Table,
} from "antd";
import './DSGV'
import { useState } from "react";
const { Option } = Select;

const { Search } = Input;
const onSearch = (value) => console.log(value);

const columns = [
  {
    title: "STT",
    dataIndex: "STT",
    key: "STT",
    width: 60,
  },
  {
    title: "Macoso",
    dataIndex: "Macoso",
    key: "Macoso",
    width: 110,
  },
  {
    title: "name",
    dataIndex: "name",
    key: "name",
    width: 360,
  },
  {
    title: "Address",
    dataIndex: "Address",
    key: "Address",
    width: 400,
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <Button> Chi Tiết </Button>
        <Button> Chỉnh sửa </Button>
        <Button> Delete </Button>
      </Space>
    ),
  },
];
const data = [
  {
    key: "0",
    STT: "1",
    Macoso: "MCS1",
    name: "Cơ Sơ 1",
    Address: "New York No. 1 Lake Park",
  },
  {
    key: "1",
    STT: "2",
    Macoso: "MCS2",
    name: "Cơ Sơ 2",
    Address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    STT: "3",
    Macoso: "MCS3",
    name: "Cơ Sơ 3",
    Address: "New York No. 1 Lake Park",
  },
  {
    key: "3",
    STT: "4",
    Macoso: "MCS4",
    name: "Cơ Sơ 4 ",
    Address: "New York No. 1 Lake Park",
  },
  {
    key: "4",
    STT: "5",
    Macoso: "MCS5",
    name: "Cơ Sơ 5",
    Address: "New York No. 1 Lake Park",
  },
  {
    key: "5",
    STT: "6",
    Macoso: "MCS6",
    name: "Cơ Sơ 6",
    Address: "New York No. 1 Lake Park",
  },
  {
    key: "6",
    STT: "7",
    Macoso: "MCS7",
    name: "Cơ Sơ 7",
    Address: "New York No. 1 Lake Park",
  },
  {
    key: "7",
    STT: "8",
    Macoso: "MCS8",
    name: "Cơ Sơ 8",
    Address: "New York No. 1 Lake Park",
  },
  {
    key: "8",
    STT: "9",
    Macoso: "MCS9",
    name: "Cơ Sơ 9",
    Address: "New York No. 1 Lake Park",
  },
  {
    key: "9",
    STT: "10",
    Macoso: "MCS10",
    name: "Cơ Sơ 10",
    Address: "New York No. 1 Lake Park",
  },
  {
    key: "10",
    STT: "11",
    Macoso: "MCS11",
    name: "Cơ Sơ 11",
    Address: "New York No. 1 Lake Park",
  },
  {
    key: "11",
    STT: "12",
    Macoso: "MCS12",
    name: "Cơ Sơ 12",
    Address: "New York No. 1 Lake Park",
  },
];
const DSGV = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="SpaceandButton">
        <Space direction="vertical">
          <Search
            className="Search"
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />
        </Space>
      <Space>
        <Button type="primary" onClick={showDrawer} className="ButtonTM" icon={<PlusOutlined />}>
          Tạo Mới Khóa Học
        </Button>
      </Space>
      </div>
      <Table className="TableCS" columns={columns} dataSource={data} />;
      <Drawer
        title="Create a new account"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  {
                    required: true,
                    message: "Please enter user name",
                  },
                ]}
              >
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="url"
                label="Url"
                rules={[
                  {
                    required: true,
                    message: "Please enter url",
                  },
                ]}
              >
                <Input
                  style={{
                    width: "100%",
                  }}
                  addonBefore="http://"
                  addonAfter=".com"
                  placeholder="Please enter url"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="owner"
                label="Owner"
                rules={[
                  {
                    required: true,
                    message: "Please select an owner",
                  },
                ]}
              >
                <Select placeholder="Please select an owner">
                  <Option value="xiao">Xiaoxiao Fu</Option>
                  <Option value="mao">Maomao Zhou</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="type"
                label="Type"
                rules={[
                  {
                    required: true,
                    message: "Please choose the type",
                  },
                ]}
              >
                <Select placeholder="Please choose the type">
                  <Option value="private">Private</Option>
                  <Option value="public">Public</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="approver"
                label="Approver"
                rules={[
                  {
                    required: true,
                    message: "Please choose the approver",
                  },
                ]}
              >
                <Select placeholder="Please choose the approver">
                  <Option value="jack">Jack Ma</Option>
                  <Option value="tom">Tom Liu</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="dateTime"
                label="DateTime"
                rules={[
                  {
                    required: true,
                    message: "Please choose the dateTime",
                  },
                ]}
              >
                <DatePicker.RangePicker
                  style={{
                    width: "100%",
                  }}
                  getPopupContainer={(trigger) => trigger.parentElement}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: "please enter url description",
                  },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="please enter url description"
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};
export default DSGV;

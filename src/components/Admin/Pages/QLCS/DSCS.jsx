import React from "react";
import { useState } from "react";
import DataCS from "../../../../data/DTCoSo.json";
import "./DSCS.css"
import {
  Space,
  Table,
  Button,
  Input,
  Drawer,
  Form,
  Row,
  Switch,
  Col,
} from "antd";
const { Column } = Table;

const { Search } = Input;
const onSearch = (value) => console.log(value);


const DSCS = () => {
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

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
            placeholder="Nhập Tìm Kiêm"
            allowClear
            enterButton="Tìm Kiêm"
            size="large"
            onSearch={onSearch}
          />
        </Space>
        <Space>
          <Button type="primary" onClick={showDrawer} className="ButtonTM">
            Tạo Mới Cở Sở
          </Button>
        </Space>
      </div>
      <Table className="TableCS" >
        <Column title="STT" dataIndex="STT" key="STT"  />
        <Column title="Mã Cở Sở " dataIndex="MCoSo" key="MCoSo" width={200} />
        <Column title="Tên Cở Sở" dataIndex="TCoSo" key="TCoSo"  width={400} />
        <Column title="Địa Chỉ Cở Sở" dataIndex="DChi" key="DChi"  width={400} />
        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <Space size="middle">
              <Button> Chi Tiết </Button>
              <Button> Chỉnh Sửa </Button>
              <Button> Xóa </Button>
            </Space>
          )}
        />
      </Table>
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
                name="Macoso"
                label="Mã Cở Sở"
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
                name="name"
                label="Tên Cở Sở"
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
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="Address"
                label="Địa chỉ  Cở Sở"
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
                name="status"
                label="Trạng Thái Cở Sở"
                rules={[
                  {
                    required: true,
                    message: "Please enter user name",
                  },
                ]}
              >
                <Switch defaultChecked onChange={onChange} />
              </Form.Item>
            </Col>
          </Row>
          <Space className="Space">
            <Button onClick={onClose} className="BTSpace " >Thoát </Button>
            <Button onClick={onClose} className="BTSpace " type="primary">
              Lưu lại
            </Button>
          </Space>
        </Form>
      </Drawer>
    </>
  );
};
export default DSCS;

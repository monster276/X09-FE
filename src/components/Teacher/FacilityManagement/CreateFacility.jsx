import React from "react";
import {
  Row,
  Col,
  Form,
  Input,
  DatePicker,
  Table,
  Checkbox,
  Button,
  Select,
} from "antd";
import { useNavigate } from "react-router-dom";
import { path } from "../Router/RouterConfig";
import * as _unitOfWork from "../api/index";
const { Option } = Select;
export function CreateFacility() {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = async () => {
    form.validateFields();
    let payload = {
      ...form.getFieldsValue(),
    };
    let res = await _unitOfWork.createASingleLocation(payload);
    if (res) {
      navigate(-1);
    }
  };
  return (
    <>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Row gutter={32}>
          <Col span={8}>
            <Form.Item label="Tên Cơ sở" name="name"
            rules={[{ required: true, message: 'Vui lòng nhập tên cơ sở' }]}
            >
              <Input placeholder="Tên Cơ sở"></Input>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Mã Cơ Sở" name="id"
            rules={[{ required: true, message: 'Vui lòng nhập mã cơ sở' }]}
            >
              <Input placeholder="Mã Cơ Sở"></Input>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Địa Chỉ Cơ Sở" name="address"
            rules={[{ required: true, message: 'Vui lòng nhập địa chỉ cơ sở' }]}
            >
              <Input placeholder="Địa Chỉ Cơ Sở"></Input>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Trạng Thái Hoạt Động" name="status"
            rules={[{ required: true, message: 'Vui lòng chọn trạng thái hoạt động' }]}
            >
              <Select>
                <Option key={true} >Mở cửa</Option>
                <Option key={false} >Đóng cửa</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={24} style={{ textAlign: "right" }}>
            <Button onClick={() => navigate(-1)}>Hủy</Button>
            <Button type="primary" htmlType="submit">
              Lưu lại
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

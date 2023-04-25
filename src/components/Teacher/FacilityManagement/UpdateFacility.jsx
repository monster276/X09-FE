import React, { useEffect } from "react";
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  Select,
} from "antd";
import { useNavigate, useParams } from "react-router-dom";
import * as _unitOfWork from "../api/index";
const { Option } = Select;
export function UpdateFacility() {
  const param = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  useEffect(() => {
    fetchLocation();
  }, []);
  const fetchLocation = async () => {
    let res = await _unitOfWork.getASingleLocation(param.id);
    if (res) {
        console.log(res)
      form.setFieldsValue(res );
    }
  };
  const onFinish = async () => {
    form.validateFields();
    let payload = {
      ...form.getFieldsValue(),
    };
    let res = await _unitOfWork.updateASingleLocation(payload,param.id);
    if (res) {
      navigate(-1);
    }
  };
  return (
    <>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Row gutter={32}>
          <Col span={8}>
            <Form.Item label="Tên Cơ sở" name="name">
              <Input placeholder="Tên Cơ sở"></Input>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Mã Cơ Sở" name="id">
              <Input placeholder="Mã Cơ Sở"></Input>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Địa Chỉ Cơ Sở" name="address">
              <Input placeholder="Địa Chỉ Cơ Sở"></Input>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Trạng Thái Hoạt Động" name="status">
              <Select>
                <Option key={true} value ={true}>Mở cửa</Option>
                <Option key={false}value ={false}>Đóng cửa</Option>
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

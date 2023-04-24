import React from "react";
import { Form, Input, Button, Layout, Menu } from "antd";
import './Register.css';

const { Header, Footer } = Layout;
const items1 = ['Trang Chủ', 'Khóa Học', 'Về Chúng Tôi'].map((key) => ({
  key,
  label: `${key}`,
}));

const Register = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
      <Layout>
      <Header className="heads">
        <div className="logo">
          <img src="https://img.asmedia.epimg.net/resizer/CInsaWwx8ety0U0kPFnYPuLwIeM=/1952x1098/filters:focal(657x476:667x486)/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/IF2GBNOEH5BXJMOQ2T2ABFEITI.jpg" alt="idk"/>
        </div>
        <Menu className="menu" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
      </Header>
        <Form
          name="registration"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <h1>Đăng Ký</h1>
          <Form.Item
            className="title"
            label="Họ và tên"
            name="name"
            rules={[{ required: true, message: "Vui lòng điền đầy đủ thông tin!" }]}
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 8 }}          
          >
            <Input className="input"/>
          </Form.Item>

          <Form.Item
            className="title"
            label="Số điện thoại"
            name="phone"
            rules={[
              { required: true, message: "Vui lòng điền đầy đủ thông tin!" },
              {
                pattern: /^[0-9]+$/,
                message: "Please enter only numbers",
              },
            ]}
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 8 }}  
          >
            <Input className="input"/>
          </Form.Item>

          <Form.Item
            className="title"
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Vui lòng điền đầy đủ thông tin!" },
              { type: "email", message: "Vui lòng nhập đúng định dạng mail" },
            ]}
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 8 }}  
          >
            <Input className="input"/>
          </Form.Item>

          <Form.Item
            className="title"
            label="Địa chỉ"
            name="address"
            rules={[{ required: true, message: "Vui lòng điền đầy đủ thông tin!" }]}
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 8 }}  
          >
            <Input className="input"/>
          </Form.Item>
          <Form.Item>
            <Button className="btnn"type="primary" htmlType="submit" >
              Đăng Ký
            </Button>
          </Form.Item>
        </Form>
        <Footer className="footer">
            <p>Hotline: 1900-8888</p>
            <p>Địa chỉ: đâu đó trên đất Hà Nội</p>
        </Footer>
      </Layout>
  );
};

export default Register;

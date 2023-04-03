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
  Modal,
  Divider
} from "antd";
import { Editor } from "@tinymce/tinymce-react";
import { UploadOutlined } from "@ant-design/icons";
import "./DSKH.css";
import axios from "axios";
import Item from "antd/es/list/Item";

const Layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});

const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div> 
  );
function DSKH() {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [options, setOptions] = useState([]);
  const [data, setData] = useState({});
  const [loading, setloading] = useState(true);
  const [postData, setPostData] = useState({
    id: "",
    name: "",
    description: "",
    image: "",
    courseTime: "",
    price: "",
    maxNumberOfStudents: "",
  });
  const { Item } = Form;
  // show modal
  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const showDrawer = () => {
   
  };
  const onClose = () => {
    setOpen(false);
  };
  // seach
  const getPanelValue = (searchText) =>
    !searchText
      ? []
      : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
  const onSelect = (data) => {
    console.log("onSelect", data);
  };

  // get data Danh Sach
  useEffect(() => {
    getData();
  }, [data]);
  // search
  useEffect(() => {
    getSearchData();
  }, [searchValue]);
  // Chi tiết
  // useEffect(() => {
  //   getDetail();
  // }, []);
  //danh sách
  const getData = async () => {
    const { data } = await Axios.get("https://x09-be.onrender.com/api/courses");
    setloading(false);
    setData(
      data.courses.map((row) => ({
        name: row.name,
        description: row.description,
        price: row.price,
        id: row.id,
      }))
    );
  };
  // search
  const getSearchData = async () => {
    const { data } = await Axios.get(
      `https://x09-be.onrender.com/api/courses?keyword=${searchValue}`
    );
    setloading(false);
    setData(
      data.courses.map((row) => ({
        name: row.name,
        description: row.description,
        price: row.price,
        id: row.id,
      }))
    );
  };

  //Chi Tiết
  const getDetail = async (id) => {
    setOpen(true);
    const { data } = await Axios.get(
      `https://x09-be.onrender.com/api/courses/${id}`
    );
    setloading(false);
    setData(
      data.courses.map((row) => ({
        id: row.id,
        name: row.name,
        description: row.description,
        price: row.price,
        image:row.image,
        courseTime:row.courseTime,
        classTime:row.classTime,
        maxNumberOfStudents:row.maxNumberOfStudents
      }))
    );
  };

  const handeChange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
    console.log(postData);
  };

  const PostlistData = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { newData } = await Axios.post(
      "https://x09-be.onrender.com/api/courses",
      postData,
      config,
      showModal()
    );

    setData(newData)
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
      dataIndex: "description",
      key: "description",
      width: 600,
    },
    {
      title: "Giá Thành ",
      dataIndex: "price",
      key: "price",
      width: 150,
      render: (_, { price }) =>
        (price = price.toLocaleString("vi", {
          style: "currency",
          currency: "VND",
        })),
    },
    {
      title: "Chức Năng",
      idth: 100,
      render: (fila) => (
        <Space size="middle">
          <Button onClick= {showDrawer} > Chi Tiết </Button>
          <Button> Xóa </Button>
          <Button> Chỉnh Sửa </Button>
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
            <Input.Search
              size="large"
              placeholder="nhập tìm kiếm"
              enterButton
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </AutoComplete>
        </Space>
        <Space>
          <Button type="primary" onClick={showModal} className="ButtonTM">
            Tạo Mới khóa học
          </Button>
        </Space>
      </div>
      <>
        {loading ? (
          "Loading"
        ) : (
          <Table
            className="TableCS"
            columns={columns}
            dataSource={data}
            rowKey="id"
          />
        )}
      </>
      <Modal
        Key="id"
        visible={isModalOpen}
        title="Tạo Mới Khóa Học"
        destroyOnClose={true}
        onCancel={showModal}
        centered
        footer={[
          <Button onClick={showModal}>Thoát</Button>,
          <Button type="primary" onClick={PostlistData}>
            Lưu
          </Button>,
        ]}
      >
        <Form  {...Layout}>
          <Item label="Mã Khóa Học " key='id' >
            <Input name="id"  onChange={handeChange} />
          </Item>

          <Item label=" Tên Khóa Học "  key='name' >
            <Input name="name"  onChange={handeChange} />
          </Item>

          <Item label="Giá Khóa Học "  key='price'>
            <Input name="price"  onChange={handeChange} />
          </Item>

          <Item label="Nội Dung Khóa Học " key='description'  >
            <Input.TextArea
              
              rows={4}
              name="description"
              placeholder="nhập nội dung khóa học "
              onChange={handeChange}
            />
          </Item>

          <Item label="Thời Lượng Khóa Học" key='courseTime' >
            <Input name="courseTime"  onChange={handeChange} />
          </Item>

          <Item label="Thời Lượng Giờ Học " key='classTime' >
            <Input name="classTime"  onChange={handeChange} />
          </Item>

          <Item label="Số học sinh " key='maxNumberOfStudents' >
            <Input name="maxNumberOfStudents"  onChange={handeChange} />
          </Item>

           <Item label="ảnh" key='image' >
            <Input name="image"  onChange={handeChange} />
          </Item>
        </Form>
      </Modal>
      <Drawer width={640} placement="right" closable={false} onClose={onClose} open={open}>
        <p
          className="site-description-item-profile-p"
          style={{
            marginBottom: 24,
          }}
        >
        
        </p>
        <p className="site-description-item-profile-p">Personal</p>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Full Name" content="Huy" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Account" content="AntDesign@example.com" />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem title="City" content="HangZhou" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Country" content="China🇨🇳" />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Birthday" content="February 2,1900" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Website" content="-" />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <DescriptionItem
              title="Message"
              content="Make things as simple as possible but no simpler."
            />
          </Col>
        </Row>
        <Divider />
        <p className="site-description-item-profile-p">Company</p>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Position" content="Programmer" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Responsibilities" content="Coding" />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Department" content="XTech" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Supervisor" content={<a>Lin</a>} />
          </Col>
        </Row>
      </Drawer>
    </div>
  );
}

export default DSKH;

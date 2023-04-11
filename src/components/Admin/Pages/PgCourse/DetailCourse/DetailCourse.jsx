import React, { useContext,  } from "react";
import { Button, Modal,  Form } from "antd";
import { ListContext } from "../ListCourse/ListCourse";
import Axios from "axios";
const { Item } = Form;


const DetailCourse = () => {
   const { postData, showDetaillModal, Layout, DetailsModalOpen, setPostData , baseUrl ,data, setData  } = useContext(ListContext);

   const handeChange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
    console.log(postData);
  };
  
  return (
    <div>
      <Modal
        Key="id"
        visible={DetailsModalOpen}
        title="Chi Tiết Khóa Học "
        onCancel={showDetaillModal}
        centered
        footer={[<Button onClick={showDetaillModal}>Thoát</Button>]}
      >
        <Form {...Layout}>
          <Item label="Mã Khóa Học " key="id">
            <span name="id"> {postData && postData.id} </span>
          </Item>

          <Item label=" Tên Khóa Học " key="name">
            <span name="name">{postData && postData.name}</span>
          </Item>

          <Item label="Giá Khóa Học " key="price">
            <span name="price">{postData && postData.price} </span>
          </Item>

          <Item label="Nội Dung Khóa Học " key="description">
            <span
              rows={4}
              name="description"
              placeholder="nhập nội dung khóa học "
              onChange={handeChange}
            >
              {" "}
              {postData && postData.description}
            </span>
          </Item>

          <Item label="Thời Lượng Khóa Học" key="courseTime">
            <span name="courseTime" onChange={handeChange}>
              {postData && postData.courseTime}
            </span>
          </Item>

          <Item label="Thời Lượng Giờ Học " key="classTime">
            <span name="classTime" onChange={handeChange}>
              {postData && postData.classTime}
            </span>
          </Item>

          <Item label="Số học sinh " key="maxNumberOfStudents">
            <span name="maxNumberOfStudents" onChange={handeChange}>
              {postData && postData.maxNumberOfStudents}
            </span>
          </Item>

          <Item label="ảnh" key="image">
            <span name="image" onChange={handeChange}>
              {postData && postData.image}
            </span>
          </Item>
        </Form>
      </Modal>
    </div>
  );
};

export default DetailCourse;

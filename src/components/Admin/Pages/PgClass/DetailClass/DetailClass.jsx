import React, { useContext,  } from "react";
import { Button, Modal,  Form } from "antd";
import { ListContext } from "../ListClass/ListClass";
const { Item } = Form;

const DetailClass = () => {
   const { postData, showDetaillModal, Layout, DetailsModalOpen } = useContext(ListContext);


  
  return (
    <div>
      <Modal
        Key="id"
        visible={DetailsModalOpen}
        title="Chi Tiết Lớp Học "
        onCancel={showDetaillModal}
        centered
        footer={[<Button onClick={showDetaillModal}>Thoát</Button>]}
      >
        <Form {...Layout}>
          <Item label="Mã Lớp Học " key="id">
            <span name="id"> {postData && postData.id} </span>
          </Item>

          <Item label=" Tên Lớp Học " key="name">
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
            
            >
              {" "}
              {postData && postData.description}
            </span>
          </Item>

          <Item label="Thời Lượng Khóa Học" key="courseTime">
            <span name="courseTime">
              {postData && postData.courseTime}
            </span>
          </Item>

          <Item label="Thời Lượng Giờ Học " key="classTime">
            <span name="classTime">
              {postData && postData.classTime}
            </span>
          </Item>

          <Item label="Số học sinh " key="maxNumberOfStudents">
            <span name="maxNumberOfStudents">
              {postData && postData.maxNumberOfStudents}
            </span>
          </Item>

          <Item label="ảnh" key="image">
            <span name="image">
              {postData && postData.image}
            </span>
          </Item>
        </Form>
      </Modal>
    </div>
  );
};

export default DetailClass;

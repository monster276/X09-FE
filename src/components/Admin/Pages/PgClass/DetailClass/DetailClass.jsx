import React, { useContext } from "react";
import { Button, Modal, Form } from "antd";
import { ListContext } from "../ListClass/ListClass";
const { Item } = Form;

const DetailClass = () => {
  const { postData, showDetaillModal, Layout, DetailsModalOpen } =useContext(ListContext);

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
          <Item label="Mã Lớp Học ">
            <span name="id"> {postData && postData.id} </span>
          </Item>

          <Item label=" Tên Lớp Học ">
            <span name="name">{postData && postData.nameclass}</span>
          </Item>

          <Item label="Tên Giảng Viên  ">
            <span name="price">{postData && postData.fullname} </span>
          </Item>

          <Item label="Địa Chỉ Lớp Học ">
            <span name="location">{postData && postData.location}</span>
          </Item>

          <Item label="Khóa Học">
            <span name="course">{postData && postData.course}</span>
          </Item>

          <Item label="Thời Lượng Giờ Học ">
            <span name="startTime">{postData && postData.startTime}</span>
          </Item>

          <Item label="Ngày kết thúc Học ">
            <span name="endTime">{postData && postData.endTime}</span>
          </Item>
          <Item label="Số học sinh">
            <span name="numberOfLessons">{postData && postData.numberOfLessons}</span>
          </Item>
          <Item label="Giờ Lớp Học">
            <span name="classTime">{postData && postData.classTime}</span>
          </Item>
          <Item label="Lịch Học">
            <span name="schedule">{postData && postData.schedule}</span>
          </Item>
        </Form>
      </Modal>
    </div>
  );
};

export default DetailClass;

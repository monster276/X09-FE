import React, { useContext } from "react";
import Axios from "axios";
import { Button, Modal, Form } from "antd";
import { ListContext } from "../ListClass/ListClass";
const { Item } = Form;

const DetailClass = () => {
  const { setData,postData, showDetaillModal, data, Layout, DetailsModalOpen, baseUrlClass } =useContext(ListContext);
  const GetDetail = async () => {
    try {
      let result = await Axios.get(
        baseUrlClass + "/" + postData._id,
        postData
      ).then((res) => {
        var dataPut = data;
        dataPut.map((elemento) => {
          if (elemento._id === postData._id) {
            elemento.id = postData.id;
            elemento.nameclass = postData.nameclass;
            elemento.fullname = postData.fullname;
            elemento.location = postData.location;
            elemento.course = postData.course;
            elemento.startTime = postData.startTime;
            elemento.endTime = postData.endTime;
            elemento.numberOfLessons = postData.numberOfLessons;
            elemento.classTime = postData.classTime;
            elemento.schedule = postData.schedule;
          }
        });
        setData(dataPut);
        showDetaillModal();
        console.log(result);
      });
    } catch (error) {
      console.error(error.data);
    }
    GetDetail();
  };
  return (
    <div>
      <Modal
        Key="id"
        visible={DetailsModalOpen}
        title="CHI TIẾT LỚP HỌC"
        onCancel={showDetaillModal}
        centered
        footer={[<Button style={{background: "red", color: "white"}} onClick={showDetaillModal}>Thoát</Button>]}
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

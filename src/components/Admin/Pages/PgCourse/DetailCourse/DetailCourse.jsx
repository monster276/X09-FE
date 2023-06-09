import React, { useContext } from "react";
import { Button, Modal, Form } from "antd";
import { ListContext } from "../ListCourse/ListCourse";
import Axios from "axios";
const { Item } = Form;

const DetailCourse = () => {
  const {
    postData,
    showDetaillModal,
    Layout,
    DetailsModalOpen,
    setPostData,
    baseUrl,
    data,
    setData,
  } = useContext(ListContext);

  const handeChange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
    console.log(postData);
  };
  const GetDetail = async () => {
    try {
      let result = await Axios.get(baseUrl + "/" + postData._id, postData).then(
        (res) => {
          var dataPut = data;
          dataPut.map((elemento) => {
            if (elemento._id === postData._id) {
              elemento.id = postData.id;
              elemento.description = postData.description;
              elemento.price = postData.price;
              elemento.courseTime = postData.courseTime;
              elemento.classTime = postData.classTime;
              elemento.maxNumberOfStudents = postData.maxNumberOfStudents;
              elemento.image = postData.image;
            }
          });
          setData(dataPut);
          showDetaillModal();
          console.log(result);
        }
      );
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
        title="CHI TIẾT KHÓA HỌC"
        onCancel={showDetaillModal}
        centered
        footer={[
          <Button
            style={{ background: "red", color: "white" }}
            onClick={showDetaillModal}
          >
            Thoát
          </Button>,
        ]}
      >
        <Form {...Layout}>
          <Item label="MÃ KHÓA HỌC">
            <span style={{ color: "red" }} name="id">
              { postData.id}
            </span>
          </Item>

          <Item label=" TÊN KHÓA HỌC " key="name">
            <span style={{ color: "red" }} name="name">
              {postData.name}
            </span>
          </Item>

          <Item label="GIÁ KHÓA HỌC">
            <span style={{ color: "red" }} name="price" key="price">
              { postData.price}
              VND
            </span>
          </Item>

          <Item label="NỘI DUNG KHOA HỌC " key="description">
            <span
              style={{ color: "green" }}
              rows={4}
              name="description"
              placeholder="nhập nội dung khóa học "
            >
              {
              postData.description}
            </span>
          </Item>

          <Item label="THỜI LƯỢNG KH ">
            <span name="courseTime" style={{ color: "green" }}>
              {
              postData.courseTime}
            </span>
          </Item>

          <Item label="THỜI LƯỢNG LỚP HỌC ">
            <span name="classTime" style={{ color: "green" }}>
              {
               postData.classTime}
            </span>
          </Item>

          <Item label="SỐ HỌC SINH ">
            <span name="maxNumberOfStudents" style={{ color: "green" }}>
              {
              postData.maxNumberOfStudents}
            </span>
          </Item>

          <Item label="ẢNH">
            <img name="image" src={
             postData.image}/>
          </Item>
        </Form>
      </Modal>
    </div>
  );
};

export default DetailCourse;

import React, { useContext, useEffect } from "react";
import { Button, Modal, Form, Input } from "antd";
import { ListContext } from "../ListCourse/ListCourse";
import Axios from "axios";
import swal from 'sweetalert';
const { Item } = Form;

const EditCourse = () => {
  const { postData, showEditlModal, Layout, EditsModalOpen,  setPostData, baseUrl, data, setData} = useContext(ListContext);

  const handeChange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
    console.log(postData);
  };
  
  const sweetalert = () => {
    swal({
      title: "Tuyệt Vời",
      text: "Bạn Đã sửa Thành Công",
      icon: "success",
      button: "Thoát",
    })
  }

 

  const HandlPut = async () => {
    try {
      let result = await Axios.put(baseUrl + "/" + postData._id, postData).then(
        (res) => {
          var dataPut = data;
          dataPut.map((elemento) => {
            if (elemento._id === postData._id) {
              elemento.id = postData.id;
              elemento.name = postData.name;
              elemento.description = postData.description;
              elemento.courseTime = postData.courseTime;
              elemento.classTime = postData.classTime;
              elemento.price = postData.price;
              elemento.image = postData.image;
              elemento.maxNumberOfStudents = postData.maxNumberOfStudents;
            }
          });
          setData(dataPut);
          showEditlModal(
            setTimeout(() => {
              sweetalert()
            }, 1500)
          )
        }
      )
      
    } catch (error) {
      console.error(error.data);
    }
  };

  return (
    <div>
       <Modal
          Key="id"
          visible={EditsModalOpen}
          title="CHỈNH SỬA KHÓA HỌC"
          onCancel={showEditlModal}
          centered
          footer={[
            <Button style={{background: "red", color: "white"}} onClick={showEditlModal}>Thoát</Button>,
            <Button style={{background: "blue", color: "white"}} type="primary" onClick={HandlPut}>
              Lưu
            </Button>,
          ]}
        >
          <Form {...Layout}>
            <Item label="Mã Khóa Học" key="id" >
              <Input
                disabled
                name="id"
                onChange={handeChange}
                value={postData && postData.id}
              />
            </Item>

            <Item label=" Tên Khóa Học " key="name">
              <Input
                disabled
                name="name"
                onChange={handeChange}
                value={postData && postData.name}
              />
            </Item>

            <Item label="Giá Khóa Học " key="price">
              <Input
                name="price"
                onChange={handeChange}
                value={postData && postData.price}
              />
            </Item>

            <Item label="Nội Dung Khóa Học " key="description">
              <Input.TextArea
                rows={4}
                name="description"
                placeholder="nhập nội dung khóa học "
                onChange={handeChange}
                value={postData && postData.description}
              />
            </Item>

            <Item label="Thời Lượng Khóa Học" key="courseTime">
              <Input
                name="courseTime"
                onChange={handeChange}
                value={postData && postData.courseTime}
              />
            </Item>

            <Item label="Thời Lượng Giờ Học " key="classTime">
              <Input
                name="classTime"
                onChange={handeChange}
                value={postData && postData.classTime}
              />
            </Item>

            <Item label="Số học sinh " key="maxNumberOfStudents">
              <Input
                name="maxNumberOfStudents"
                onChange={handeChange}
                value={postData && postData.maxNumberOfStudents}
              />
            </Item>

            <Item label="ảnh" key="image">
              <Input
                name="image"
                onChange={handeChange}
                value={postData && postData.image}
              />
            </Item>
          </Form>
        </Modal>
    </div>
  );
};

export default EditCourse;

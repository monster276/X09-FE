import React, { useContext } from "react";
import { Button, Modal, Form, Input } from "antd";
import { ListContext } from "../ListClass/ListClass";
import Axios from "axios";
const { Item } = Form;

const EditClass = () => {
  const { postData, showEditlModal, Layout, EditsModalOpen,  setPostData, baseUrlClass, data, setData} = useContext(ListContext);

  const handeChange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
    console.log(postData);
  };
  
  const HandlPut = async () => {
    try {
      let result = await Axios.put(baseUrlClass + "/" + postData._id, postData).then(
        (res) => {
          var dataPut = data;
          dataPut.map((elemento) => {
            if (elemento._id === postData._id) {
              elemento.id = postData.id;
              elemento.name = postData.name;
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
          showEditlModal();
          console.log(result);
        });
    } catch (error) {
      console.error(error.data);
    }
  };

  return (
    <div>
       <Modal
          Key="id"
          visible={EditsModalOpen}
          title="CHỈNH SỬA LỚP HỌC"
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
            <Item label="Mã Lớp Học ">
              <Input
                name="id"
                onChange={handeChange}
                value={postData && postData.id}
              />
            </Item>

            <Item label=" Tên Lớp Học " >
              <Input
                name="nameclass"
                onChange={handeChange}
                value={postData && postData.nameclass}
              />
            </Item>

            <Item label="Tên Giảng Viên " >
              <Input
                name="fullname"
                onChange={handeChange}
                value={postData && postData.fullname}
              />
            </Item>

            <Item label="Địa Chỉ Lớp Học " >
              <Input
                name="location"
                placeholder="nhập nội dung khóa học "
                onChange={handeChange}
                value={postData && postData.location}
              />
            </Item>

            <Item label=" Khóa Học" key="courseTime">
              <Input
                name="course"
                onChange={handeChange}
                value={postData && postData.course}
              />
            </Item>

            <Item label="Ngày Bắt Đầu Học " >
              <Input
                name="startTime"
                onChange={handeChange}
                value={postData && postData.startTime}
              />
            </Item>

            <Item label="Ngày kết thúc Học">
              <Input
                name="endTime"
                onChange={handeChange}
                value={postData && postData.endTime}
              />
            </Item>

            <Item label="Số học sinh" >
              <Input
                name="numberOfLessons"
                onChange={handeChange}
                value={postData && postData.numberOfLessons}
              />
            </Item>
            <Item label="Giờ Lớp Học " >
              <Input
                name="classTime"
                onChange={handeChange}
                value={postData && postData.classTime}
              />
            </Item>
            <Item label="Lịch Học " >
              <Input
                name="schedule"
                onChange={handeChange}
                value={postData && postData.schedule}
              />
            </Item>
          </Form>
        </Modal>
    </div>
  );
};
export default EditClass;

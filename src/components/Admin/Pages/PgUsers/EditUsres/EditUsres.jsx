import React, { useContext } from "react";
import { Button, Modal, Form, Input } from "antd";
import { ListContext } from "../ListUsres/ListUsres";
import Axios from "axios";
const { Item } = Form;


const EditUsers = () => {
  const { baseUrlUsers, postData, showEditlModal, Layout, EditsModalOpen,  setPostData, data, setData} = useContext(ListContext);

  const handeChange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
    console.log(postData);
  };

  const GetPut = async () => {
    const config = {
      headers: {
        token: `Bearer ${JSON.parse(localStorage.getItem("accesstoken"))}`,
      },
    };
    try {
      await Axios.put(baseUrlUsers + "/" + postData._id, postData,config)
      .then((res) => {
        setData(
          data.users.map((elemento) => {
            if (elemento._id === postData._id) {
              elemento.fullName = postData.fullName;
              elemento.email = postData.email;
              elemento.username = postData.username;
              elemento.password = postData.password;
              elemento.phoneNumber = postData.phoneNumber;
            }
          }))
          showEditlModal();
        }
      );
    } catch (error) {
      console.error(error.data);
    }
    
  };
      
     
  return (
    <div>
       <Modal
          Key="id"
          visible={EditsModalOpen}
          title="CHỈNH SỬA NGƯỜI DÙNG"
          onCancel={showEditlModal}
          centered
          footer={[
            <Button style={{background: "red", color: "white"}} onClick={showEditlModal}>Thoát</Button>,
            <Button style={{background: "blue", color: "white"}} type="primary" onClick={GetPut}  >
              Lưu
            </Button>,
          ]}
        >
          <Form {...Layout}>
            <Item label="Họ và tên " key="fullName">
              <Input
                name="fullName"
                onChange={handeChange}
                placeholder="nhập Họ và tên"
                value={postData && postData.fullName}
              />
            </Item>

            <Item label="Email" key="email">
              <Input
                name="email"
                onChange={handeChange}
                placeholder="nhập Email"
                value={postData && postData.email}
              />
            </Item>

            <Item label=" Tên Đăng Nhập " key="username" >
              <Input
                name="username"
                placeholder="nhập Tên Đăng Nhập"
                onChange={handeChange}
                value={postData && postData.username}
              />
            </Item>
            <Item label="Số Điện Thoại" key="phoneNumber"  >
              <Input
                name="phoneNumber"
                placeholder="nhập Số Điện Thoại"
                onChange={handeChange}
                value={postData && postData.phoneNumber}
              />
            </Item>
          </Form>
        </Modal>
    </div>
  );
;}

export default EditUsers;

import React, { useContext } from "react";
import { Button, Modal, Form, Input } from "antd";
import { ListContext } from "../ListLocation/ListLocation";
import Axios from "axios";
const { Item } = Form;

const EditCourse = () => {
  const { postData, showEditlModal, Layout, EditsModalOpen,  setPostData, baseUrlLocations, data, setData} = useContext(ListContext);

  const handeChange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
    console.log(postData);
  };
  const check = (e) => {
    const { name } = e.status;
    console.log(name);
  }


  const GetPut = async () => {
    try {
      let result = await Axios.put(baseUrlLocations + "/" + postData._id, postData).then(
        (res) => {
          var dataPut = data;
          dataPut.map((elemento) => {
            if (elemento._id === postData._id) {
              elemento.id = postData.id;
              elemento.name = postData.name;
              elemento.status = postData.status;
              elemento.address = postData.address;
            }
          });
          setData(dataPut);
          showEditlModal();
          console.log(result);
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
          title="Chỉnh sửa Cở Sở "
          onCancel={showEditlModal}
          centered
          footer={[
            <Button onClick={showEditlModal}>Thoát</Button>,
            <Button type="primary" onClick={GetPut}>
              Lưu
            </Button>,
          ]}
        >
          <Form {...Layout} value={postData && postData._id}>
            <Item label="Mã Cở Sở " key="id">
              <Input
                name="id"
                onChange={handeChange}
                placeholder="nhập Mã Cơ Sở"
                value={postData && postData.id}
              />
            </Item>

            <Item label=" Tên Cở Sở" key="name">
              <Input
                name="name"
                onChange={handeChange}
                placeholder="nhập Tên Cở Sở"
                value={postData && postData.name}
              />
            </Item>

            <Item label=" Trạng Thái Hoạt Động " key="status">
              <Input
                check= {check}
                name="status"
                placeholder="nhập Trạng Thái Hoạt Động"
                onChange={handeChange}
                value={postData && postData.status}
              />
            </Item>

            <Item label="Địa Chỉ Cở Sở " key="address">
              <Input.TextArea
                rows={4}
                name="address"
                placeholder="nhập Địa Chỉ Cở Sở"
                onChange={handeChange}
                value={postData && postData.address}
              />
            </Item>
          </Form>
        </Modal>
    </div>
  );
};

export default EditCourse;

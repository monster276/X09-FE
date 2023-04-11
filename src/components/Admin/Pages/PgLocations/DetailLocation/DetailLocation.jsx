import React, { useContext,  } from "react";
import { Button, Modal,  Form } from "antd";
import { ListContext } from "../ListLocation/ListLocation";
const { Item } = Form;


const DetailLocation= () => {
   const { postData, showDetaillModal, Layout, DetailsModalOpen, setPostData   } = useContext(ListContext);

  //  const handeChange = (e) => {
  //   const { name, value } = e.target;
  //   setPostData({ ...postData, [name]: value });
  //   console.log(postData);
  // };
  
  return (
    <div>
      <Modal
        Key="id"
        visible={DetailsModalOpen}
        title="Chi Tiết Cơ Sở "
        onCancel={showDetaillModal}
        centered
        footer={[<Button onClick={showDetaillModal}>Thoát</Button>]}
      >
        <Form {...Layout}>
          <Item label="Mã Cở Sở" key="id">
            <span name="id"> { postData.id} </span>
          </Item>

          <Item label=" Tên Cở Sở " key="name">
            <span name="name">{ postData.name}</span>
          </Item>

          <Item label="Trạng Thái Hoạt Động " key="status">
            <span name="status">{postData.status} </span>
          </Item>

          <Item label="Địa Chỉ Cơ Sở " key="address">
            <span
              rows={4}
              name="address"
            >
              {" "}
              { postData.address}
            </span>
          </Item>
        </Form>
      </Modal>
    </div>
  );
};

export default DetailLocation;

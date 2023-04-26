import React, { useContext } from "react";
import { Button, Modal } from "antd";
import { ListContext } from "../ListUsres/ListUsres";
import swal from 'sweetalert';
import Axios from "axios";
const DeleteLocation = () => {
  const { postData,  showDeletelModal, deletesModalOpen, baseUrlUsers, data, setData } = useContext(ListContext);

  const successalert = () => {
    swal({
      title: "Tuyệt Vời",
      text: "Bạn Đã Sửa Thành Công",
      icon: "success",
      button: "Thoát",
    });
  };
  const HandlDelete = async () => {
    await Axios.delete(baseUrlUsers + "/" + postData._id,
    {
      headers: { 
        token: `Bearer ${JSON.parse(localStorage.getItem("accesstoken"))}`
      }
    }
    )
      .then((res) => {
        setData(data.filter((elemento) => elemento._id !== postData._id));
        showDeletelModal(
          setTimeout(() => {
            successalert();
          }, 1500)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Modal
        Key="id"
        visible={deletesModalOpen}
        title="XÓA NGƯỜI DÙNG"
        destroyOnClose={true}
        onCancel={showDeletelModal}
        centered
        footer={[
          <Button style={{background: "red", color: "white"}} onClick={showDeletelModal}>Thoát</Button>,
          <Button style={{background: "blue", color: "white"}} type="primary" onClick={HandlDelete}>
            Lưu
          </Button>,
        ]}
      >
        bạn có muốn xóa ko <b>{postData && postData.id}</b>?
      </Modal>
    </div>
  );
};

export default DeleteLocation;

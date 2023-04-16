import { React, createContext, useEffect, useState } from "react";
import "./Location.css";
import { Table, Space, Button, Status, Tag } from "antd";
import Axios from "axios";
import EditLocation from "../EditTeacher/EditTeacher";
import DetailLocation from "../DetailTeacher/DetailTeacher";
import DeleteLocation from "../DeleteTeacher/DeleteTeacher";
import SearchLocation from "../SearchTeacher/SearchLocation";
const baseUrlUsers = "https://x09-be.onrender.com/api/user";
const Layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

export const ListContext = createContext();

const ListLocation = () => {
  const [loading, setloading] = useState(true);
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [options, setOptions] = useState([]);
  const [deletesModalOpen, setdeletesModalOpen] = useState(false);
  const [EditsModalOpen, setEditModalOpen] = useState(false);
  const [DetailsModalOpen, setDetailModalOpen] = useState(false);
  const [postData, setPostData] = useState({
    _id: "",
    id: "",
    name: "",
    status: "",
    address: "",
  });
  useEffect(() => {
    getData();
  }, []);

  const showDeletelModal = () => {
    setdeletesModalOpen(!deletesModalOpen);
  };
  const showEditlModal = () => {
    setEditModalOpen(!EditsModalOpen);
  };
  const showDetaillModal = () => {
    setDetailModalOpen(!DetailsModalOpen);
  };
  const SeleArtista = (artista, caso) => {
    setPostData(artista);
    caso === "Editar" ? showEditlModal() : showDeletelModal();
  };
  

  const getData = async () => {
   
    const { data } = await Axios.get(baseUrlUsers);
    setloading(false);
    setData(
      data.users.map((row) => ({
        _id: row._id,
        fullName: row.fullName,
        email: row.email,
        username: row.username,
        password: row.password,
        phoneNumber: row.phoneNumber,
      }))
    );
  };

  
  const getDetail = async () => {
     await Axios.get(baseUrlUsers + '/' + postData._id, postData)
    .then((res) => {
      var dataPut = data;
      dataPut.map((row) => ({
        _id: row._id,
        fullName: row.fullName,
        email: row.email,
        username: row.username,
        password: row.password,
        phoneNumber: row.phoneNumber,
      }));
      setData(dataPut);
      showDetaillModal();
    })
    .catch((error) => {
      console.log(error);
    });
};
    

  const columnLocations = [
    {
      title: "Họ và Tên",
      dataIndex: "fullName",
      key: "fullName",
      width: 150,
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
      width: 150,
    },
    {
      title: "Tên Đăng Nhập",
      dataIndex: "username",
      key: "username",
      width: 90,
    },
    {
      title: "Số Điện Thoại",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      width: 250,
    },
    {
      title: "Chức Năng", 
      width: 90, 
      render: (fila ) => (
        <Space size="middle">
          {" "}
          <Button onClick={() => SeleArtista(fila, "Editar")}>
            {" "}
            Chỉnh Sửa{" "}
          </Button>
          <Button onClick={() => SeleArtista(fila, "Delete")}> xóa </Button>
          <Button onClick={getDetail}> Chi Tiết </Button>
        </Space>
      ),
    },
  ];

  return (
    <ListContext.Provider
      value={{
        options,
        searchValue,
        data,
        loading,
        postData,
        baseUrlUsers,
        deletesModalOpen,
        DetailsModalOpen,
        Layout,
        EditsModalOpen,
        setOptions,
        setSearchValue,
        getData,
        setloading,
        setData,
        setPostData,
        showDeletelModal,
        showDetaillModal,
        showEditlModal,
        getDetail,
      }}
    >
      <div>
        <SearchLocation />
        <div>
          {loading ? (
            "Loading"
          ) : (
            <Table
              className="TableCS"
              columns={columnLocations}
              dataSource={data}
              rowKey="id"
            ></Table>
          )}
          <div>
            <EditLocation />
          </div>
          <div>
            <DeleteLocation />
          </div>
          <div>
            <DetailLocation />
          </div>
        </div>
      </div>
    </ListContext.Provider>
  );
};

export default ListLocation;

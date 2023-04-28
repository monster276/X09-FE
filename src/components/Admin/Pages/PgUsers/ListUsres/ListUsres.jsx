import { React, createContext, useEffect, useState } from "react";
import "./Usres.css";
import { Table, Space, Button, Status, Tag } from "antd";
import Axios from "axios";
import EditUsers from "../EditUsres/EditUsres";
import DetailUsers from "../DetailUsers/DetailUsers";
import DeleteUsers from "../DeleteUsres/DeleteUsres";
import SearchUsers from "../SearchUsres/SearchUsres";
import Pagination from "@mui/material/Pagination";
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

const ListUsres = () => {
  const [page, setPage] = useState(1);
  const [loading, setloading] = useState(true);
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [options, setOptions] = useState([]);
  const [deletesModalOpen, setdeletesModalOpen] = useState(false);
  const [EditsModalOpen, setEditModalOpen] = useState(false);
  const [DetailsModalOpen, setDetailModalOpen] = useState(false);
  const [postData, setPostData] = useState({
    _id:"",
    fullName: "",
    email: "",
    username: "",
    password: "",
    phoneNumber: "",
  });
  useEffect(() => {
    getData();
  }, [page]);
  const handleChangePagination = (event, value) => {
    setPage(value);
  };
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
  const SeleDetail = (artistaDetail, casoDetail) => {
    setPostData(artistaDetail);
    casoDetail === "Detail"&&showDetaillModal();
  }
  const getData = async () => {
    const config = {
      headers: {
        token: `Bearer ${JSON.parse(localStorage.getItem("accesstoken"))}`,
      },
    };
    const { data } = await Axios.get(baseUrlUsers, config);
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
    await Axios.get(baseUrlUsers + "/" + postData._id,
    {
      headers: {
        token: `Bearer ${JSON.parse(localStorage.getItem("accesstoken"))}`,
      },
    })
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
      render: (fila) => (
        <Space size="middle">
          {" "}
          <Button key="sua" style={{background: "blue", color: "white"}} onClick={() => SeleArtista(fila, "Editar")}>
            {" "}
            Chỉnh Sửa{" "}
          </Button>
          {/* <Button  style={{background: "red", color: "white"}}   onClick={() => SeleArtista(fila, "Delete")}> xóa </Button> */}
          <Button  style={{background: "green", color: "white"}}  onClick={() => SeleDetail(fila, "Detail")}> Chi Tiết </Button>
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
        <SearchUsers />
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
          <Pagination
            style={{ marginLeft: 920, marginTop: 20, marginBottom: 20 }}
            variant="outlined"
            shape="rounded"
            color="secondary"
            count={10}
            page={page}
            onChange={handleChangePagination}
          />
          <div>
            <EditUsers />
          </div>
          <div>
            <DeleteUsers />
          </div>
          <div>
            <DetailUsers />
          </div>
        </div>
      </div>
    </ListContext.Provider>
  );
};

export default ListUsres;

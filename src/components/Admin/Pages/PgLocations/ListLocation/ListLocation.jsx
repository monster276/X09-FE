import { React, createContext, useEffect, useState } from "react";
import "./Location.css";
import { Table, Space, Button, Status, Tag } from "antd";
import Axios from "axios";
import EditLocation from "../EditLocation/EditLocation";
import DetailLocation from "../DetailLocation/DetailLocation";
import DeleteLocation from "../DeleteLocation/DeleteLocation";
import SearchLocation from "../SearchLocation/SearchLocation";
const baseUrlLocations = "https://x09-be.onrender.com/api/locations";
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
  const [detail, setdetail] = useState(null)
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
  const SeleDetail = (artistaDetail, casoDetail) => {
    setPostData(artistaDetail);
    casoDetail === "Detail"&&showDetaillModal();
  }
  

  const getData = async () => {
    const { data } = await Axios.get(baseUrlLocations);
    setloading(false);
    setData(
      data.locations.map((row) => ({
        _id: row._id,
        id: row.id,
        name: row.name,
        status: row.status,
        address: row.address,
      }))
    );
  };

  

  const columnLocations = [
    {
      title: "Mã Cở Sở",
      dataIndex: "id",
      key: "id",
      width: 150,
    },
    {
      title: "Tên Cơ Sở ",
      dataIndex: "name",
      key: "name",
      width: 200,
    },
    {
      title: "Trạng Thái Hoạt Động ",
      dataIndex: "status",
      key: "status",
      width: 90,
      render: (fila) => {
        if(fila === true ){
          return <span>Hoạt Động</span>
        }else {
          return <span>Ngừng Hoạt Động</span>
        }
      }
    },
    {
      title: "Địa Chỉ ",
      dataIndex: "address",
      key: "address",
      width: 250,
    },
    {
      title: "Chức Năng", 
      width: 90, 
      render: (fila ) => (
        <Space size="middle">
          {" "}
          <Button key={showEditlModal} style={{background: "blue", color: "white"}} onClick={() => SeleArtista(fila, "Editar")}>
            {" "}
            Chỉnh Sửa{" "}
          </Button>
          <Button style={{background: "red", color: "white"}} onClick={() => SeleArtista(fila, "Delete")}> xóa </Button>
          <Button style={{background: "green", color: "white"}} onClick={() => SeleDetail(fila, "Detail")}> Chi Tiết </Button>
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
        baseUrlLocations,
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

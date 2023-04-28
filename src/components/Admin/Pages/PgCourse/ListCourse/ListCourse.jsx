import { React, createContext, useEffect, useState } from "react";
import "./DSKH.css";
import Axios from "axios";
import EditCourse from "../EditCourse/EditCourse";
import DetailCourse from "../DetailCourse/DetailCourse";
import DeleteCourse from "../DeleteCourse/DeleteCourse";
import SearchCourse from "../Search/SearchCourse";

import Pagination from "@mui/material/Pagination";
import { Table, Space, Button } from "antd";


import swal from 'sweetalert';
const baseUrl = "https://x09-be.onrender.com/api/courses";
const Layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

export const ListContext = createContext();
const ListCourse = () => {
  const [page, setPage] = useState(1);
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
    description: "",
    image: "",
    courseTime: "",
    classTime: "",
    price: "",
    maxNumberOfStudents: "",
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
    casoDetail === "Detail" && showDetaillModal();
  };

  const getData = async () => {
    const { data } = await Axios.get(
      `https://x09-be.onrender.com/api/courses?pageNumber=${page}&limit=10`
    );
    setloading(false);
    setData(
      data.courses.map((row) => ({
        courseTime: row.courseTime,
        classTime: row.classTime,
        image: row.image,
        maxNumberOfStudents: row.maxNumberOfStudents,
        _id: row._id,
        id: row.id,
        name: row.name,
        description: row.description,
        price: row.price,
      }))
    );
  };

  const columns = [
    {
      title: "Mã Khóa Học",
      dataIndex: "id",
      key: "id",
      width: 150,
    },
    {
      title: "Tên Khóa Học",
      dataIndex: "name",
      key: "name",
      width: 200,
    },
    {
      title: "Mô Tả Khóa Học",
      dataIndex: "description",
      key: "description",
      width: 600,
    },
    {
      title: "Giá Thành ",
      dataIndex: "price",
      key: "price",
      width: 150,
      render: (_, { price }) =>
        (price = price.toLocaleString("vi", {
          style: "currency",
          currency: "VND",
        })),
    },
    {
      title: "Chức Năng",
      width: 100,
      render: (fila) => (
        <Space size="middle">
          {" "}
          <Button
            style={{ background: "blue", color: "white" }}
            onClick={() => SeleArtista(fila, "Editar")}
          >
            {" "}
            Chỉnh Sửa{" "}
          </Button>
          {/* <Button
            style={{ background: "red", color: "white" }}
            onClick={() => SeleArtista(fila, "Delete")}
          >
            {" "}
            xóa{" "}
          </Button> */}
          <Button
            style={{ background: "green", color: "white" }}
            onClick={() => SeleDetail(fila, "Detail")}
          >
            {" "}
            Chi Tiết{" "}
          </Button>
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
        baseUrl,
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
        <SearchCourse />
        <div>
          {loading ? (
            "Loading"
          ) : (
            <Table
              className="TableCS"
              columns={columns}
              dataSource={data}
              rowKey="Id"
              pagination={false}
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
            <EditCourse />
          </div>
          <div>{/* <DeleteCourse /> */}</div>
          <div>
            <DetailCourse />
          </div>
        </div>
      </div>
    </ListContext.Provider>
  );
};

export default ListCourse;

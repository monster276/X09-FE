import React, { useState, useEffect, useRef } from "react";
import Axios from "axios";
import {
  Table,
  Space,
  Button,
  Input,
  Drawer,
  Form,
  Row,
  Col,
  Upload,
  Modal,
  Divider,
  AutoComplete,
  Pagination,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./DSKH.css";
import Search from "../Search/Search";

const baseUrl = 'https://x09-be.onrender.com/api/courses'

const { Item } = Form;
const Layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
function ListCourse() {
  // const [pages, setPages] = useState(1);
  const [loading, setloading] = useState(true);
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deletesModalOpen, setdeletesModalOpen] = useState(false);
  const [EditsModalOpen, setEditModalOpen] = useState(false);
  const [DetailsModalOpen, setDetailModalOpen] = useState(false);
  const [data, setData] = useState({});
  const [options, setOptions] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [postData, setPostData] = useState({
    id: "",
    name: "",
    description: "",
    image: "",
    courseTime: "",
    price: "",
    maxNumberOfStudents: "",
  });


  const SeleArtista=(artista , caso) => {
    setPostData(artista);
    (caso === "Editar")?showEditlModal():showDeletelModal()
  }




  // seach
  const mockVal = (str, repeat = 1) => ({
    value: str.repeat(repeat),
  });
  const getPanelValue = (searchText) =>
    !searchText ? [] : [mockVal(searchText)];
  const onSelect = (data) => {
    console.log("onSelect", data);
  };

  const showModal = () => {
    setIsModalOpen(!isModalOpen);
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

  useEffect(() => {
    getSearchData();
    getData();
  }, [searchValue]);

  // useEffect(() => {
  //   TotalPages(1)
  // }, []);
  // get data Danh Sach
  const getData = async () => {
    const { data } = await Axios.get(`https://x09-be.onrender.com/api/courses`)
    setloading(false);
    setData(
      data.courses.map((row) => ({
        name: row.name,
        description: row.description,
        price: row.price,
        id: row.id,
        image: row.image,
        courseTime:row.courseTime,
        classTime:row.classTime,
        maxNumberOfStudents:row.maxNumberOfStudents,
      }))
    );
  };
  // search
  const getSearchData = async () => {
    const { data } = await Axios.get(
      `https://x09-be.onrender.com/api/courses?keyword=${searchValue}`
    );
    setloading(false);
    setData(
      data.courses.map((row) => ({
        name: row.name,
        id: row.id,
        description: row.description,
        price: row.price,
      }))
    );
  };

  // const TotalPages = (index) => {
  //   setloading(true)
  //   Axios
  //     .get(`https://x09-be.onrender.com/api/courses?pageNumber=${index}`)
  //     .then((res) => {
  //       setData(res.data.courses)
  //       setPages(res.data.pages)
  //       setloading(false)
  //     })
  //   }
    
  
  //Chi Tiết
  // const getDetail = async (id) => {
  //   setOpen(true);
  //   const { data } = await Axios.get(
  //     `https://x09-be.onrender.com/api/courses/${id}`
  //   );
  //   setloading(false);
  //   setData(
  //     data.courses.map((row) => ({
  //       id: row.id,
  //       name: row.name,
  //       description: row.description,
  //       price: row.price,
  //       image:row.image,
  //       courseTime:row.courseTime,
  //       classTime:row.classTime,
  //       maxNumberOfStudents:row.maxNumberOfStudents
  //     }))
  //   );
  // };

  const handeChange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
    console.log(postData);
  };

  const PostlistData = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { newData } = await Axios.post(
      "https://x09-be.onrender.com/api/courses",
      postData,
      config,
      showModal()
    );

    setData(newData);
  };

  const HandlPut = async (id) => {
    await Axios.put( `https://x09-be.onrender.com/api/courses/${id}` , postData)
    .then(res => {
      var dataPut = data;
      dataPut.map(elemento =>{
        if(elemento.id === postData.id){
          elemento.name=postData.name;
          elemento.description=postData.description;
          elemento.image=postData.image;
          elemento.courseTime=postData.courseTime;
          elemento.classTime=postData.classTime;
          elemento.price=postData.price;
          elemento.maxNumberOfStudents=postData.maxNumberOfStudents;
        }
      })
      setData(dataPut);
      showEditlModal();
    }).catch(error => {
      console.log(error)
    })
  }


  const HandlDetail = async () => {
    const { data } = await Axios.get( baseUrl+'/'+ postData.id ,postData)
    setData(
      data.courses.map((row) => ({
        name: row.name,
        description: row.description,
        price: row.price,
        id: row.id,
        image: row.image,
        courseTime:row.courseTime,
        classTime:row.classTime,
        maxNumberOfStudents:row.maxNumberOfStudents,
      }))
    )
    showDetaillModal()
  }
  const HandlDelete = async () => {
    await Axios.delete(baseUrl + '/' + postData.id)
    .then(res => {
      setData(data.filter(elemento=> elemento.id!==postData.id));
      showDeletelModal();
    }).catch(error => {
      console.log(error)
    })
  }






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
          <Button onClick={HandlDetail}> Chi Tiết </Button>
          <Button onClick={()=>SeleArtista(fila,"Editar")}> Chỉnh Sửa   </Button>
          <Button onClick={()=>SeleArtista(fila,"Delete")}> xóa </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div className="SpaceandButton">
        <Space direction="vertical">
          <AutoComplete
            style={{
              width: 450,
            }}
            value={searchValue}
            options={options}
            onSelect={onSelect}
            onSearch={(text) => setOptions(getPanelValue(text))}
          >
            <Input.Search
              size="large"
              placeholder="nhập tìm kiếm"
              enterButton
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </AutoComplete>
        </Space>
        <Space>
          <Button type="primary" onClick={showModal} className="ButtonTM">
            Tạo Mới khóa học
          </Button>
        </Space>
      </div>
      <div>
        {loading ? (
          "Loading"
        ) : (
          <Table
          // pagination={{
          //   pageSize: 10,
          //   total: pages,
          //   onChange: (index) => {
          //     TotalPages(index);
          //   },
          // }}
            className="TableCS"
            columns={columns}
            dataSource={data}
            rowKey="id"
          ></Table>
        )}
        <br />
        {/* <Pagination  total={totalPages} pageSize={5} className="Pagination" onChange={getData} /> */}
        <br />
      </div>
      <Modal
        Key="id"
        visible={isModalOpen}
        title="Tạo Mới Khóa Học"
        destroyOnClose={true}
        onCancel={showModal}
        centered
        footer={[
          <Button onClick={showModal}>Thoát</Button>,
          <Button type="primary" onClick={PostlistData}>
            Lưu
          </Button>,
        ]}
      >
        <Form {...Layout}>
          <Item label="Mã Khóa Học " key="id">
            <Input name="id" onChange={handeChange} />
          </Item>

          <Item label=" Tên Khóa Học " key="name">
            <Input name="name" onChange={handeChange} />
          </Item>

          <Item label="Giá Khóa Học " key="price">
            <Input name="price" onChange={handeChange} />
          </Item>

          <Item label="Nội Dung Khóa Học " key="description">
            <Input.TextArea
              rows={4}
              name="description"
              placeholder="nhập nội dung khóa học "
              onChange={handeChange}
            />
          </Item>

          <Item label="Thời Lượng Khóa Học" key="courseTime">
            <Input name="courseTime" onChange={handeChange} />
          </Item>

          <Item label="Thời Lượng Giờ Học " key="classTime">
            <Input name="classTime" onChange={handeChange} />
          </Item>

          <Item label="Số học sinh " key="maxNumberOfStudents">
            <Input name="maxNumberOfStudents" onChange={handeChange} />
          </Item>

          <Item label="ảnh" key="image">
            <Input name="image" onChange={handeChange} />
          </Item>
        </Form>
      </Modal>

      <Modal
        Key="id"
        visible={deletesModalOpen}
        title="Tạo Mới Khóa Học"
        destroyOnClose={true}
        onCancel={showDeletelModal}
        centered
        footer={[
          <Button onClick={showDeletelModal}>Thoát</Button>,
          <Button type="primary"onClick={HandlDelete} >
            Lưu
          </Button>,
        ]}
      >
        bạn có muốn xóa ko <b>{postData && postData.id}</b>?
      </Modal>


      <Modal
        Key="id"
        visible={EditsModalOpen}
        title="Chỉnh sửa khóa học "
        onCancel={showEditlModal}
        centered
        footer={[
          <Button onClick={showEditlModal}>Thoát</Button>,
          <Button type="primary" onClick={HandlPut}>
            Lưu
          </Button>,
        ]}
      >
        <Form {...Layout}>
          <Item label="Mã Khóa Học " key="id">
            <Input name="id" onChange={handeChange} value={postData && postData.id} />
          </Item>

          <Item label=" Tên Khóa Học " key="name">
            <Input name="name" onChange={handeChange} value={postData && postData.name} />
          </Item>

          <Item label="Giá Khóa Học " key="price">
            <Input name="price" onChange={handeChange} value={postData && postData.price} />
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
            <Input name="courseTime" onChange={handeChange} value={postData && postData.courseTime} />
          </Item>

          <Item label="Thời Lượng Giờ Học " key="classTime">
            <Input name="classTime" onChange={handeChange} value={postData && postData.classTime} />
          </Item>

          <Item label="Số học sinh " key="maxNumberOfStudents">
            <Input name="maxNumberOfStudents" onChange={handeChange} value={postData && postData.maxNumberOfStudents}  />
          </Item>

          <Item label="ảnh" key="image">
            <Input name="image" onChange={handeChange} value={postData && postData.image} />
          </Item>
        </Form>
      </Modal>

      <Modal
        Key="id"
        visible={DetailsModalOpen}
        title="Tạo Mới Khóa Học"
        destroyOnClose={true}
        onCancel={showDetaillModal}
        centered
        footer={[
          <Button onClick={showDetaillModal}>Thoát</Button>,
        ]}
      >
        <Form {...Layout}>
          <Item label="Mã Khóa Học " key="id">
            <span name="id" onChange={handeChange} value={postData && postData.id} />
          </Item>

          <Item label=" Tên Khóa Học " key="name">
            <span name="name" onChange={handeChange} value={postData && postData.name} />
          </Item>

          <Item label="Giá Khóa Học " key="price">
            <span name="price" onChange={handeChange} value={postData && postData.price} />
          </Item>

          <Item label="Nội Dung Khóa Học " key="description">
            <span
              rows={4}
              name="description"
              placeholder="nhập nội dung khóa học "
              onChange={handeChange}
              value={postData && postData.description}
            />
          </Item>

          <Item label="Thời Lượng Khóa Học" key="courseTime">
            <span name="courseTime" onChange={handeChange} value={postData && postData.courseTime} />
          </Item>

          <Item label="Thời Lượng Giờ Học " key="classTime">
            <span name="classTime" onChange={handeChange} value={postData && postData.classTime} />
          </Item>

          <Item label="Số học sinh " key="maxNumberOfStudents">
            <span name="maxNumberOfStudents" onChange={handeChange} value={postData && postData.maxNumberOfStudents}  />
          </Item>

          <Item label="ảnh" key="image">
            <span name="image" onChange={handeChange} value={postData && postData.image} ></span>
          </Item>
        </Form>
      </Modal>

    </div>
  );
}
export default ListCourse;

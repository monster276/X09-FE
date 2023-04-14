import { React, useContext, useEffect,useState } from "react";
import Axios from "axios";
import "./Search.css";
import { ListContext } from "../ListClass/ListClass";
import { Space, Button, Input, AutoComplete, Modal, Form } from "antd";
const { Item } = Form;


const SearchClass = () => {
  const [ createModalOpen, setcreateModalOpen] = useState(false);
  const {
    setloading,
    setData,
    postData,
    setPostData,
    getData,
    options,
    searchValue,
    setOptions,
    setSearchValue,
    baseUrlClass,
    Layout,
  } = useContext(ListContext);

  useEffect(() => {
    getSearchData();
  }, [searchValue]);

  const mockVal = (str, repeat = 1) => ({
    value: str.repeat(repeat),
  });
  const getPanelValue = (searchText) =>
    !searchText ? [] : [mockVal(searchText)];
  const onSelect = (data) => {
    console.log("onSelect", data);
  };

  const getSearchData = async () => {
    const { data } = await Axios.get(
      `https://x09-be.onrender.com/api/classrooms?keyword=${searchValue}`
    );
    setloading(false);
    setData(
      data.classrooms.map((row) => ({
          _id: row._id,
          id: row.id,
          nameclass: row.name,
          fullname: row.user._id,
          fullname: row.user.fullName,
          location:row.location._id,
          location:row.location.name,
          course: row.course._id,
          course: row.course.name,
      }))
    );
  };
  const handleCreateCancel = () => {
    setcreateModalOpen(!createModalOpen);
  };
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
      baseUrlClass,
      postData,
      config,
      handleCreateCancel()
    );
    getData(newData);
  };

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
          <Button type="primary" onClick={handleCreateCancel} className="ButtonTM">
            Tạo Mới Lớp Học
          </Button>
        </Space>
        <Modal
            visible={createModalOpen}
            title="Tạo Mới Lớp Học "
            destroyOnClose={true}
            onCancel={handleCreateCancel}
            centered
            footer={[
              <Button onClick={handleCreateCancel}>Thoát</Button>,
              <Button type="primary" onClick={PostlistData}>
                Lưu
              </Button>,
            ]}
          >
            <Form {...Layout}>
              <Item label="Mã Lớp Học ">
                <Input name="id" onChange={handeChange} placeholder="nhập Mã Lớp Học " />
              </Item>

              <Item label=" Tên Lớp Học ">
                <Input name="name" onChange={handeChange}   placeholder="nhập Tên Lớp Học " />
              </Item>

              <Item label="Tên Giảng Viên">
                <Input name="user" onChange={handeChange}  placeholder="nhập Tên Giảng Viên "  />
              </Item>

              <Item label="Địa Chỉ Cơ Sở">
                <Input.TextArea
                  rows={4}
                  name="location"
                  placeholder="nhập địa Chỉ Cơ Sở "
                  onChange={handeChange}
                />
              </Item>
               <Item label=" Khóa Học">
                <Input name="course" onChange={handeChange}  placeholder="nhập Khóa Học " />
              </Item>

              <Item label=" Khóa Học">
                <Input name="startTime" onChange={handeChange}  placeholder="nhập Khóa Học " />
              </Item>

              <Item label=" Khóa Học">
                <Input name="endTime" onChange={handeChange}  placeholder="nhập Khóa Học " />
              </Item>

              <Item label=" Khóa Học">
                <Input name="numberOfLessons" onChange={handeChange}  placeholder="nhập Khóa Học " />
              </Item>

               <Item label=" Khóa Học">
                <Input name="classTime" onChange={handeChange}  placeholder="nhập Khóa Học " />
              </Item>
              <Item label=" Khóa Học">
                <Input name="schedule" onChange={handeChange}  placeholder="nhập Khóa Học " />
              </Item>

            </Form>
          </Modal>
      </div>
    </div>
  );
};

export default SearchClass;

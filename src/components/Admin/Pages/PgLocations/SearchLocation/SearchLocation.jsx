import { React, useContext, useEffect,useState } from "react";
import Axios from "axios";
import "./SearchLocation.css";
import { ListContext } from "../ListLocation/ListLocation";
import { Space, Button, Input, AutoComplete, Modal, Form } from "antd";
const { Item } = Form;


const SearchLocation = () => {
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
    baseUrlLocations,
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
      `https://x09-be.onrender.com/api/locations?keyword=${searchValue}`
    );
    setloading(false);
    setData(
      data.locations.map((row) => ({
        name: row.name,
        id: row.id,
        status: row.status,
        address: row.address,
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
      baseUrlLocations,
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
          <Button type="primary" onClick={handleCreateCancel} className="ButtonTM" Key="id" >
            Tạo Mới Cở Sở
          </Button>
        </Space>
        <Modal
            visible={createModalOpen}
            title="Tạo Mới Cở Sở"
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
              <Item label="Mã Cơ Sở ">
                <Input name="id" onChange={handeChange}  placeholder="Nhập Mã Cở Sở " />
              </Item>

              <Item label=" Tên Cở Sở ">
                <Input name="name" onChange={handeChange}  placeholder=" Nhập Tên Cở Sở " />
              </Item>

              <Item label="Trạng Thái Cở cở">
                <Input name="status" onChange={handeChange}  placeholder="Trạng Thái Cơ Sở"  />
              </Item>

              <Item label=" Địa Chỉ Cở Sở">
                <Input.TextArea
                  rows={4}
                  name="address"
                  placeholder="nhập Địa Chỉ Cở Sở "
                  onChange={handeChange}
                />
              </Item>
            </Form>
          </Modal>
      </div>
    </div>
  );
};

export default SearchLocation;

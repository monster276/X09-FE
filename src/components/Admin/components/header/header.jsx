import React from "react";
import "./header.css";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space, Typography, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../../redux/apiRequest";
import { createAxios } from "../../../../createInstance";
import { logOutSuccess } from "../../../../redux/authSlice";
function Header() {
  const user = useSelector((state) => state.auth.login.currentUser);
  console.log(user)
  const accessToken = user?.accessToken;
  const id = user?._id;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let axiosJWT = createAxios(user, dispatch, logOutSuccess);
  const handleLogout = () =>{
    logOut(dispatch,id,navigate, accessToken,axiosJWT);
  }
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", width: "100%", background: "white" }}>
        <p style={{color:"black", fontWeight:"bold", fontSize:"20px", paddingLeft:"15px"}}>EVO EDU</p>
        <p className="navbar-user" style={{ color: "black", fontSize: "18px" }}>Hi, <span style={{ color: "red" }}>  {user.username} </span> </p>
          <Link to="/">
            <Button onClick={handleLogout} className="Buttonheader" style={{paddingRight:"15px"}}>Đăng Xuất</Button>
          </Link>
        </div>
      
    </>
  );
}

export default Header;

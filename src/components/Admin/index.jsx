import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { createAxios } from "../../createInstance";
import { getAllUsers } from "../../redux/apiRequest";
import { loginSuccess } from "../../redux/authSlice";

export default function Index(props) {
    const user = useSelector((state) => state.auth.login?.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let axiosJWT = createAxios(user, dispatch, loginSuccess);

 useEffect(() => {
    if (!user) {
      Navigate("/login");
    }
    if (user?.accessToken) {
      getAllUsers(user?.accessToken, dispatch,axiosJWT);
    }
  }, []);
    return <h1>This page for admin</h1>
}


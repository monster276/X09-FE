import React from 'react';
import {  BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import Home from '../Pages/home/home';
import DSCS from '../Pages/QLCS/DSCS';
import DSGV from '../Pages/QLGV/DSGV';
import DSLH from '../Pages/QLLH/DSLH';
import DSKH from '../Pages/QLKH/DSKH';



function RoutesPage() {
  return (
    
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/DSCoSo' element={<DSCS/>}></Route>
          <Route path='/DSGV' element={<DSGV/>}></Route>
          <Route path='/DSKH' element={<DSLH></DSLH>}></Route>
          <Route path='/DSDK' element={<DSKH></DSKH>}></Route>
      </Routes>
  
  );
}

export default RoutesPage;

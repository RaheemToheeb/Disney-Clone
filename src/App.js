import React from "react"
// import styled from "styled-components"
import Header from  './Component/Header/header'
import Home from "./Component/Homecomponent/Homecomponent"
import Viewers from "./Component/Viewers/viewers"
import Detail from './Component/Details/details'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div >
   <BrowserRouter>
   <Header/>
     
     
   <Routes>
     <Route path="/" element={ <Home/>} />
     <Route path="/viwers" element={  <Viewers/>} />
     <Route path="/detail/:id" element={  <Detail/>} />
   </Routes>
   </BrowserRouter>

    </div>
  );
}

export default App;

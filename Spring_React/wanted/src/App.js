/*
Name : App.js
Title : Clone Coding https://www.wanted.co.kr/

Development Environment
- Device : DESKTOP-CDDOSTE
- Processor : 11th Gen Intel(R) Core(TM) i5-1135G7 @ 2.40GHz   2.42 GHz
- RAM : 16.0GB
- Windows 10 Pro
- Window x64
*/

import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import LayOut from "./pages/LayOut";
import Main from "./pages/Main";
import Login from "./pages/Login";

import Lab from "./pages/Lab";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import ServiceCenter from "./pages/ServiceCenter";
import Detail from "./pages/Detail";
import AllContents from "./pages/AllContents";

import Test from "./pages/Test";
import Bookmark from "./pages/Bookmark";

const App = () => {
  return (
    <Routes>
      <Route element={<LayOut />}>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<AllContents />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/lab" element={<Lab />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/servicecenter" element={<ServiceCenter />} />
        <Route path="/bookmark" element={<Bookmark />} />

        <Route path="/test" element={<Test />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;

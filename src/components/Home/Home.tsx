import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Main from "./Main";

const Home = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/main" element={<Main />} />
      </Routes>
    </>
  );
};

export default Home;


//importing react library from react to this js file
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from "./Footer";

const Main = () => {
  return (
    <div>
        {/* Rendering the header componenets */}
        <Header />
        <Outlet />
        <Footer />
    </div>
  );
};

export default Main;




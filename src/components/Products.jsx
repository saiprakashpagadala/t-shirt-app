import React from "react";
import SideBar from "./SideBar";
import Search from "./Search";
import "./Products.css";
import Cards from "./Cards";

const Products = () => {
  return (
    <>
      <div className="main-content">
        <SideBar />
        <div className="products">
          <Search />
          <Cards />
        </div>
      </div>
    </>
  );
};

export default Products;

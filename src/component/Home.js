import React from "react";
import data from "../data.js/data";
import ProductPage from "./ProductPage";
import "./home.css";

const Home = () => {
  return (
    <>
      <h1 className="category-name">Category name</h1>
      <section className="">
        <div className="">
          {data.productData.map((item, index) => {
            return (
              <ProductPage
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
                item={item}
                key={index}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;

import React from "react";
import img1 from "../assets/img/product1.png";
import img2 from "../assets/img/product2.png";
import img3 from "../assets/img/product3.png";
import img4 from "../assets/img/product4.png";
import ProductCard from "../layouts/ProductCard";

const Product = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold mt-24 lg:mt-14 text-center lg:text-start">
       Our Products
      </h1>
      <p className=" mt-2 text-center lg:text-start">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure excepturi
        corporis veritatis eum molestias facere.
      </p>
      <div className=" flex flex-col lg:flex-row gap-4 mt-4">
        <ProductCard img={img1} val="$599" />
        <ProductCard img={img2} val="$499" />
        <ProductCard img={img3} val="$499" />
        <ProductCard img={img4} val="$399" />
      </div>
    </div>
  );
};

export default Product;

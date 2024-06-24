import React, { useContext } from "react";
import Layout from "../../compoents/Layout/Layout";
import myContext from "../../context/data/MyContext";
import HeroSection from "../../compoents/herosection/HeroSection";
import Filter from "../../compoents/Filter/Filter";
import ProductCard from "../../compoents/ProductCard/ProductCard";
import Testimonals from "../../compoents/Testimonals/Testimonals";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/CartSlice";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <Filter />
      <ProductCard />
      <div className="flex justify-center ">
        <Link to={"/allproducts"}>
          <button className="bg-gray-400 p-2 rounded-lg">Explore?</button>
        </Link>
      </div>
      <Testimonals />
    </Layout>
  );
};

export default Home;

import React, { useContext } from "react";
import Layout from "../../compoents/Layout/Layout";
import myContext from "../../context/data/MyContext";
import HeroSection from "../../compoents/herosection/HeroSection";
import Filter from "../../compoents/Filter/Filter";
import ProductCard from "../../compoents/ProductCard/ProductCard";
import Testimonals from "../../compoents/Testimonals/Testimonals";
import { Link } from "react-router-dom";
import backgroundVideo from "../../assets/star-moving.mp4";

const Home = () => {
  const context = useContext(myContext);
  const { mode } = context;

  return (
    <Layout>
      <div className="relative flex flex-col items-center justify-center">
        <video
          autoPlay
          loop
          muted
          className="absolute z-0 w-full h-full object-cover"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="relative z-10 w-full">
          <HeroSection />
          <Filter />
          <ProductCard />
          <div className="flex justify-center mt-4">
            <Link to={"/allproducts"}>
              <button
                className="p-2 rounded-lg"
                style={{
                  backgroundColor: mode === "dark" ? "white" : "black",
                  color: mode === "dark" ? "black" : "white",
                }}
              >
                Explore?
              </button>
            </Link>
          </div>
          <Testimonals />
        </div>
      </div>
    </Layout>
  );
};

export default Home;

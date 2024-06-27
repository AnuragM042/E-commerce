import React, { useContext } from "react";
import myContext from "../../context/data/MyContext";
import { RxAvatar } from "react-icons/rx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonals = () => {
  const context = useContext(myContext);
  const { mode } = context;

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const testimonalsData = [
    {
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, cupiditate! Doloremque accusamus Accusantium eaque saepe maxime dicta, explicabo aperiam, consectetur ipsam deserunt labore dolor libero aliquam quaerat ullam a unde.",
      userName: "Demo User Name 1",
      userInfo: "Demo Info 1",
    },
    {
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, cupiditate! Doloremque accusamus Accusantium eaque saepe maxime dicta, explicabo aperiam, consectetur ipsam deserunt labore dolor libero aliquam quaerat ullam a unde.",
      userName: "Demo User Name 2",
      userInfo: "Demo Info 2",
    },
    {
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, cupiditate! Doloremque accusamus Accusantium eaque saepe maxime dicta, explicabo aperiam, consectetur ipsam deserunt labore dolor libero aliquam quaerat ullam a unde.",
      userName: "Demo User Name 3",
      userInfo: "Demo Info 3",
    },
    // Add more testimonial data here if needed
  ];

  return (
    <div
      className="mt-5  py-10 opacity-100"
      style={{ color: mode === "dark" ? "black" : "" }}
    >
      <div>
        <h1
          className="text-center font-bold text-2xl mb-10"
          style={{ color: mode === "dark" ? "white" : "brown" }}
        >
          Testimonials
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-[1200px]">
          <Slider {...settings}>
            {testimonalsData.map((testimonal, index) => (
              <div key={index} className="px-2">
                <div className="bg-slate-400 bg-opacity-60 rounded-lg shadow-lg p-6 h-full flex flex-col items-center text-center space-y-2">
                  <div className="flex items-center justify-center">
                    <RxAvatar size={50} />
                  </div>
                  <p style={{ color: mode === "dark" ? "black" : "" }}>
                    {testimonal.content}
                  </p>
                  <div className="font-extrabold">----------------</div>
                  <div>
                    <p>{testimonal.userName}</p>
                    <p>{testimonal.userInfo}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonals;

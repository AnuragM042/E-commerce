import React, { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import myContext from "../../context/data/MyContext";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../redux/CartSlice";

gsap.registerPlugin(ScrollTrigger);

function ProductCard() {
  const context = useContext(myContext);
  const {
    mode,
    product,
    searchkey = "",
    filterType = "",
    filterPrice = "",
  } = context;

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const cardsRef = useRef([]);
  cardsRef.current = [];

  const addCart = (product) => {
    const isProductInCart = cartItems.some((item) => item.id === product.id);
    if (isProductInCart) {
      toast.error("Already added");
    } else {
      dispatch(addToCart(product));
      toast.success("Added to your Ship");
    }
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const filteredProducts = product
    .filter((obj) => obj.title.toLowerCase().includes(searchkey.toLowerCase()))
    .filter((obj) =>
      obj.category.toLowerCase().includes(filterType.toLowerCase())
    )
    .filter((obj) =>
      filterPrice ? parseFloat(obj.price) === parseFloat(filterPrice) : true
    )
    .slice(0, 4);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, [filteredProducts]);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const handleCardClick = (id, card) => {
    gsap.to(card, {
      backgroundColor: mode === "dark" ? "black" : "white",
      color: mode === "dark" ? "white" : "black",
      duration: 0.6,
      ease: "power1.inOut",
      onComplete: () => {
        setTimeout(() => {
          window.location.href = `/productinfo/${id}`;
        }, 1000);
      },
    });
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 md:py-16 mx-auto flex flex-col items-center justify-center">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
          <h1
            className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
            style={{ color: mode === "dark" ? "white" : "Red" }}
          >
            Check out the Goodies
          </h1>
          <div
            className="h-1 w-28   rounded"
            style={{ backgroundColor: mode === "dark" ? "white" : "red" }}
          ></div>
        </div>

        <div className="flex -m-4 overflow-x-auto">
          {filteredProducts.map((item, index) => {
            const { title, price, description, imageUrl, category, id } = item;
            return (
              <div
                key={index}
                className="p-2"
                ref={addToRefs}
                onClick={() => handleCardClick(id, cardsRef.current[index])}
              >
                <div
                  className="h-full w-[300px] border-2 border-black hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-opacity-60 rounded-2xl overflow-hidden"
                  style={{
                    backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                    color: mode === "dark" ? "white" : "",
                  }}
                >
                  <div className="flex justify-center cursor-pointer">
                    <img
                      className="rounded-2xl w-[280px] h-80 p-2 hover:scale-105 transition-scale-110 duration-300 ease-in-out"
                      src={imageUrl}
                      alt="product"
                    />
                  </div>
                  <div className="p-5 border-t-2 cursor-pointer">
                    <h2
                      className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      {category}
                    </h2>
                    <h1
                      className="title-font text-lg font-medium text-gray-900 mb-3"
                      style={{ color: mode === "dark" ? "white" : "red" }}
                    >
                      {title}
                    </h1>
                    <p
                      className="leading-relaxed mb-3"
                      style={{ color: mode === "dark" ? "white" : "blue" }}
                    >
                      ₹ {price}
                    </p>
                    <div className="flex justify-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          addCart(item);
                        }}
                        type="button"
                        className="text-white bg-black font-medium rounded-lg text-sm w-full py-2"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProductCard;

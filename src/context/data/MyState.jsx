import React, { useEffect, useState } from "react";
import MyContext from "./MyContext";
import {
  QuerySnapshot,
  Timestamp,
  addDoc,
  collection,
  doc,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { fireDB } from "../../firebase/FirebaseConfig";

const MyState = (props) => {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgba(12, 25, 39)";
      document.body.style.color = "white"; // For changing text color
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black"; // For changing text color
    }
  };

  const [loading, setLoading] = useState(false);

  const [products, setProducts] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time: Timestamp.now,
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  const addProduct = async () => {
    if (
      products.title == null ||
      products.price == null ||
      products.imageUrl == null ||
      products.category == null ||
      products.description == null
    ) {
      toast.error("Please Fill ALl Fields ");
    }
    setLoading(true);

    try {
      const productRef = collection(fireDB, "products");
      await addDoc(productRef, products);
      toast.success("Products Added");
      getProductData();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const [product, setProduct] = useState([]);

  const getProductData = async () => {
     setLoading(true)
    try {
      const q = query(collection(fireDB, "products"), orderBy("time"));

      const data = onSnapshot(1, (QuerySnapshot) => {
        let productArray = [];
        QuerySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id });
        });
        setProduct(productArray);
        setLoading(false)
      });

      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  };



 useEffect(() => {
  getProductData
 }, []);

  return (
    <MyContext.Provider value={{ mode, toggleMode, loading, setLoading,
      products,setProducts,addProduct,product
     }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default MyState;

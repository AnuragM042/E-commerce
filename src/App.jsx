import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Order from "./pages/Order/Order";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Cart from "./pages/cart/Cart";
import NoPage from "./pages/nopage/NoPage";
import MyState from "./context/data/MyState";
import Login from "./pages/Registration/Login";
import Signup from "./pages/Registration/Signup";
import Fancy from "./pages/Registration/Fancy";
import Productinfo from "./pages/productinfo/Productinfo";
import Modal from "./compoents/modal/Modal";
import AddProduct from "./pages/admin/page/AddProduct";
import UpdateProduct from "./pages/admin/page/UpdateProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllProducts from "./pages/allprodcts/AllProducts";

function App() {
  return (
    <>
      <MyState>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/allproducts" element={<AllProducts />} />
            {/*for Users*/}
            <Route
              path="/order"
              element={
                <ProtectedRoute>
                  <Order />
                </ProtectedRoute>
              }
            />
            <Route path="/cart" element={<Cart />} />

            {/*For Admins */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRouteForAdmin>
                  <Dashboard />
                </ProtectedRouteForAdmin>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* For Admins  */}
            <Route
              path="/productinfo/:id"
              element={
                <ProtectedRouteForAdmin>
                  <Productinfo />
                </ProtectedRouteForAdmin>
              }
            />
            <Route path="/modal" element={<Modal />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/fancy" element={<Fancy/>} />
            <Route path="/updateproduct" element={<UpdateProduct />} />
            <Route path="/*" element={<NoPage />} />
          </Routes>
          <ToastContainer />
        </Router>
      </MyState>
    </>
  );
}

export default App;

// User
export const ProtectedRoute = ({ children }) => {
  const user = loacalStorage.getItem("user");
  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

// admin

const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));

  if (admin.user.email === "anurazzz.mishra098@gmail.com") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

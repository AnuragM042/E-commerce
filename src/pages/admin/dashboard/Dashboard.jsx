import React, { useContext, useEffect, useState } from "react";
import { FaUserTie } from "react-icons/fa";
import MyContext from "../../../context/data/MyContext";
import Layout from "../../../compoents/Layout/Layout";
import DashboardTab from "./DashboardTab";

function Dashboard() {
  const context = useContext(MyContext);
  const { mode, product, order, user } = context;

  const [totalProducts, setTotalProducts] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    setTotalProducts(product.length);
    setTotalOrders(order.length);
    setTotalUsers(user.length);
  }, [product, order, user]);

  const textColor = mode === "dark" ? "white" : "black";
  const iconColor = mode === "dark" ? "blue-400" : "blue-600";
  const shadowColor = mode === "dark" ? "shadow-blue-600" : "shadow-blue-300";
  const backgroundColor = mode === "dark" ? "rgb(46 49 55)" : "bg-gray-100";

  return (
    <Layout>
      <section className="text-gray-600 body-font mt-10 mb-10 min-h-screen max-h-full">
        <div className="container px-5 mx-auto mb-10">
          <div className="flex flex-wrap -m-4 text-center justify-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div
                className={`border-2 hover:${shadowColor} shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] ${backgroundColor} border-gray-300 px-4 py-3 rounded-xl`}
                style={{ color: textColor }}
              >
                <div
                  className={`text-${iconColor} w-12 h-12 mb-3 inline-block`}
                  viewBox="0 0 24 24"
                >
                  <FaUserTie size={50} />
                </div>
                <h2
                  className="title-font font-medium text-3xl fonts1"
                  style={{ color: textColor }}
                >
                  {totalProducts}
                </h2>
                <p className="font-bold" style={{ color: textColor }}>
                  Total Products
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div
                className={`border-2 hover:${shadowColor} shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] ${backgroundColor} border-gray-300 px-4 py-3 rounded-xl`}
                style={{ color: textColor }}
              >
                <div
                  className={`text-${iconColor} w-12 h-12 mb-3 inline-block`}
                  viewBox="0 0 24 24"
                >
                  <FaUserTie size={50} />
                </div>
                <h2
                  className="title-font font-medium text-3xl fonts1"
                  style={{ color: textColor }}
                >
                  {totalOrders}
                </h2>
                <p className="font-bold" style={{ color: textColor }}>
                  Total Orders
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div
                className={`border-2 hover:${shadowColor} shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] ${backgroundColor} border-gray-300 px-4 py-3 rounded-xl`}
                style={{ color: textColor }}
              >
                <div
                  className={`text-${iconColor} w-12 h-12 mb-3 inline-block`}
                  viewBox="0 0 24 24"
                >
                  <FaUserTie size={50} />
                </div>
                <h2
                  className="title-font font-medium text-3xl fonts1"
                  style={{ color: textColor }}
                >
                  {totalUsers}
                </h2>
                <p className="font-bold" style={{ color: textColor }}>
                  Total Users
                </p>
              </div>
            </div>
          </div>
        </div>
        <DashboardTab />
      </section>
    </Layout>
  );
}

export default Dashboard;

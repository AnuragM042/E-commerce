import React, { useState } from "react";
import backgroundVideo from "../../assets/star-moving.mp4";
import { NavLink } from "react-router-dom";
import { fireDB } from "../../firebase/FirebaseConfig";
import { addDoc, collection } from "firebase/firestore";

const Fancy = () => {
  const [name, setName] = useState("");
  const [comments, setComments] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCommentsChange = (e) => {
    setComments(e.target.value);
  };

  const handleSendMessage = async () => {
    // Prepare data object to be stored in Firestore
    const messageData = {
      name: name,
      comments: comments,
      timestamp: new Date().toISOString(), // Optional: Timestamp of the submission
    };

    try {
      // Add the messageData to Firestore
      const docRef = await addDoc(collection(fireDB, "messages"), messageData);
      console.log("Document written with ID: ", docRef.id);

      // Clear input fields after successful submission
      setName("");
      setComments("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="relative flex h-screen w-full items-center justify-center">
      <video
        autoPlay
        loop
        muted
        className="absolute z-0 w-full h-screen object-cover transform rotate-0"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      {/* Task  here */}
      <div className="w-[70%] h-[700px] bg-slate-500 bg-opacity-10 rounded-xl backdrop-blur-3xl text-white p-10">
        <h1 className="text-2xl text-center">Welcome to Star-Merchs</h1>
        <div className="flex flex-col mt-5 space-y-5">
        
          {/* Additional Links */}
          <div className="flex flex-col mt-4 space-y-4">
            <NavLink
              to="/"
              className="text-xl font-bold hover:shadow-lg focus:outline-none"
              activeClassName="text-blue-500"
            >
              Home
            </NavLink>
            <NavLink
              to="/dashboard"
              className="text-xl font-bold hover:shadow-lg focus:outline-none"
              activeClassName="text-blue-500"
            >
              Admin
            </NavLink>
            <NavLink
              to="/allproducts"
              className="text-xl font-bold hover:shadow-lg focus:outline-none"
              activeClassName="text-blue-500"
            >
              All Products
            </NavLink>
            <NavLink
              to="/login"
              className="text-xl font-bold hover:shadow-lg focus:outline-none"
              activeClassName="text-blue-500"
            >
              Logout
            </NavLink>
          </div>
          <p>
            <h2>Welcome to Star Wars Merchs</h2>
            <p>
              Explore the galaxy of Star Wars like never before at Star Wars
              Merchs. Step into a universe filled with legendary heroes, iconic
              battles, and timeless adventures. Whether you're a Jedi Knight, a
              daring smuggler, or a loyal droid, our shop is your gateway to an
              unparalleled collection of Star Wars merchandise.
            </p>
          </p>
          <div className="flex flex-col gap-4 ">
            {/* Name Input */}
            <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Your Name"
            className="p-2 rounded-lg text-black border border-gray-300 focus:outline-none"
            style={{ width: "100%", maxWidth: "50%", margin: "auto" }}
          />
          {/* Comments Input */}
          <textarea
            value={comments}
            onChange={handleCommentsChange}
            placeholder="Your Comments..."
            className="p-2 rounded-lg text-black border mt-3 border-gray-300 focus:outline-none"
            style={{
              width: "100%",
              maxWidth: "50%",
              margin: "auto",
              resize: "vertical",
            }}
            rows={4}
          />
          {/* Send Button */}
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
            style={{ width: "50%", maxWidth: "25%", margin: "auto" }}
          >
            Send Message
          </button>
        </div>
          <p className="text-sm">
            This is a beta version and a personal project. Please leave some
            comments so I can improve.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Fancy;

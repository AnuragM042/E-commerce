import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import background from "../../assets/Starwars-background2.webp";
import logo from "../../assets/Starwars-logo2.webp";
import backgroundVideo from "../../assets/republic-symbol2.mp4";
import myContext from "../../context/data/MyContext";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import Loader from "../../compoents/loader/Loader";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const context = useContext(myContext);
  const { loading, setLoading } = context;

  const signup = async (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      return toast.error("Please fill all details");
    }
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential);

      const user = {
        name: name,
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        time: Timestamp.now(),
      };

      const userRef = collection(fireDB, "users");
      await addDoc(userRef, user);
      toast.success("User created successfully");
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <Loader />}
     
        <div
          className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat"
          // style={{ backgroundImage: `url(${background})` }}
        >
            <video
          autoPlay
          loop
          muted
          className="absolute z-0 w-full h-full object-cover"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="absolute z-10 flex h-screen w-full items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="relative rounded-xl bg-transparent px-8 py-10 md:px-16 lg:px-24 xl:px-32 max-sm:px-4">
            <div className="text-white">
              <div className="mb-8 flex flex-col items-center">
                <img
                  src={logo}
                  className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
                  alt="Starwars Logo"
                />
                <h1 className="mb-2 text-xl md:text-2xl lg:text-3xl">Starwars</h1>
                <span className="text-gray-300 text-sm md:text-base lg:text-lg">
                  Enter Signup Details
                </span>
              </div>
              <form onSubmit={signup}>
                <div className="mb-4 text-base md:text-lg">
                  <input
                    className="w-full rounded-3xl border-none bg-slate-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-100 shadow-lg outline-none backdrop-blur-md"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="Name"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4 text-base md:text-lg">
                  <input
                    className="w-full rounded-3xl border-none bg-slate-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-100 shadow-lg outline-none backdrop-blur-md"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    placeholder="id@email.com"
                  />
                </div>
                <div className="mb-4 text-base md:text-lg relative">
                  <input
                    className="w-full rounded-3xl border-none bg-slate-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-100 shadow-lg outline-none backdrop-blur-md"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    placeholder="*********"
                  />
                  <div className="absolute right-5 top-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </div>
                </div>
                <div className="mt-8 flex justify-center text-base md:text-lg text-black">
                  <button
                    type="submit"
                    className="rounded-3xl bg-slate-400 bg-opacity-50 px-6 py-2 md:px-10 md:py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
                  >
                    Signup
                  </button>
                </div>
                <div className="flex gap-2 mt-4">
                  <p>Have an account?</p>
                  <Link to={"/login"}>
                    <span className=" font-bold underline cursor-pointer">
                      Log in
                    </span>
                  </Link>
                </div>
              </form>
            </div>
            </div>
          </div>
        </div>
     
    </div>
  );
};

export default Signup;

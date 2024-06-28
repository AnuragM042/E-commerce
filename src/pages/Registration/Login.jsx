import React, { useContext, useState, useEffect, useRef } from "react";
import logo from "../../assets/Starwars-logo.webp";
import backgroundVideo from "../../assets/real-background2.mp4";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/data/MyContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/FirebaseConfig";
import { toast } from "react-toastify";
import Loader from "../../compoents/loader/Loader";

const Login = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const login = async () => {
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login Successful");
      localStorage.setItem("user", JSON.stringify(result));
      navigate('/home');
    } catch (error) {
      console.log(error);
      toast.error("Sign in Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
       
      {/* {loading && <Loader />} */}
      <div className="relative flex h-screen w-full items-center justify-center">
      <video
  autoPlay
  loop
  muted
  className="absolute z-0 w-full h-full object-cover transform rotate-0"
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
                  Enter Login Details
                </span>
              </div>
              <form action="#">
                <div className="mb-4 text-base md:text-lg">
                  <input
                    className="w-full rounded-3xl border-none bg-slate-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-100 shadow-lg outline-none backdrop-blur-md"
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
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
                    {showPassword ? <AiFillEyeInvisible className="text-black" /> : <AiFillEye className="text-black" />}
                  </div>
                </div>
                <div className="mt-8 flex justify-center text-base md:text-lg text-black">
                  <button
                    onClick={login}
                    type="button"
                    className="rounded-3xl bg-slate-400 bg-opacity-50 px-6 py-2 md:px-10 md:py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
                  >
                    Login
                  </button>
                </div>
                <div className="flex gap-2 mt-4">
                  <p>Dont have an Account??</p>
                  <Link to={"/signup"}>
                    <span className=" font-bold underline cursor-pointer">
                      Sign in
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

export default Login;

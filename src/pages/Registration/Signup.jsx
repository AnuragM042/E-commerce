import React from 'react'
import { Link } from 'react-router-dom';
import background from "../../assets/Starwars-background2.webp";
import logo from "../../assets/Starwars-logo2.webp";

const Signup = () => {
  return (
    <div>
         <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat" style={{ backgroundImage: `url(${background})` }}>
      <div className="rounded-xl bg-gray-800 bg-opacity-50 px-8 py-10 shadow-lg backdrop-blur-md md:px-16 lg:px-24 xl:px-32 max-sm:px-4">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <img src={logo} className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40" alt="Starwars Logo" />
            <h1 className="mb-2 text-xl md:text-2xl lg:text-3xl">Starwars</h1>
            <span className="text-gray-300 text-sm md:text-base lg:text-lg">Enter Signup Details</span>
          </div>
          <form action="#">
            <div className="mb-4 text-base md:text-lg">
              <input className="w-full rounded-3xl border-none bg-slate-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-100 shadow-lg outline-none backdrop-blur-md" type="text" name="email" placeholder="id@email.com" />
            </div>
            <div className="mb-4 text-base md:text-lg">
              <input className="w-full rounded-3xl border-none bg-slate-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-100 shadow-lg outline-none backdrop-blur-md" type="password" name="password" placeholder="*********" />
            </div>
            <div className="mt-8 flex justify-center text-base md:text-lg text-black">
              <button type="submit" className="rounded-3xl bg-slate-400 bg-opacity-50 px-6 py-2 md:px-10 md:py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">Login</button>
            </div>
            <div className='flex gap-2 '>
            <p>Have an Account ?</p>
            <Link to={'/login'}>
            <span className='text-red-500 underline cursor-pointer'>Login in </span>
            </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Signup
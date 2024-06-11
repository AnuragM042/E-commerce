import React, { useContext } from 'react'
import myContext from '../../context/data/MyContext'
import { RxAvatar } from "react-icons/rx";

const Testimonals = () => {
    const context = useContext(myContext)
    const {mode} = context
  return (
       <div className='mt-5'>
            <div>
              <h1 className='text-center font-bold text-2xl'>Testimonals</h1>
            </div>
           {/* Reviews */}
          <div className='flex flex-wrap items-center justify-center'>
      <div className='w-full max-w-[300px] p-4   text-center space-y-2 flex flex-col ' style={{color:mode ==='dark'?'white':''}} >
        {/* Image / Icon*/}
        <div className='flex items-center justify-center'>
        <RxAvatar size={50}/>
        </div>
        {/* Paragraph */}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, cupiditate! Doloremque accusamus 
           <span className='font-bold'> Accusantium</span> eaque saepe maxime dicta, explicabo aperiam, consectetur ipsam deserunt labore dolor libero aliquam quaerat ullam a unde.</p>
         <div className="font-extrabold">----------------</div>
         {/* Username */}
         <div>
            <p>Demo User Name</p>
            <p>Demo Info</p>
         </div>
    </div>
    {/* 2nd */}
    <div className='w-full max-w-[300px] p-4   text-center space-y-2 flex flex-col ' style={{color:mode ==='dark'?'white':''}} >
        {/* Image / Icon*/}
        <div className='flex items-center justify-center'>
        <RxAvatar size={50}/>
        </div>
        {/* Paragraph */}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, cupiditate! Doloremque accusamus 
           <span className='font-bold'> Accusantium</span> eaque saepe maxime dicta, explicabo aperiam, consectetur ipsam deserunt labore dolor libero aliquam quaerat ullam a unde.</p>
         <div className="font-extrabold">----------------</div>
         {/* Username */}
         <div>
            <p>Demo User Name</p>
            <p>Demo Info</p>
         </div>
    </div> 
    {/* 3rd */}
    <div className='w-full max-w-[300px] p-4   text-center space-y-2 flex flex-col ' style={{color:mode ==='dark'?'white':''}} >
        {/* Image / Icon*/}
        <div className='flex items-center justify-center'>
        <RxAvatar size={50}/>
        </div>
        {/* Paragraph */}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, cupiditate! Doloremque accusamus 
           <span className='font-bold'> Accusantium</span> eaque saepe maxime dicta, explicabo aperiam, consectetur ipsam deserunt labore dolor libero aliquam quaerat ullam a unde.</p>
         <div className="font-extrabold">----------------</div>
         {/* Username */}
         <div>
            <p>Demo User Name</p>
            <p>Demo Info</p>
         </div>
    </div>
  </div>
       </div>
  )
}

export default Testimonals;
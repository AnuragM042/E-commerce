import React, { useContext } from 'react'
import Layout from '../../compoents/Layout/Layout'
import myContext from '../../context/data/MyContext'
import HeroSection from '../../compoents/herosection/HeroSection'
import Filter from '../../compoents/Filter/Filter'
import ProductCard from '../../compoents/ProductCard/ProductCard'
import Testimonals from '../../compoents/Testimonals/Testimonals'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../../redux/CartSlice'

const Home = () => {
  const dispatch = useDispatch();
 const cartItem = useSelector((state)=> state.cart)
 console.log(cartItem)

 const addCart = () =>{
  dispatch(addToCart("shirt"));
 }
const deleteCart = () => {
  dispatch(deleteFromCart("shirt"))
}

  return (
   <Layout>
    <div className='flex gap-5 '>
      <button onClick={()=> addCart()}>add</button>
      <button onClick={() => deleteCart()}>delete</button>
    </div>
     <HeroSection />
     <Filter />
     <ProductCard/>
     <Testimonals />
   
   </Layout>
  )
}

export default Home
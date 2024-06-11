import React, { useContext } from 'react'
import Layout from '../../compoents/Layout/Layout'
import myContext from '../../context/data/MyContext'
import HeroSection from '../../compoents/herosection/HeroSection'
import Filter from '../../compoents/Filter/Filter'
import ProductCard from '../../compoents/ProductCard/ProductCard'
import Testimonals from '../../compoents/Testimonals/Testimonals'

const Home = () => {
 
  return (
   <Layout>
     <HeroSection />
     <Filter />
     <ProductCard/>
     <Testimonals />
   
   </Layout>
  )
}

export default Home
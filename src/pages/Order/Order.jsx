import React, { useContext } from 'react'
import Layout from '../../compoents/Layout/Layout'
import myContext from '../../context/data/MyContext';

const Order = () => {
  const context = useContext(myContext);
  const {name,rollno} = context
  return (
    <Layout>
     <p>Order</p>
    </Layout>
  )
}

export default Order
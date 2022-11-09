import React from 'react'
import hamburger from '../../assets/Hamb.png';
import Promotion from './homeComponents/Promotion';
import Categorys from '../partials/Categorys';
import Products from './homeComponents/Products';

const Home = () => {
  return (
    <div className='px-10 py-28 lg:p-28 '>
      <div className='flex gap-y-5 flex-col md:flex-row flex-wrap justify-between'>
        <Promotion img = {hamburger} name ='Hamburger' desc = "20% off" />
        <Promotion img = {hamburger} name ='Hamburger' desc = "20% off" />
        <Promotion img = {hamburger} name ='Hamburger' desc = "20% off" />
      </div>
      <Categorys />
      <Products url="/products" />
    </div>
  )
}

export default Home
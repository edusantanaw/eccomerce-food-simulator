import React from 'react'
import hamburger from '../../assets/Hamb.png';
import Promotion from './homeComponents/Promotion';
import Categorys from '../partials/Categorys';
import Products from './homeComponents/Products';

const Home = () => {
  return (
    <div className='p-28 '>
      <div className='flex justify-between'>
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
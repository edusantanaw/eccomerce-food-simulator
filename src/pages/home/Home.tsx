import React from 'react'
import hamburger from '../../assets/Hamb.png';
import Promotion from '../../components/Promotion';
import Categorys from '../partials/Categorys';

const Home = () => {
  return (
    <div className='p-28 pt-10'>
      <div className='flex justify-between'>
        <Promotion img = {hamburger} name ='Hamburger' desc = "20% off" />
        <Promotion img = {hamburger} name ='Hamburger' desc = "20% off" />
        <Promotion img = {hamburger} name ='Hamburger' desc = "20% off" />
      </div>
      <Categorys />
    </div>
  )
}

export default Home
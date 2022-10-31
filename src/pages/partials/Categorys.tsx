import React from 'react'
import {FaHamburger, FaPizzaSlice, FaIceCream} from 'react-icons/fa'
import {GiCupcake, GiTacos} from 'react-icons/gi'

const Categorys = () => {
  return (
    <div className='flex mt-8 justify-between text-3xl'>
        <div className='w-52 font-thin flex flex-col items-center p-4 rounded-lg bg-opacity-20  bg-slate-400 text-white'>
            <FaHamburger className='text-orange-600  '/>
            <span>Hamburger</span>
        </div>
       <div className='w-52 font-thin flex flex-col items-center p-4 rounded-lg bg-opacity-20  bg-slate-400 text-white'>
            <FaPizzaSlice className='text-yellow-400'/>
            <span>Pizza</span>
        </div>
       <div className='w-52 font-thin flex flex-col items-center p-4 rounded-lg bg-opacity-20  bg-slate-400 text-white'>
            <FaIceCream className='text-pink-700'/>
            <span>Ice cream</span>
        </div>
       <div className='w-52 font-thin flex flex-col items-center p-4 rounded-lg bg-opacity-20  bg-slate-400 text-white'>
            <GiCupcake className='text-cyan-700'/>
            <span>Cake</span>
        </div>
       <div className='w-52 font-thin flex flex-col items-center p-4 rounded-lg bg-opacity-20  bg-slate-400 text-white'>
            <GiTacos className='text-orange-600'/>
            <span>Tacos</span>
        </div>
    </div>
  )
}

export default Categorys
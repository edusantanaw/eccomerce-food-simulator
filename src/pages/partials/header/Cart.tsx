import React from 'react'
import { useSelector } from 'react-redux'

interface cart  {
  cart: {
    products: [];
    quantity: Number
  }
}

interface product  {
  name: string;
  _id: string;
}

const Cart = () => {

  const prod: any = useSelector<cart>(state=> state.cart.products)
  console.log(prod)
  return (
    <div className='w-72 absolute bg-gray-900 h-40 mt-8 p-1'>   
        {prod  ?prod.map((prod: product)=>(
          <li>{prod.name} {prod._id} </li>
        )): <span>teste</span>  }
    </div>
  )
}

export default Cart
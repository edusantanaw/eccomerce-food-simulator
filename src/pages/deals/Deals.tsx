import React from 'react'
import { useApi } from '../../hooks/useApi'

const Deals = () => {
    const {data, loading, error} = useApi('/products/deals')
  return (
    <div className='p-28 text-white'>
        <h2 className='text-4xl'>deals</h2>
        {data ? data.map((products)=>(
            <li>
                products.name
            </li>
        )): <span>deals not find</span>}
    </div>
  )
}

export default Deals
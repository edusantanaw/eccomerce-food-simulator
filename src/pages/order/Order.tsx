import React from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader'
import { useApi } from '../../hooks/useApi'

const Order = () => {

  const params = useParams()
  const {data, loading} = useApi(`/order/${params.id}`)
  
  if(loading) return <Loader />
  return (
    <div className='p-28 text-white'>
        {data ? data.map((prod, i)=> (
          <li key={i}>
            
          </li>
        )): <span>Nenhum produto encontrado</span>}
    </div>
  )
}

export default Order
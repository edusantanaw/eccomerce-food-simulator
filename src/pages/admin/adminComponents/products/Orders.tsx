import React from 'react'
import { useApi } from '../../../../hooks/useApi'

const Orders = () => {

  const {data, loading, error} = useApi('/orders')

  return (
    <div>

      {data ? data.map((prod, i)=>(
        <li key={i}>
          {/* {prod.name} */}
        </li>
      )): <span>Nenhum produto encontrado!</span>}

    </div>
  )
}

export default Orders
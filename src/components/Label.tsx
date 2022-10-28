import React from 'react'

interface props {
    name: string
}

const Label = ({name}: props) => {
  return (
    <label htmlFor="" className='text-slate-200 mt-3'>{name}</label>
  )
}

export default Label
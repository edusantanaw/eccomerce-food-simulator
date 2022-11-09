import React from 'react'

interface msg {
    msg: string
}

export const Message = ({msg}: msg) => {
  return (
    <div className='absolute top-3 right-4 text-white bg-violet w-72 h-20'><span>{msg}</span></div>
  )
}

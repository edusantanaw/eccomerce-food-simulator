import React from 'react'

interface input {
  placeholder: string
}

const Input = ({placeholder}: input) => {
  return <input placeholder={placeholder} className='bg-zinc-900 rounded-md  h-9 outline-none p-5 text-white '></input>

  }

export default Input
import React from "react";

interface input {
  placeholder: string;
  ref: any;
}

const Input = ({ placeholder, ref }: input) => {
  return (
    <input
      placeholder={placeholder}
      ref={ref}
      className="bg-zinc-900 rounded-md  h-9 outline-none p-5 text-white "
    />
  );
};

export default Input;

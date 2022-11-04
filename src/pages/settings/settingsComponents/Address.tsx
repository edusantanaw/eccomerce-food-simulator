import React from "react";
import { useDispatch } from "react-redux";
import Label from "../../../components/Label";
import { update } from "../../../slice/userSlice";

const user = JSON.parse(localStorage.getItem("@App:user") || "{}");
const token = localStorage.getItem("@App:token");
const Address = () => {
  const street = React.useRef<any>();
  const number = React.useRef<any>();
  const name = React.useRef<any>();
  const cep = React.useRef<any>();
  const dispatch = useDispatch();

  const handleSave = () => {   
    const data = {
      street: street.current.value,
      number: number.current.value,
      name: street.current.value,
      cep: cep.current.value,
    }
  
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const params = {
      url: `/user/address/${user.id}`,
      data: data,
      options: options,
    };
    dispatch<any>(update(params));

  };
  return (
    <div>
      <h2 className="text-white text-4xl pb-10 ">Address</h2>
      <div className="border border-neutral-400 py-4 px-8 flex flex-wrap gap-x-10 gap-y-4  rounded-md">
        <div className="flex flex-col">
          <Label name="Street" />
          <input
            className="bg-zinc-900 rounded-md  h-9 outline-none p-5 text-white w-72 "
            ref={street}
            placeholder="example"
          />
        </div>
        <div className="flex flex-col">
          <Label name="Number" />
          <input
            className="bg-zinc-900 rounded-md  h-9 outline-none p-5 text-white w-72 "
            ref={number}
            placeholder="500"
          />
        </div>
        <div className="flex flex-col">
          <Label name="name" />
          <input
            className="bg-zinc-900 rounded-md  h-9 outline-none p-5 text-white w-72 "
            ref={name}
            placeholder="São paulo"
          />
        </div>
        <div className="flex flex-col">
          <Label name="CEP" />
          <input
            className="bg-zinc-900 rounded-md  h-9 outline-none p-5 text-white w-72 "
            ref={cep}
            placeholder="192121"
          />
        </div>
        <button
          className="bg-violet  border w-40 rounded-md text-white border-violet h-10"
          onClick={() => handleSave()}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Address;

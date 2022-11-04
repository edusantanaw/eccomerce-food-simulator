import React from "react";
import { useDispatch } from "react-redux";
import Label from "../../../components/Label";
import { update } from "../../../slice/userSlice";

const user = JSON.parse(localStorage.getItem("@App:user") || "{}");
const token = localStorage.getItem("@App:token");
const Address = () => {
  const cardNumber = React.useRef<any>();
  const cvv = React.useRef<any>();
  const date = React.useRef<any>();
  const name = React.useRef<any>();
  const dispatch = useDispatch();

  const handleSave = () => {   
    const data = {
      cardNumber: cardNumber.current.value,
      cvv: cvv.current.value,
      name: name.current.value,
      date: date.current.value,
    }
  
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const params = {
      url: `/user/payment/${user.id}`,
      data: data,
      options: options,
    };
    dispatch<any>(update(params));

  };
  return (
    <div>
      <h2 className="text-white text-4xl pb-10 ">Payment</h2>
      <div className="border border-neutral-400 py-4 px-8 flex flex-wrap gap-x-10 gap-y-4  rounded-md">
        <div className="flex flex-col">
          <Label name="Card name" />
          <input
            className="bg-zinc-900 rounded-md  h-9 outline-none p-5 text-white w-72 "
            ref={name}
            placeholder="visa"
          />
        </div>
        <div className="flex flex-col">
          <Label name="Card number" />
          <input
            className="bg-zinc-900 rounded-md  h-9 outline-none p-5 text-white w-72 "
            ref={cardNumber}
            placeholder="501232130"
          />
        </div>
        <div className="flex flex-col">
          <Label name="cvv" />
          <input
            className="bg-zinc-900 rounded-md  h-9 outline-none p-5 text-white w-72 "
            ref={cvv}
            placeholder="555"
          />
        </div>
        <div className="flex flex-col">
          <Label name="Valid date" />
          <input
            className="bg-zinc-900 rounded-md  h-9 outline-none p-5 text-white w-72 "
            ref={date}
            placeholder="10/21"
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

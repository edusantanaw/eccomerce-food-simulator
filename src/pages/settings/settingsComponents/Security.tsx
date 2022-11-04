import React from "react";
import { useDispatch } from "react-redux";
import Label from "../../../components/Label";
import { update } from "../../../slice/userSlice";

const user = JSON.parse(localStorage.getItem("@App:user") || "{}");
const token = localStorage.getItem("@App:token");
const Address = () => {
  const password = React.useRef<any>();
  const newPassword = React.useRef<any>();
  const confirmPassword = React.useRef<any>();
  const dispatch = useDispatch();

  const handleSave = () => {
    const data = {
      password: password.current.value,
      newPassword: newPassword.current.value,
      confirmPassword: confirmPassword.current.value
    };

    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const params = {
      url: `/user/password/${user.id}`,
      data: data,
      options: options,
    };
    dispatch<any>(update(params));
  };
  return (
    <div>
      <h2 className="text-white text-4xl pb-10 ">Security</h2>
      <div className="border border-neutral-400 py-4 px-8 flex   flex-col flex-wrap  gap-y-7  rounded-md">
        <div className="flex flex-col ">
          <Label name="Actual password" />
          <input
            className="bg-zinc-900 rounded-md  h-9 outline-none p-5 text-white w-full"
            ref={password}
            placeholder="visa"
          />
        </div>
        <div className="flex flex-col">
          <Label name="New password" />
          <input
 className="bg-zinc-900 rounded-md  h-9 outline-none p-5 text-white w-full"
            ref={newPassword}
            placeholder="501232130"
          />
        </div>
        <div className="flex flex-col">
          <Label name="Confirm password" />
          <input
 className="bg-zinc-900 rounded-md  h-9 outline-none p-5 text-white w-full"
            ref={confirmPassword}
            placeholder="555"
          />
        </div>

        <button
          className="bg-violet  border w-72 rounded-md text-white border-violet h-10 self-center"
          onClick={() => handleSave()}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Address;

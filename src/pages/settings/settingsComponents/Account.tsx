import React from "react";
import Label from "../../../components/Label";
import { useDispatch } from "react-redux";
import { logout, update } from "../../../slice/userSlice";

const user = JSON.parse(localStorage.getItem("@App:user") || "{}");
const token = localStorage.getItem("@App:token");

const Account = () => {
  const [image, setImage] = React.useState<any>();
  const firstName = React.useRef<any>();
  const lastName = React.useRef<any>();
  const email = React.useRef<any>();
  const phone = React.useRef<any>();

  const dispatch = useDispatch();
  const handleSave = () => {
    const form = new FormData();
    console.log(firstName);
    form.append("firstName", firstName.current.value);
    form.append("lastName", lastName.current.value);
    form.append("email", email.current.value);
    form.append("phoneNumber", phone.current.value);
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const params = {
      url: `/user/update/${user.id}`,
      data: form,
      id: user.id,
      options: options,
    };
    dispatch<any>(update(params));
  };

  const handleLogout = () => {
    dispatch<any>(logout());
  };
  const handleImage = (e: any) => {
    const img = e.target.files[0];
    setImage(img);
  };

  return (
    <div className="w-full text-white">
      <h2 className="text-white text-4xl pb-10 ">Account</h2>
      <div className="border border-neutral-400 py-4 px-8  rounded-md">
        <h3 className="text-2xl font-light">Pesonal informations</h3>
        <div className="flex gap-8 mt-5 items-center">
          <img
            className=" h-14 w-14  object-cover rounded-md"
            src={`http://localhost:5000/${
              user.photo.split("\\")[1] + "/" + user.photo.split("\\")[2]
            }`}
            alt="user perfil photo"
          />
          <div>
            <label
              htmlFor="image"
              className="bg-opacity-0 border w-28 rounded-md text-violet border-violet h-10 px-5 py-2 cursor-pointer"
            >
              Change
            </label>
            <input
              type="file"
              id="image"
              className=" hidden "
              onChange={(e) => handleImage(e)}
            />
          </div>
        </div>
        <div className="flex flex-wrap mt-6 gap-x-10 gap-y-6">
          <div className="flex flex-col">
            <Label name="Fist name" />
            <input
              className="bg-zinc-900 rounded-md  h-9 outline-none p-5 text-white w-72 "
              ref={firstName}
              defaultValue={user.firstName}
              placeholder="example"
            />
          </div>
          <div className="flex flex-col">
            <Label name="last name" />
            <input
              className="bg-zinc-900 rounded-md  h-9 outline-none p-5 text-white w-72 "
              ref={lastName}
              defaultValue={user.lastName}
              placeholder="example"
            />
          </div>
          <div className="flex flex-col">
            <Label name="E-mail" />
            <input
              className="bg-zinc-900 rounded-md  h-9 outline-none p-5 text-white w-72 "
              ref={email}
              defaultValue={user.email}
              placeholder="example@email.com"
            />
          </div>
          <div className="flex flex-col">
            <Label name="Phone number" />
            <input
              className="bg-zinc-900 rounded-md  h-9 outline-none p-5 text-white w-72 "
              ref={phone}
              placeholder="15999999999"
              defaultValue={user.phoneNumber}
            />
          </div>
        </div>
        <div className="w-full flex justify-between items-center pt-10">
          <button
            onClick={() => handleLogout()}
            className="bg-opacity-0 border w-40 rounded-md text-blue-800 border-blue-800 h-10"
          >
            Logout
          </button>
          <button
            className="bg-violet  border w-40 rounded-md text-white border-violet h-10"
            onClick={() => handleSave()}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;

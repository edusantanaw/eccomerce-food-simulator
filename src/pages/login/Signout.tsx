import { useRef } from "react";
import Label from "../../components/Label";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { sign } from "../../slice/userSlice";
import { Link } from "react-router-dom";
import { register } from "../../slice/userSlice";

const Signout = () => {
  const dispatch = useDispatch();
  const email = useRef<any>("");
  const password = useRef<any>("");
  const confirmPassword = useRef<any>("");
  const firstName = useRef<any>("");
  const lastName = useRef<any>("");

  const handleLogin = () => {
    const data = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      email: email.current.value,
      password: password.current.value,
      confirmPassword: confirmPassword.current.value,
    };
    dispatch<any>(register(data));
  };
  //   const { firstName, lastName, email, password, confirmPassword } = req;

  return (
    <div>
      <div className="w-full flex justify-center items-center min-h-screen flex-col">
        <h1 className="text-white text-4xl">Login</h1>
        <div className="flex-col flex gap-2  mt-2">
          <Label name="First name" />
          <input
            type="text"
            ref={firstName}
            placeholder="Eduardo"
            className="bg-zinc-900 rounded-md w-96  h-9 outline-none p-5 text-white "
          />
          <Label name="Last name" />
          <input
            type="text"
            ref={lastName}
            placeholder="Santana"
            className="bg-zinc-900 rounded-md  h-9 outline-none p-5 text-white "
          />
          <Label name={"Email"} />
          <input
            type="text"
            ref={email}
            placeholder="example@mail.com"
            className="bg-zinc-900 rounded-md  h-9 outline-none p-5 text-white "
          />
          <Label name={"Password"} />
          <input
            type="password"
            placeholder="***********"
            className="bg-zinc-900 rounded-md  h-9 outline-none p-5 text-white "
            ref={password}
          />
          <Label name={"Confirm password"} />
          <input
            type="password"
            placeholder="***********"
            className="bg-zinc-900 rounded-md  h-9 outline-none p-5 text-white "
            ref={confirmPassword}
          />
          <Button funct={handleLogin} />
        </div>
      </div>
    </div>
  );
};

export default Signout;

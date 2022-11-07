import { useState, useRef } from "react";
import food from "../../assets/login.jpg";
import Label from "../../components/Label";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { sign } from "../../slice/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const email = useRef<any>('');
  const password = useRef<any>("");

  const handleLogin = () => {
    const data = {
      email: email.current.value,
      password: password.current.value,
    };
    dispatch<any>(sign(data));
  };
  
  return (
    <div className="flex ">
      <div className="w-full flex justify-center items-center min-h-screen flex-col">
        <h1 className="text-white text-4xl">Login</h1>
        <div className="flex-col flex gap-2  mt-2">
          <Label name={"Email"} />
          <input
            type="text"
            ref={email}
            placeholder="example@mail.com"
            className="bg-zinc-900 rounded-md  h-9 outline-none p-5 text-white "
          />
          <Label name={"Password"} />
          <input
            type="text"
            placeholder="***********"
            className="bg-zinc-900 rounded-md  h-9 outline-none p-5 text-white "
            ref={password}
          />
          <Button funct={handleLogin} />
          <p className="text-white text-xl mt-5 text-center  font-thin">
            Ainda não tem uma conta?
            <span className="text-violet cursor-pointer"> criar conta.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import food from "../../assets/login.jpg";
import Label from "../../components/Label";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Login = () => {
  return (
    <div className="flex ">
      <div className="w-1/2 relative min-h-screen">
        <img
          src={food}
          alt=" food image "
          className="absolute h-full w-full  object-bottom object-cover"
        />
      </div>
      <div className="w-1/2 flex justify-center items-center min-h-screen flex-col">
        <h1 className="text-white text-4xl">Login</h1>
        <div className="flex-col flex w-1/2 mt-2">
          <Label name={"Email"} />
          <Input />
          <Label name={"Password"} />
          <Input />
          <Button />
          <p className="text-white text-xl mt-5 text-center  font-thin">
            Ainda não tem uma conta?<span className="text-violet"> criar conta.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

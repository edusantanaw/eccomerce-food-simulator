import {useState} from "react";
import food from "../../assets/login.jpg";
import Label from "../../components/Label";
import Input from "../../components/Input";
import Button from "../../components/Button";
import {useDispatch} from 'react-redux'
import { changeUser } from "../../slice/userSlice";

const Login = () => {
  const [user, setUser] = useState('ola')
  const dispatch = useDispatch()


 const  handleLogin = () => {
    dispatch(changeUser(user))
  }

  return (
    <div className="flex ">
      <div className="w-1/2 relative h-full  ">
        <img
          src={food}
          alt=" food image "
          className=" max-h-screen w-full  object-bottom object-cover "
        />
        <div className="absolute top-0 w-full h-full bg-opacity-30 bg-pink-600 text-5xl font-bold text-center " >
          <h2 className="text-white mt-32">Food</h2>
          <h2 className="text-violet">delivery</h2>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center min-h-screen flex-col">
        <h1 className="text-white text-4xl">Login</h1>
        <div className="flex-col flex  mt-2">
          <Label name={"Email"} />
          <Input placeholder ='example@mail.com' />
          <Label name={"Password"} />
          <Input placeholder=  "***********" />
          <Button funct = {handleLogin}  />
          <p className="text-white text-xl mt-5 text-center  font-thin">
            Ainda não tem uma conta?<span className="text-violet cursor-pointer"> criar conta.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

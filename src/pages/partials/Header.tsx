import React, { useState } from "react";
import { BsBagFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import imgDefault from "../../assets/perfilDefault.jpg";
import { logout } from "../../slice/userSlice";
import { Link } from "react-router-dom";


const user = JSON.parse(localStorage.getItem("@App:user") || '{}');
console.log(user)

const Header = () => {
  const [bag, setBag] = useState<Boolean>(false);
  const [perfilToggle, setPerfilToggle] = useState<Boolean>(false);
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch<any>(logout())
  }

  return (
    <div className="text-white flex justify-between items-center pt-2 pb-2 p-28 w-full bg-black ">
      <Link to = "/">
      <div className="text-3xl font-semibold">
        <h1>Food</h1>
        <h1 className="text-violet">delivery</h1>
      </div>
      </Link>
      <ul className="flex justify-evenly w-1/2 font-medium text-violet text-lg cursor-pointer items-center">
        <li>Restaurants</li>
        <li>Deals</li>
        <li>My order</li>
        <li>
          <BsBagFill />
        </li>
        <li className="relative flex justify-center" onClick={() => setPerfilToggle(perfilToggle ? false : true)}>
          {perfilToggle && 
          <ul className="absolute top-10  bg-gray-900 h-24 p-3 rounded-lg">
            <li><Link to={`/user/settings/${user.id}`}>Settings</Link></li>
            <li onClick={()=> handleLogout()}>Logout</li>
          </ul>
          }
          {user.photo.length > 0 ? (
            <img
              className="h-8 object-cover rounded-full w-8"
              src={`http://localhost:5000/${ user.photo.split("\\")[1] + "/" + user.photo.split("\\")[2]}`}
              alt="user perfil photo"
            />
          ) : (
            <img
              className="h-8 object-cover rounded-full w-8"
              src={imgDefault}
              alt="perfil default image"
            />
          )}
        </li>
      </ul>
    </div>
  );
};

export default Header;

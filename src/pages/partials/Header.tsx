import React, { useState } from "react";
import { BsBagFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import imgDefault from "../../assets/perfilDefault.jpg";
import { logout } from "../../slice/userSlice";
import { Link } from "react-router-dom";
import Cart from "./header/Cart";

const Header = () => {
  const user = JSON.parse(localStorage.getItem("@App:user") || "{}");
  const [cart, setCart] = useState<Boolean>(false);
  const [perfilToggle, setPerfilToggle] = useState<Boolean>(false);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch<any>(logout());
  };

  return (
    <div className="text-white flex fixed justify-between items-center pt-5 pb-2 p-28 w-full bg-black ">
      <Link to="/">
        <div className="text-3xl font-semibold">
          <h1>Food</h1>
          <h1 className="text-violet">delivery</h1>
        </div>
      </Link>
      <ul className="flex justify-end gap-10 w-1/2 font-medium text-violet text-lg cursor-pointer items-center">
        <li>
          <Link to="/deals">Deals</Link>
        </li>
        <li>
          <Link to="/order">My order</Link>
        </li>
        <li className="relative flex justify-center">
          <BsBagFill onClick={() => setCart(cart ? false : true)} />
          {cart && <Cart />}
        </li>
        <li
          className="relative flex justify-center"
          onClick={() => setPerfilToggle(perfilToggle ? false : true)}
        >
          {perfilToggle && (
            <ul className="absolute top-10  bg-gray-900 flex flex-col gap-3 p-3 rounded-lg">
              <li>
                <Link to={`/user/settings/${user.id}`}>Settings</Link>
              </li>
              <li onClick={() => handleLogout()}>Logout</li>
              {user.admin && (
                <li>
                  <Link to="/admin">management</Link>
                </li>
              )}
            </ul>
          )}
          {user.photo ? (
            <img
              className="h-8 object-cover rounded-full w-8"
              src={`http://localhost:5000/${
                user.photo.split("\\")[1] + "/" + user.photo.split("\\")[2]
              }`}
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

import React from "react";
import { BsBagFill } from "react-icons/bs";

const user = JSON.parse(localStorage.getItem('@App:user') || '') 
console.log(user)

const Header = () => {
  return (
    <div className="text-white flex justify-between items-center pt-12 p-28 h-32">
      <div className="text-3xl font-semibold">
        <h1>Food</h1>
        <h1 className="text-violet">delivery</h1>
      </div>
      <ul className="flex justify-evenly w-1/2 font-medium text-violet text-lg cursor-pointer items-center">
        <li>Restaurants</li>
        <li>Deals</li>
        <li>My order</li>
        <li><BsBagFill/></li>
      </ul>
    </div>
  );
};

export default Header;

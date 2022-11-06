import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import { removeToCard } from "../../../slice/cartSlice";
import { AiOutlineClose } from "react-icons/ai";
import { IoBasket } from "react-icons/io5";

interface cart {
  cart: {
    products: [];
  };
}

interface product {
  name: string;
  _id: string;
  quantity: 0,
  image: [
    {
      filename: string;
    }
  ];
}

interface func {
  handleBasket: () => void;
}

const Cart = ({ handleBasket }: func) => {
  const dispatch = useDispatch();

  const handleRemove = (prod: product) => {
    dispatch<any>(removeToCard(prod._id));
  };

  const prod: any = useSelector<cart>((state) => state.cart.products);
  localStorage.setItem("@App:cart", JSON.stringify(prod));

  return (
    <div className="w-1/3 h-screen absolute bg-gray-900 top-0 right-0 z-10 text-white">
      <div className="w-full p-3 rounded-b-md flex items-center justify-between bg-violet  ">
        <AiOutlineClose className="text-2xl" onClick={() => handleBasket()} />
        <h2>Cart</h2>
        <IoBasket className="text-2xl" />
      </div>
      <ul className="p-2 flex flex-col gap-2">
        {prod.length > 0 ? (
          prod.map((prod: product, i: number) => (
            <li key={i} className="flex relative items-center ">
              <div className="flex gap-4 items-center">
                <img
                  className="h-10 w-10 object-cover rounded-md"
                  src={`http://localhost:5000/products/${prod.image[0].filename}`}
                  alt="product image"
                />
                <span>{prod.name}</span>
                <span>{prod.quantity}</span>
              </div>
              <FaTrashAlt
                className="absolute right-0 text-red-800"
                onClick={() => handleRemove(prod)}
              />{" "}
            </li>
          ))
        ) : (
          <span>cesta vazia</span>
        )}
      </ul>
    </div>
  );
};

export default Cart;

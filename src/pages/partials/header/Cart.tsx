import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import { removeToCard } from "../../../slice/cartSlice";
import { AiOutlineClose } from "react-icons/ai";
import { IoBasket } from "react-icons/io5";
import { Link } from "react-router-dom";

interface cart {
  cart: {
    products: [];
  };
}

interface product {
  name: string;
  _id: string;
  quantity: 0;
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
  const [productToOrder, setProducts] = React.useState<string[]>();
  const dispatch = useDispatch();
  const prod: any = useSelector<cart>((state) => state.cart.products);
  localStorage.setItem("@App:cart", JSON.stringify(prod));

  const handleRemove = (prod: product) => {
    dispatch<any>(removeToCard(prod._id));
  };

  React.useEffect(() => {
    const products = prod.map((product: any) => (product = product._id));
    setProducts(products);
  }, []);

  return (
    <div className="w-1/3 h-screen absolute bg-black bg-opacity-90 top-0 right-0 z-10 shadow-sm shadow-white text-white cursor-default">
      <div className="w-full mb-2 p-3  rounded-b-md  flex items-center justify-between bg-violet  ">
        <AiOutlineClose className="text-2xl cursor-pointer" onClick={() => handleBasket()} />
        <h2>Cart</h2>
        <IoBasket className="text-2xl" />
      </div>
      <ul className="p-2 flex flex-col gap-3 ">
        {prod.length > 0 ? (
          prod.map((prod: product, i: number) => (
            <li key={i} className="flex relative items-center cursor-pointer ">
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
                className="absolute right-0 text-red-800 cursor-pointer"
                onClick={() => handleRemove(prod)}
              />{" "}
            </li>
          ))
        ) : (
          <span className="text-center">cesta vazia</span>
        )}
      </ul>
      <button className="absolute bottom-0  bg-violet w-full h-12 rounded-t-md ">
        Finalize order
      </button>
    </div>
  );
};

export default Cart;

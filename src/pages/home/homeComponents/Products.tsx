import React from "react";
import { useApi } from "../../../hooks/useApi";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useDispatch } from "react-redux";

import { addToCart } from "../../../slice/cartSlice";

const Products = () => {
  const { data, loading, error } = useApi("/products");
  console.log(data, loading, error);
  const dispatch = useDispatch()

  const addCard = (product: string) => {
     dispatch(addToCart(product))
  }

  return (
    <div className="text-white mt-12">
      <ul className="flex justify-between flex-wrap ">
        {data &&
          data.map((products: any, i) => (
            <li className="w-64 h-64 mb-12 bg-zinc-900 rounded-md" key={i}>
              <img
                className="w-full object-cover h-4/6 rounded-t-md"
                src={`http://localhost:5000/products/${products.image[0].filename}`}
                alt=""
              />
              <div className="flex p-2 items-center justify-between">
                <div>
                  <h3 className="font-medium text-2xl text-violet">
                    {products.name}
                  </h3>
                  <span className="text-lg ">R$ {products.price}</span>
                </div>
                <BsFillCartPlusFill onClick={()=> addCard(products)} className="text-violet p-1  cursor-pointer rounded-sm text-3xl" />
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Products;

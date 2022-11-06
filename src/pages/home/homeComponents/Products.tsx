import React from "react";
import { useApi } from "../../../hooks/useApi";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useDispatch } from "react-redux";

import { addToCart } from "../../../slice/cartSlice";
import Loader from "../../../components/Loader";
import { Link } from "react-router-dom";

type params = {
  url: string;
};
const Products = ({ url }: params) => {
  const { data, loading, error } = useApi(url);
  const dispatch = useDispatch();

  const addCard = (product: string) => {
    dispatch(addToCart(product));
  };

  if (loading) return <Loader />;

  return (
    <div className="text-white mt-12">
      <ul className="flex justify-between flex-wrap ">
        {data ? (
          data.map((products: any, i) => (
            <li className="w-64 h-64 mb-12 bg-zinc-900 rounded-md" key={i}>
              <Link to={`/product/${products._id}`}>
                <img
                  loading="lazy"
                  className="w-full object-cover h-4/6 rounded-t-md"
                  src={`http://localhost:5000/products/${products.image[0].filename}`}
                  alt="product image"
                />
                <div className="flex p-2 items-center justify-between">
                  <div>
                    <h3 className="font-medium text-2xl text-violet">
                      {products.name}
                    </h3>
                    <span className="text-lg ">R$ {products.price}</span>
                  </div>
                  <BsFillCartPlusFill
                    onClick={() => addCard(products)}
                    className="text-violet p-1  cursor-pointer rounded-sm text-3xl"
                  />
                </div>
              </Link>
            </li>
          ))
        ) : (
          <span>products not find</span>
        )}
      </ul>
    </div>
  );
};

export default Products;

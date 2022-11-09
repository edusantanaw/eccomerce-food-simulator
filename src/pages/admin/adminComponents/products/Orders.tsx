import React from "react";
import { useDispatch } from "react-redux";
import Loader from "../../../../components/Loader";
import { useApi } from "../../../../hooks/useApi";
import { updateStatus } from "../../../../slice/productSlice";

const Orders = () => {
  const { data, loading, error } = useApi("/orders");
  const dispatch = useDispatch();

  const handleStatus = (n: number, id: string) => {
    const obj = {
      status: n === 1 ? true : false,
      id: id,
    };
    dispatch<any>(updateStatus(obj));
  };

  if (loading) return <Loader />;

  return (
    <div className="mt-5">
      <h3 className="text-3xl mb-6">Orders</h3>
      <ul className="flex flex-col gap-4">
        {data ? (
          data.map((prod: any, i) => (
            <li
              className="list-none flex justify-between items-center border border-violet p-3 rounded-md"
              key={i}
            >
              <div>
                <h4 className="text-violet text-xl">ClientId: {prod.client}</h4>
                <span>
                  {prod.product.map((prod: any, i: number) => (
                    <div className="flex gap-2" key={i}>
                      <span>Product: {prod.product.name},</span>
                      <span>quantity : {prod.quantity}</span>
                    </div>
                  ))}
                </span>
              </div>
              <div>
                <button
                  className="border rounded-sm mr-5 border-violet text-violet px-8 py-2"
                  onClick={() => handleStatus(1, prod._id)}
                >
                  Accept
                </button>
                <button
                  onClick={() => handleStatus(0, prod._id)}
                  className="border rounded-sm border-red-700 text-red-700 px-8 py-2"
                >
                  Decline
                </button>
              </div>
            </li>
          ))
        ) : (
          <span>No products found!</span>
        )}
      </ul>
    </div>
  );
};

export default Orders;

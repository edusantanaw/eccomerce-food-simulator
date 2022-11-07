import React from "react";
import { useApi } from "../../../../hooks/useApi";

const Orders = () => {
  const { data, loading, error } = useApi("/orders");
  console.log(data);
  return (
    <div>
      <h3 className="text-3xl">Orders</h3>
      {data ? (
        data.map((prod: any, i) => (
          <li className="list-none" key={i}>
            <h4>ClientId: {prod.client}</h4>
            <span>
              {prod.product.map((prod: any) => (
                <div className="flex gap-2">
                  <span>Product name: {prod.product.name}</span>
                  <span>, Quantity: {prod.quantity}</span>
                </div>
              ))}
            </span>
          </li>
        ))
      ) : (
        <span>Nenhum produto encontrado!</span>
      )}
    </div>
  );
};

export default Orders;

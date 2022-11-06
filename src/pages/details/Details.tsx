import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import { useApi } from "../../hooks/useApi";

interface img {
  filename: string;
}

const Details = () => {
  const params = useParams();

  const { data, error, loading } = useApi(`/products/${params.id}`);
  console.log(data);
  if (loading) return <Loader />;

  return (
    <div className="p-28 text-white">
      {data &&
        data.map((prod: any) => (
          <div className="flex gap-10">
              <div>
                <img
                  alt="product image"
                  className='rounded-md object-cover h-72'
                  src={`http://localhost:5000/products/${prod.image[0].filename}`}
                />
              </div>
            <div className="flex flex-col">
              <h2 className="text-4xl text-violet">{prod.name}</h2>
              <span>R${prod.price}</span>
              <span>Description:</span>
              <p>{prod.description}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Details;

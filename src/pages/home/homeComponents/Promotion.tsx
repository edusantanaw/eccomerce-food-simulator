import React from "react";

interface Promo {
  img: string;
  name: string;
  desc: string;
}

const Promotion = ({ img, name, desc }: Promo) => {
  return (
    <div className="flex items-center bg-neutral-400 bg-opacity-5 p-3 rounded-lg">
      <img src={img} alt="Hamburger promotion" className="h-32 pr-8" />
      <div>
        <h2 className="text-3xl text-white ">{name}</h2>
        <span className="text-violet text-3xl">{desc}</span>
      </div>
    </div>
  );
};

export default Promotion;

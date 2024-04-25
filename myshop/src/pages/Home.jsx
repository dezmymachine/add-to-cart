import React from "react";
import Navbar from "../components/Navbar";
import { storeData } from "../assets/Data";
import Card from "../components/Card";

const Home = () => {
  return (
    <>
      <Navbar />
      <h1 className="text-center font-mono font-semibold">
        UseContext and UseReducer Store
      </h1>
      <h4 className="font-serif font-bold text-center text-emerald-500">
        Fresh in Stock
      </h4>
      <div className=" grid grid-cols-3 items-center">
        {/* {product.map((item) => (
          <div key={item.id}>
            <img src={item.images[0]} />
            <h5>{item.title}</h5>
            <p>{item.price}</p>
          </div>
        ))} */}
        {storeData.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default Home;

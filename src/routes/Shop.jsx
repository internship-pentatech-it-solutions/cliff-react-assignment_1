import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
const Shop = () => {
  const [item, setItem] = useState("");
  const changeItem = () => {
    fetch("https://randomfox.ca/floof")
      .then((response) => response.json())
      .then((data) => {
        setItem(data.image);
        console.log(data.image);
      });
  };
  useEffect(() => {
    changeItem();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="">
        <div className="flex text-center mt-10 justify-center ">
          <span className="font-sans font-semibold text-2xl bg-gray-800 text-white w-80 rounded-t-lg py-1">
            FOXES
          </span>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <img className="w-80 h-80 object-cover " src={item} alt="Foxes" />

          <button onClick={changeItem}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Shop;

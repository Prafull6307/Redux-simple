/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItems } from "../reducers/cartSlice";

function Home() {
  const [product, setProduct] = useState([]);
  
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.log("error in fetching data");
      }
    };

    fetchdata();
  }, []);
  
  const dispatch = useDispatch();
  
  function addProduct(data) {
    dispatch(addItems(data));
  }

  return (
    <div className="flex justify-center items-center flex-wrap gap-4 p-4">
      {product.map((item) => (
        <div
          key={item.id}
          className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2"
        >
          <a href="#">
            <img
              className="p-8 rounded-t-lg w-full h-64 object-cover"
              src={item.image}
              alt="product image"
            />
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {item.title}
              </h5>
            </a>

            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                ${item.price}
              </span>
              <button
                onClick={() => addProduct(item)}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;

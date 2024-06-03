/** @format */

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItems } from "../reducers/cartSlice";

function Cart() {
  let products = useSelector((state) => state.cart.items);
  console.log(products);

  const dispatch = useDispatch();

  function removeProducts(data) {
    dispatch(removeItems(data)); // Ensure the correct payload is passed
  }

  return (
    <div className="flex justify-center items-center flex-wrap gap-4 p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2"
        >
          <a href="#">
            <img
              className="p-8 rounded-t-lg w-full h-64 object-cover"
              src={product.image}
              alt="product image"
            />
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {product.title}
              </h5>
            </a>

            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                ${product.price}
              </span>
              <button
                onClick={() => removeProducts(product)}
                className="text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                Remove from Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;

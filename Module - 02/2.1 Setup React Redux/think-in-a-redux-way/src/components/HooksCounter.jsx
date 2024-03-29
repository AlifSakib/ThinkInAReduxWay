import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counter/actions";

const HooksCounter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  };
  const decrementHandler = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <div class="max-w-md mx-auto mt-10 space-y-5">
        <div class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
          <div class="text-2xl font-semibold">{count}</div>
          <div class="flex space-x-3">
            <button
              onClick={incrementHandler}
              class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
            >
              Increment
            </button>
            <button
              onClick={decrementHandler}
              class="bg-red-400 text-white px-3 py-2 rounded shadow"
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HooksCounter;

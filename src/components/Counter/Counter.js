import { isDisabled } from "@testing-library/user-event/dist/utils";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0)

  const plusHandler = () => {
    setCount(privCount => privCount + 1)
  }

  const mainzHandler = () => {
    setCount(privCount => privCount - 1)
  }


  return (
    <div className="flex items-center justify-center h-[100vh]">
      <button className="bg-purple-500 text-white text-2xl flex items-center justify-center px-3 rounded hover:ring ring-purple-500 ring-offset-4 ring-offset-purple-200 transition-all duration-300" onClick={plusHandler}> + </button>
      <span className="font-sans text-2xl mx-8">{count}</span>
      <button className="bg-purple-500 text-white text-2xl flex items-center justify-center px-3 rounded hover:ring ring-purple-500 ring-offset-4 ring-offset-purple-200 transition-all duration-300" onClick={count > 0 ? mainzHandler : ""}> - </button>
    </div>
  );
}

export default Counter;
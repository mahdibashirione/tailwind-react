import { useState } from "react";

const Counter = ({ quantity }) => {
  const [count, setCount] = useState(quantity)

  const plusHandler = () => {
    setCount(privCount => privCount + 1)
  }

  const mainzHandler = () => {
    setCount(privCount => privCount - 1)
  }


  return (
    <div className="flex items-center justify-center">
      <button className="bg-purple-500 text-white text-lg px-2 flex items-center justify-center rounded hover:ring ring-purple-500 ring-offset-4 ring-offset-purple-200 transition-all duration-300" onClick={plusHandler}> + </button>
      <span className="font-sans text-lg mx-2">{count}</span>
      <button className="bg-purple-500 text-white text-lg px-2 flex items-center justify-center rounded hover:ring ring-purple-500 ring-offset-4 ring-offset-purple-200 transition-all duration-300" onClick={count > 0 ? mainzHandler : ""}> - </button>
    </div>
  );
}

export default Counter;
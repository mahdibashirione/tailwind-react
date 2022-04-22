import { useEffect } from "react";
import Counter from "../Counter/Counter";

const Product = ({ product, onDelete, increment, decrement }) => {
  useEffect(() => {
    console.log('mount')
    return () => {
      console.log('willUnMount')
    }
  }, [console.log('updating')])


  return (
    <div className="max-w-[500px] mt-4 p-4 w-full rounded-lg border-2 border-slate-200 shadow-md bg-white flex items-center justify-between">

      <div className="w-1/2 flex flex-col justify-center items-start">
        <span className="select-none font-sans my-4">{product.name}</span>
        <p className="select-none">{product.price}</p>
      </div>

      <div className="w-1/2 flex items-center justify-between">
        <div className="flex items-center justify-center">
          <button onClick={increment} className="bg-purple-500 hover:bg-purple-700 text-white text-lg px-2 flex items-center justify-center rounded" > + </button>
          <span className="select-none font-sans text-lg mx-2">{product.quantity}</span>
          <button onClick={decrement} className="bg-purple-500 hover:bg-purple-700 text-white text-lg px-2 flex items-center justify-center rounded" > - </button>
        </div>

        <button onClick={onDelete}><svg xmlns="http://www.w3.org/2000/svg" className="bg-red-500 hover:bg-red-700 p-1 h-7 w-7 rounded-md " viewBox="0 0 20 20" fill="#fff">
          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg></button>
      </div>

    </div>
  );
}

export default Product;
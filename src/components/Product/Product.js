import Counter from "../Counter/Counter";

const Product = ({ name, price, quantity }) => {
  return (
    <div className="p-4 w-full rounded-lg shadow-md bg-white flex items-center justify-between">
      <div className="w-1/2 flex flex-col justify-center items-start">
        <span className="font-sans my-4">{name}</span>
        <p>{price}</p>
      </div>
      <div className="w-1/2 flex flex-col items-center justify-between">
        <Counter quantity={quantity} />
      </div>
    </div>
  );
}

export default Product;
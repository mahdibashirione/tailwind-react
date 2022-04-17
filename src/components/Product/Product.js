
const Product = ({ name, price }) => {
  return (
    <div className="p-4 w-full rounded-lg shadow-md bg-white flex items-center justify-between">
      <div className="w-1/2 flex flex-col justify-center items-start">
        <span className="font-sans my-4">{name}</span>
        <p>{price}</p>
      </div>
      <div className="w-1/2 flex items-center justify-end">
        <span>#img</span>
      </div>
    </div>
  );
}

export default Product;
import Product from "../Product/Product";
import { useState } from 'react';
import { HiExclamationCircle } from "react-icons/hi";

const ProductList = ({ remove, increment, decrement, product }) => {
  const [productData, setProductData] = useState([
    { name: 'ساعت هوشمند', price: '2.500.000', quantity: 1, id: 1 },
    { name: 'کتاب فروشندگی', price: '500.000', quantity: 1, id: 2 },
    { name: 'موبایل اپل', price: '25.500.000', quantity: 1, id: 3 },
  ])

  return (
    <div id="ProductList" className="w-full">
      {!productData.length && <div className="select-none font-sans text-lg text-slate-800 flex items-center justify-center"><HiExclamationCircle className="ml-2 w-6 h-6 fill-amber-400" />محصولی در سبد خرید شما وجود ندارد</div>}
      {product.map(product => {
        return <Product
          key={product.id}
          product={product}
          onDelete={() => remove(product.id)}
          increment={() => increment(product.id)}
          decrement={() => decrement(product.id)}
        />
      })}
    </div>
  );
}

export default ProductList;
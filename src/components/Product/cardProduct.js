const CardProduct = ({ product }) => {
  return (
    <div className='w-52'>
      <div className='w-full h-3/10'>
        <img src={product.photo} alt='noLoaded' className='max-h-full'></img>
      </div>
      <span className='w-full h-3/10 inline-block text-right text-sm'>{product.name}</span>
      <div className='flex items-center justify-end my-2'>
        <h2 className='text-lg text-gray-900 font-medium ml-1'>{product.price}</h2>
        <span className='text-sm lg:text-md text-white bg-red-600 px-2 py-1 rounded-full'> تومان</span>
      </div>
      <button className='mt-4 mb-10 hover:bg-violet-600 bg-violet-500 active:bg-violet-600 focus:outline-none focus:ring-4 focus:ring-violet-300 text-sm rounded-md text-white  w-full py-2'>مشاهده محصول</button>
    </div>
  );
}

export default CardProduct;
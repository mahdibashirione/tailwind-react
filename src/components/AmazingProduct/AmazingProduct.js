import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import CardProduct from "./cardProduct";
import { useState } from "react";



const AmazingProduct = () => {

  const [products, setProducts] = useState([
    { photo: '/photoProductAmazing/1.jpg', name: 'چمدان مدل لاک پشتی مجموعه 2 عددی', price: 919000, discount: 40, id: 'psa-1' },
    { photo: '/photoProductAmazing/2.jpg', name: 'کوله پشتی 65 لیتری فوروارد مدل FCLT420', price: 929000, discount: 40, id: 'psa-2' },
    { photo: '/photoProductAmazing/3.jpg', name: 'کیف دستی گوگانا مدل GOOG-0074', price: 295000, discount: 40, id: 'psa-3' },
    { photo: '/photoProductAmazing/4.jpg', name: 'سیستم امنیتی لانگسی مدل WIFcasr2415c', price: 4257000, discount: 40, id: 'psa-4' }
  ])

  return (
    <div className='w-full bg-violet-500'>
      <div className='container mx-auto flex items-center justify-center flex-row-reverse'>

        <div className='h-80 w-2/6 lg:w-1/6 md:w-1/6 flex flex-col justify-between items-center'>
          <img className='h-4/6 xl:h-4/5' src='/svgLogo/63494995.png' alt='noLoaded' />
          <button className='border border-solid border-white rounded-md outline-none text-white py-2 px-4 focus:ring-4 focus:ring-violet-200'>مشاهده همه</button>
        </div>

        <div className='w-4/6 lg:w-5/6 md:w-5/6 p-2 md:p-4 ' dir='rtl'>
          <Swiper slidesPerView={1} spaceBetween={5}
            pagination={{ "clickable": true }}
            breakpoints={{
              0: {
                "slidesPerView": 1,
                "spaceBetween": 10
              }, 640: {
                "slidesPerView": 1.2,
                "spaceBetween": 10
              },
              "@0.75": {
                "slidesPerView": 1.3,
                "spaceBetween": 10
              },
              "@0.90": {
                "slidesPerView": 1.5,
                "spaceBetween": 10
              },
              "@1.00": {
                "slidesPerView": 1.7,
                "spaceBetween": 10
              }, "@1.15": {
                "slidesPerView": 2.5,
                "spaceBetween": 10
              },
              "@1.50": {
                "slidesPerView": 3.7,
                "spaceBetween": 10
              },
              "@1.80": {
                "slidesPerView": 4,
                "spaceBetween": 10
              },
              "1200": {
                "slidesPerView": 4.2,
                "spaceBetween": 10
              },

            }} className="mySwiper">

            {products.map(p => {
              return <SwiperSlide className='rounded-md p-2'>
                <CardProduct key={p.id} product={p} />
              </SwiperSlide>
            })}

          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default AmazingProduct;
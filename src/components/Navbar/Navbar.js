import { HiLogin } from "react-icons/hi";
import { HiShoppingCart } from "react-icons/hi";

const Navbar = (props) => {
  return (
    <header class="w-full sticky top-0 bg-white z-10 border-b h-14">
      <nav class="h-full container flex relative justify-between items-center flex-wrap px-4">
        <div class="btnNav lg:hidden cursor-pointer flex flex-col items-center rounded-md">
          <div class="w-6 h-[3px] bg-slate-900 rounded-lg"></div>
          <div class="w-6 h-[3px] bg-slate-900 rounded-lg my-[6px]"></div>
          <div class="w-6 h-[3px] bg-slate-900 rounded-lg"></div>
        </div>

        <div class="hidden lg:block">
          <img src="/public/svgLogo/fh-logo.svg" alt="#logoSite" />
        </div>

        <ul
          class="md:h-full md:p-0 nav hidden w-full bg-slate-50 absolute right-0 top-full px-4 overflow-hidden md:bg-white md:relative md:top-0 md:w-auto md:flex items-center justify-center">
          <li class="md:h-full w-full lg:w-auto lg:mx-4"><a href="#"
            class="h-full py-2 md:py-0 flex items-center hover:text-purple-800 whitespace-nowrap ">خانه</a>
          </li>
          <li class="md:h-full w-full md:w-auto md:mx-4"><a href="#"
            class="h-full py-2 md:py-0 flex items-center hover:text-purple-800 whitespace-nowrap ">فروشگاه</a>
          </li>
          <li class="md:h-full w-full md:w-auto md:mx-4"><a href="#" class="md:py-0 h-full flex items-center py-2 hover:text-purple-800 whitespace-nowrap ">سبد
            خرید</a></li>
          <li class="md:h-full w-full md:w-auto md:mx-4"><a href="#"
            class="h-full py-2 md:py-0 flex items-center hover:text-purple-800 whitespace-nowrap ">پشتیبانی</a></li>
          <li class="md:h-full w-full md:w-auto md:mx-4"><a href="#"
            class="h-full py-2 md:py-0 flex items-center hover:text-purple-800 whitespace-nowrap ">درباره
            ما</a></li>
        </ul>
        <div className="flex items-center h-full">
          <a href="#" class="h-full flex items-center justify-center ml-4 relative">
            <HiShoppingCart className="w-6 h-6 fill-slate-800 " />
            <span className="font-sans text-sm absolute top-2 left-3 bg-red-500 text-white w-4 h-4 rounded-full flex items-center justify-center">
              {props.totalItem}
            </span>
          </a>
          <a href="#" class="h-full flex items-center justify-center">
            <HiLogin className="w-6 h-6 ml-1 fill-slate-800 " />
            Login
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
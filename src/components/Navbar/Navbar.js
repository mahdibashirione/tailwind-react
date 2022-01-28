import { FiHome } from 'react-icons/fi'
import { FiBox } from 'react-icons/fi'
import { FiInfo } from 'react-icons/fi'
import { FiShoppingCart } from 'react-icons/fi'
import { FiX } from 'react-icons/fi'
const Navbar = ({ navbar, closeNavbar }) => {
  return (
    <div ref={navbar} className=' w-full lg:w-52 h-screen p-2 absolute top-0 right-full lg:left-0 lg:top-full lg:border-r-2 bg-white dark:bg-zinc-800 dark:lg:bg-zinc-900 duration-500 overflow-hidden' >
      {window.innerWidth < 769 && <FiX onClick={closeNavbar} className='dark:text-white text-3xl cursor-pointer dark:hover:bg-gray-600 rounded ml-2 my-4 overflow-hidden' />}
      <ul className='w-full flex flex-col items-start dark:text-gray-300 lg:px-4 overflow-hidden '>
        <li className='w-full hover:bg-slate-100 dark:hover:bg-gray-600 rounded px-4 py-2'><a className='w-full text-lg flex items-center' href='/'><FiHome className='mr-2 dark:text-gray-300' />Home</a></li>
        <li className='w-full hover:bg-slate-100 dark:hover:bg-gray-600 rounded px-4 py-2'><a className='w-full text-lg flex items-center' href='/Product'><FiBox className='mr-2 dark:text-gray-300' />Product</a></li>
        <li className='w-full hover:bg-slate-100 dark:hover:bg-gray-600 rounded px-4 py-2'><a className='w-full text-lg flex items-center' href='/Cart'><FiShoppingCart className='mr-2 dark:text-gray-300' />Cart</a></li>
        <li className='w-full hover:bg-slate-100 dark:hover:bg-gray-600 rounded px-4 py-2'><a className='w-full text-lg flex items-center' href='/Info'><FiInfo className='mr-2 dark:text-gray-300' />Info</a></li>
      </ul>
    </div>
  );
}

export default Navbar;
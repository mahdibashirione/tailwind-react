import { useRef } from 'react';
import { BiSearch } from 'react-icons/bi'
import { FiMenu } from 'react-icons/fi'
import { FiLogIn } from 'react-icons/fi'
import { FiHome } from 'react-icons/fi'
import { FiBox } from 'react-icons/fi'
import { FiInfo } from 'react-icons/fi'
import { FiShoppingCart } from 'react-icons/fi'
import { FiX } from 'react-icons/fi'

const Header = () => {
  const navbar = useRef()

  const showNavbar = () => {
    if (navbar.current.matches('.right-full')) {
      navbar.current.classList.remove('right-full')
      navbar.current.classList.add('right-0')
    } else {
      navbar.current.classList.remove('right-0')
      navbar.current.classList.add('right-full')
    }
  }

  const closeNavbar = () => {
    if (navbar.current.matches('.right-0')) {
      navbar.current.classList.remove('right-0')
      navbar.current.classList.add('right-full')
    } else {
      navbar.current.classList.remove('right-full')
      navbar.current.classList.add('right-0')
    }
  }

  return (
    <header className='w-full shadow-md'>
      <div className='dark:bg-zinc-900 z-10 container mx-auto bg-white p-2 sticky top-0 flex flex-col lg:px-4 lg:pt-3 lg:pb-0 items-center'>
        <div className='w-full flex flex-row justify-between py-1 lg:p-0'>
          <div className='flex flex-row items-center'>
            <a href='/Login' className='flex items-center dark:text-white' >
              login
              <FiLogIn onClick={showNavbar} className='dark:text-gray-100 text-gray-400 text-2xl cursor-pointer inline-block ' />
            </a>
            <a href='/Cart' className='relative inline-block'>
              <FiShoppingCart className='ml-4 text-xl text-gray-500 dark:text-gray-300' />
              <span className='w-5 h-5 flex items-center justify-center bg-red-700 text-sm font-mono text-white rounded-full absolute bottom-3 left-6'>
                12
              </span>
            </a>
          </div>
          <label className='lg:w-1/3 flex w-auto align-center border-solid border-2 dark:border-gray-500 rounded-md items-center justify-start px-2 py-1 '>
            <BiSearch className='text-lg text-gray-400 dark:text-gray-200 ' />
            <input placeholder='...جستوجو کنید' type='text' className='w-40 dark:bg-zinc-900 dark:text-gray-200 px-2 text-right outline-none lg:w-full' />
          </label>

          {window.innerWidth < 769 && <FiMenu onClick={showNavbar} className='dark:text-gray-100 text-3xl cursor-pointer inline-block ' />}
          {window.innerWidth > 769 && <img className='' src='/svgLogo/logo-quera-heavy.1-1c1287ee3575.svg' alt='noLoaded' />}
        </div>

        <nav ref={navbar} className=' w-full h-screen py-2 absolute lg:relative top-0 right-full lg:inset-auto lg:top-full lg:right-0 lg:h-auto lg:mt-2 bg-white dark:bg-zinc-900 duration-500 ' >
          {window.innerWidth < 769 && <FiX onClick={closeNavbar} className='dark:text-white text-3xl cursor-pointer dark:hover:bg-gray-600 rounded ml-2 my-4 overflow-hidden' />}
          <ul dir='rtl' className='w-full flex flex-col items-start dark:text-gray-300 lg:flex-row '>
            <li className='w-full lg:w-auto hover:bg-slate-100 dark:hover:bg-gray-600 rounded px-4 py-2'><a className='w-full text-lg flex items-center' href='/'><FiHome className='ml-2 dark:text-gray-300' />Home</a></li>
            <li className='w-full lg:w-auto hover:bg-slate-100 dark:hover:bg-gray-600 rounded px-4 py-2'><a className='w-full text-lg flex items-center' href='/Categories'><FiBox className='ml-2 dark:text-gray-300' />Categories</a></li>
            <li className='w-full lg:w-auto hover:bg-slate-100 dark:hover:bg-gray-600 rounded px-4 py-2'><a className='w-full text-lg flex items-center' href='/Info'><FiInfo className='ml-2 dark:text-gray-300' />Info</a></li>
          </ul>
        </nav>

      </div>
    </header>
  );

}

export default Header;
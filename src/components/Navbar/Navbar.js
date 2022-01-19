import { useRef } from 'react';
import { BiSearch } from 'react-icons/bi'
import { FiMenu } from 'react-icons/fi'
import { FiLogIn } from 'react-icons/fi'
import { FiHome } from 'react-icons/fi'
import { FiBox } from 'react-icons/fi'
import { FiInfo } from 'react-icons/fi'
import { FiShoppingCart } from 'react-icons/fi'


const Navbar = () => {
  const miniNav = useRef()

  const onClick = (m) => {
    if (miniNav.current.matches('.hidden')) {
      miniNav.current.classList.remove('hidden')
    } else {
      miniNav.current.classList.add('hidden')
    }
  }

  return (
    <div className='z-10 w-full shadow-md sticky top-0'>
      <header className=' bg-white container mx-auto px-2 py-1 inset-0 flex flex-row-reverse items-center justify-between sm:p-2 '>

        {window.innerWidth < 769 && <FiMenu onClick={onClick} className=' text-3xl cursor-pointer inline-block ' />}

        {window.innerWidth < 640 && <img className="h-6 mr-12 lg:mr-0" src="/svgLogo/logo-quera-heavy.1-1c1287ee3575.svg" alt="not-loaded-logo" />}
        {window.innerWidth > 1023 && <img className="h-7" src='/svgLogo/logo-quera-heavy.1-1c1287ee3575.svg' alt="not-loaded-logo" />}

        {window.innerWidth > 640 && <div className='flex align-center sm:relative'><input placeholder='...جستوجو کنید' type='text' className='text-right sm:border-solid border-2 sm:rounded-md sm:px-7 sm:py-1 sm:outline-none focus:border-sky-500' /><BiSearch className='absolute left-2 top-1/4 text-lg text-gray-400' /></div>}

        <nav ref={miniNav} className='hidden w-full md:w-auto md:border-none md:h-full md:block md:relative absolute  bg-white top-full right-0 overflow-hidden border-solid border-b-2 border-gray-200'>
          <ul className='divide-y divide-dashed md:divide-none text-md md:flex md:justify-end md:p-1'>
            <li className='text-right hover:bg-sky-500 hover:text-white sm:hover:rounded sm:hover:bg-sky-500 sm:ml-2 '><a href="/" className='p-3 sm:px-4 sm:py-2 w-full h-full flex justify-end items-center'><FiHome className='text-md mr-2' />home</a></li>
            <li className='text-right hover:bg-sky-500 hover:text-white sm:hover:rounded sm:hover:bg-sky-500 sm:ml-2 '><a href="/product" className='p-3 sm:px-4 sm:py-2 w-full h-full flex justify-end items-center'><FiBox className='text-md mr-2' />product</a></li>
            <li className='text-right hover:bg-sky-500 hover:text-white sm:hover:rounded sm:hover:bg-sky-500 sm:ml-2 '><a href="/info" className='p-3 sm:px-4 sm:py-2 w-full h-full flex justify-end items-center'><FiInfo className='text-lg mr-2' />info</a></li>
          </ul>
        </nav>

        <div className="flex">
          <a href="/login" className='h-full flex items-center text-md font-sans py-3 cursor-pointer '>
            login<FiLogIn className='text-xl ml-1' />
          </a>
          <a href="/cart" className='hover:bg-gray-200 pl-2 pr-4 rounded-full relative ml-4 h-full flex items-center text-md font-sans py-3 cursor-pointer '>
            <FiShoppingCart className='text-xl' />
            <span className='absolute top-1 left-2/4 bg-violet-500 rounded-full w-5 h-5 text-sm flex align-center justify-center text-white '>0</span>
          </a>
        </div>
      </header>
    </div>
  );

}

export default Navbar;
import BurguerMenu from '../assets/icon-hamburger.svg'
import { useState } from 'react'

const Navbar = () => {

  const [menuClicked, setmenuClicked] = useState(false)

  const handleClick = () => {
    setmenuClicked( prevState => !prevState)
  }

  
  return (
    <nav >
        <ul className={`${menuClicked ? 'flex' : 'hidden'} bg-white py-[20px] w-[329px] h-[305px] absolute left-0 right-0 mx-auto top-[106px] flex-col items-center place-content-around 
        after:content-[""] after:absolute after:top-[-24px] after:right-0 after:border-[12px] after:border-t-transparent after:border-b-white after:border-r-white after:border-l-transparent text-Dark-grayish-blue text-xl z-50
        
        sm:flex sm:after:hidden sm:bg-transparent sm:flex-row sm:top-0 sm:w-[400px] sm:h-[12px] sm:mx-[35px] sm:relative sm:text-white sm:gap-[30px]`}>
            <li className=' cursor-pointer'>About</li>
            <li className=' cursor-pointer'>Services</li>
            <li className=' cursor-pointer'>Projects</li>
            <li className=' cursor-pointer bg-Yellow w-[140px] h-[56px] grid place-content-center rounded-full text-Very-dark-desaturated-blue
            sm:text-black sm:bg-white'>Contact</li>
        </ul>
        <div className='cursor-pointer sm:hidden' onClick={handleClick}>
            <img src={BurguerMenu} alt="menu hamburgesa" />
        </div>
    </nav>
  )
}

export default Navbar


  
  
  
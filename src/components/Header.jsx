
import Link from 'next/link';
import MenuItem from './MenuItem'
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs'
// import DarkModeSwitch from './DarkModeSwitch';
import ThemeChanger from './ThemeChanger';

function Header() {
  return (
    <div className='flex bg-[var(--background-secondary)] text-[var(--primary-dark)] justify-between items-center p-3 max-w-6xl mx-auto'>
      <div className="flex gap-4">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center gap-4">
        {/* <DarkModeSwitch /> */}
        <ThemeChanger />
         <Link href={'/'} className="flex gap-1 items-center">
         <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>MovieScene</span>
         <span className='text-xl hidden sm:inline'>Clone</span>
       </Link>
      </div>
     

    </div>
  )
}

export default Header
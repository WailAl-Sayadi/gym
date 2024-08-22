import React from 'react';
import { CiSearch } from "react-icons/ci";
import { BiDumbbell } from 'react-icons/bi';
import { MdMenu } from 'react-icons/md';
import { PiShoppingCartThin } from 'react-icons/pi';
import NavbarMenu from '../../mocData/data';
import ResponsiveSideBar from './ResponsiveSideBar';
const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <nav>
                <div className=' container fixed flex justify-between items-center  py-8 z-30'>
                    {/**Logo Sec */}
                    <div className='text-2xl flex items-center gap-3 font-bold  px-0 uppercase'>
                        <BiDumbbell className='text-3xl' />
                        <p>Bootcamp</p>
                        <p className='text-primary'>GYM</p>
                    </div>
                    {/**Menu Sec */}
                    <div className='hidden lg:block'>
                        <ul className='flex items-center gap-4 text-gray-600'>
                            {NavbarMenu.map((item) => (
                                < li key={item.id} > <a href={item.link} className='
                                inline-block py-1 px-3
                                hover:text-primary font-semibold'>{item.title}</a></li>
                            ))}
                        </ul>
                    </div>
                    {/**Login Sec */}
                    <div className='flex items-center gap-2'>
                        <button className='text-2xl hover:bg-primary
                        hover:text-white p-2 rounded-full duration-200'>
                            <CiSearch className='' />
                        </button>
                        <button className='text-2xl hover:bg-primary
                        hover:text-white p-2 rounded-full duration-200'>
                            <PiShoppingCartThin className='' />
                        </button>
                        <button className='text-l hover:bg-primary
                        hover:text-white px-3 py-1 rounded-md border-2 border-primary
                        duration-200 hidden md:block'>
                            Login
                        </button>
                    </div>
                    {/**Toggle Collaps Menu Sec */}
                    <div className='md:hidden mdmenu' onClick={() =>
                        //setOpen if not open
                        setOpen(!open)} >
                        <MdMenu className='text-3xl' />
                    </div>
                </div>
            </nav >
            {/**Mobile Menu Side-bar Sec */}
            <ResponsiveSideBar open={open} />

        </>)
}

export default Navbar

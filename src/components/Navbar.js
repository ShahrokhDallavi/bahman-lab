import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Images
import logo from '../images/logo.svg'

const Navbar = () => {

    let [isOpen, setIsOpen] = useState(false)
    return (
        <div className="bg-white z-50 fixed shadow-sm w-full ">
            <div className="lg:px-24 py-5 px-8 lg:flex justify-between items-center">
                <Link to='/'>
                    <img src={logo} alt='logo' />
                </Link>
                <div onClick={() => setIsOpen(!isOpen)} className="absolute left-8 top-8 cursor-pointer lg:hidden">
                    {
                        isOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg> :
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                                </svg>
                    }
                    
                </div>
                <div className={`flex flex-col items-left lg:items-center lg:text-sm text-center lg:flex-row absolute shadow lg:shadow-none lg:static lg:z-auto z-[-1] left-0 w-full px-20 lg:w-auto lg:pl-0 pl:8 transition-all duration-500 ease-in  ${isOpen ? 'top-12 bg-white' : 'top-[-490px]'}`}>
                    <Link to='/' className="md:mr-8 hover:text-primaryColor duration-300 mt-8 mb-4 lg:my-4 lg:ml-4">صفحه اصلی</Link>
                    <Link to='/testlist' className="md:mr-5 hover:text-primaryColor duration-300 my-4 lg:ml-4">لیست آزمایشات</Link>
                    <Link to='/blogpage' className="md:mr-5 hover:text-primaryColor duration-300 my-4 lg:ml-4">وبلاگ</Link>
                    <Link to='/connect' className="md:mr-5 hover:text-primaryColor duration-300 my-4 lg:ml-96 lg:pl-28 lg:pl-4">ارتباط با ما</Link>
                    <Link to='/javabdehi'><button className=" text-white py-2 lg:px-3 px-12 bg-primaryColor hover:opacity-75 duration-300 rounded my-4 lg:my-0">جواب دهی آنلاین</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
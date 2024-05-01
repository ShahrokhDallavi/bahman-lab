import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from '../helper/ScrollToTop';

const NotFound = () => {
    return (
        <div className='h-screen flex flex-col justify-center items-center text-center px-24'>
            <ScrollToTop />
            <p className='text-primaryColor font-bold text-6xl'>404</p>
            <h5 className='text-textColor text-lg'>متاسفانه صفحه مورد نظر یافت نشد</h5>
            <h5 className='text-textColor text-sm'>لطفا به صفحه اصلی برگردید و یا توسط راه های ارتباطی در پایین صفحه با همکاران ما تماس حاصل نمایید.</h5>
            <div className='flex justify-center pt-8'>
                <Link to='/'><button className='bg-primaryColor rounded text-white text-sm py-2 px-4 mx-2 hover:opacity-75 duration-300'>صفحه اصلی</button></Link>
                <Link to='/javabdehi'><button className='bg-primaryColor rounded text-white text-sm py-2 px-4 mx-2 hover:opacity-75 duration-300'>جوابدهی آنلاین</button></Link>   
            </div>
        </div>
    );
};

export default NotFound;
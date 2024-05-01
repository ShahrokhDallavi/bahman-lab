import React, { useState } from 'react';

// helper Component
import ScrollToTop from '../helper/ScrollToTop';

// Images
import guide from '../images/guide.png'

const Javabdehi = () => {

    const [action,setAction] = useState("مراجعین");

    return (
        <div className='flex justify-center items-center'>
            <ScrollToTop />
            <div className='flex flex-wrap justify-center items-center'>
                <div className='flex flex-col justify-center items-center bg-bgForm rounded py-8 md:px-28 lg:px-8 lg:mb-28  mt-40 md:mx-24 lg:mx-0'>
                    <h3 className='text-primaryColor font-bold pb-8'>آزمایشگاه پاتوبیولوژی بهمن</h3>
                    <h5 className='text-secondaryColor font-bold tracking-wider lg:pb-8'>{action}</h5>
                    <div className='rounded-lg p-8 flex flex-col w-full mt-10'>
                        <div>
                            <label className='text-sm tracking-wider text-primaryColor'>
                                شماره پزیرش
                            </label>
                            <input className='shadow border border-gray rounded w-full py-2 px-4 text-textColor focus:outline-none focus:shadow-outline focus:ring-1 focus:ring-secondaryColor cursor-text' type="username" placeholder="شماره قبض یا کد ملی" />
                        </div>
                        <div className='mt-4 mb-8'>
                            <label className='text-sm tracking-wider text-primaryColor'>
                                رمز عبور
                            </label>
                            <input className='shadow border border-gray rounded w-full py-2 px-4 text-textColor focus:outline-none focus:shadow-outline focus:ring-1 focus:ring-secondaryColor cursor-text' type="password" placeholder="رمز ورود" />
                        </div>
                    </div>
                    <button className='bg-primaryColor text-white lg:w-[275px] w-[262px] py-2 rounded tracking-widest hover:shadow-inner-deep hover:bg-bgForm hover:text-primaryColor duration-300 mb-12'>ورود</button>
                </div>
                <div className='flex flex-col justify-center items-center text-center bg-primaryColor rounded py-16 px-4 md:mx-8 md:mx-24 lg:mx-0 mb-28 lg:mt-40'>
                    <div className='flex text-textColor text-xs lg:text-sm pb-8'>
                        <button className={`bg-bgSection mx-2 py-2 px-4 rounded shadow-inner-deep hover:bg-primaryColor hover:text-white duration-200 ${action==="مراجعین" ? "bg-primaryColor , text-white" : ""}`} onClick={()=>{setAction("مراجعین")}}>ورود مراجعین</button>
                        <button className={`bg-bgSection mx-2 py-2 px-4 rounded shadow-inner-deep hover:bg-primaryColor hover:text-white duration-200 ${action==="آزمایشگاه های همکار" ? "bg-primaryColor , text-white" : ""}`} onClick={()=>{setAction("آزمایشگاه های همکار")}}>آزمایشگاه های همکار</button>
                        <button className={`bg-bgSection mx-2 py-2 px-4 rounded shadow-inner-deep hover:bg-primaryColor hover:text-white duration-200 ${action==="پزشکان" ? "bg-primaryColor , text-white" : ""}`} onClick={()=>{setAction("پزشکان")}}>ورود پزشکان</button>
                    </div>
                    <img src={guide} alt='guide' className='w-[500px] relative' />
                    <h6 className='text-gray text-sm tracking-wider lg:pb-4'>نام کاربری: شماره پذیرش یا کد ملی</h6>
                    <h6 className='text-gray text-sm tracking-wider'>رمز عبور: شماره اشتراک یا شماره موبایل ثبت شده در سامانه آزمایشگاه</h6>
                </div>
            </div>
        </div>
    );
};

export default Javabdehi;
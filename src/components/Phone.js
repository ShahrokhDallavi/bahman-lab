import React from 'react';

// Images
import dr from '../images/dr.png';

const Phone = () => {
    return (
        <div className="pt-28 text-center lg:mt-8">
            <div className="relative flex flex-wrap lg:flex-rows justify-around items-center text-white bg-primaryColor rounded-xl px-8 lg:px-0 py-8 md:mx-24 mx-10">
                <div>
                    <img src={dr} alt='drImage' className="w-56 absolute -top-20 right-14 lg:w-64 lg:right-5 lg:-top-24 md:right-48" />
                </div>
                <div className="flex flex-col pt-32 lg:pt-8 lg:pr-24">
                    <h2 className="text-lg">از پزشکان آزمایشگاه بهمن <span className="text-secondaryColor">مشاوره</span> بگیرید</h2>
                    <p className="text-sm px-2 text-center pt-2 pb-8 leading-relaxed">بهترین پزشکان، با تجربه و سابقه کاری درخشان جهت انجام مشاوره و پاسخ کامل آزمایشات شما آماده خدمت رسانی هستند.</p>
                </div>
                <div className="flex flex-col lg:flex-row justify-center items-center text-center">
                    <div className="text-sm lg:ml-8">
                        <p>همین حالا <span className="text-secondaryColor">تماس</span> بگیرید!</p>
                        <h2>۰۸۱-۳۳۲۴۹۷۸۶</h2>
                        <p className="text-xs"> ۷ صبح الی ۲ بعد از ظهر<br />۳ بعد از ظهر الی ۸ شب</p>
                    </div>
                    <a href='tel:08133249786' className="relative w-10 h-10 flex justify-center items-center mt-4 lg:mt-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex items-center justify-center rounded-full h-10 w-10 bg-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#00D295" className="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Phone;
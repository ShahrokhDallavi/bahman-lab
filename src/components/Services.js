import React from 'react';

// Images
import Microscope from '../images/Microscope.svg';
import ManWithMask from '../images/ManWithMask.svg';
import Stethoscope from '../images/Stethoscope.svg';
import onlineService from '../images/onlineService.svg';
import arrowbottom from '../images/arrowbottom.svg'

const Services = () => {
    return (
        <div className='lg:pt-2 md:pt-0'>
            <div className="lg:px-24 px-8 w-full lg:h-80  lg:-mt-10 bg-primaryColor mt-[-18px]">
                <div className="flex items-center justify-center relative">
                    <img src={arrowbottom} alt='arrowbottom' className="relative lg:block mx-auto hidden" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="animate-bounce lg:block hidden absolute mx-auto w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                    </svg>
                </div>
            <div className="flex flex-col items-center lg:items-start text-center text-right mt-8 lg:mt-2 mb-12 pt-8 lg:pt-2">
                <h1 className="text-lg font-bold text-white">خدمات آزمایشگاه پاتوبیولوژی بهمن</h1>
                <div className="h-1 w-20 bg-white rounded mt-4"></div>
            </div>
            <div className="grid lg:grid-rows-1 grid-flow-col lg:gap-4 grid-rows-4 gap-2 pb-24 justify-center">
                    <div className="flex flex-col justify-center items-center px-4 lg:py-2 lg:px-8 w-56 h-56 lg:w-80 lg:h-64 bg-white border border-gray rounded-lg shadow-lg lg:hover:-translate-y-2 lg:hover:shadow-2xl duration-300 cursor-pointer">
                        <div className="inline-flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-primaryColor rounded-full">
                            <img src={Microscope} alt='Microscope' />
                        </div>
                        <div className="text-xs lg:text-sm text-center">
                            <h2 className="text-primaryColor text-xs pt-4 lg:pt-8 ">انجام آزمایشات با پیشرفته ترین دستگاه ها</h2>
                            <p className="pt-2 lg:pt-4 text-textColor leading-relaxed">آزمایشگاه بهمن با بروز ترین دستگاه ها و بهترین کیت های آزمایشگاهی جهت انجام انواع آزمایشات آماده خدمت رسانی به شماست.</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center px-4 lg:py-2 lg:px-8 w-56 h-56 lg:w-80 lg:h-64 bg-white border border-gray rounded-lg shadow-lg lg:hover:-translate-y-2 lg:hover:shadow-2xl duration-300 cursor-pointer">
                        <div className="inline-flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-primaryColor rounded-full">
                            <img src={ManWithMask} alt='ManWithMask' />
                        </div>
                        <div className="text-xs lg:text-sm text-center">
                            <h2 className="text-primaryColor text-xs pt-4 lg:pt-8">محیط استریل شده به صورت روزانه</h2>
                            <p className="lg:pb-4 pt-4 text-textColor leading-relaxed">با توجه به شیوع بیماری کرونا جهت سلامتی کارکنان و مراجعین محترم به منظور جلوگیری از انتشار ویروس محیط آزمایشگاه به صورت روزانه استرلیزه میشود.</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center px-4 lg:py-2 lg:px-8 w-56 h-56 lg:w-80 lg:h-64 bg-white border border-gray rounded-lg shadow-lg lg:hover:-translate-y-2 lg:hover:shadow-2xl duration-300 cursor-pointer">
                        <div className="inline-flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-primaryColor rounded-full">
                            <img src={Stethoscope} alt='Stethoscope' />
                        </div>
                        <div className="text-xs lg:text-sm text-center">
                            <h2 className="text-primaryColor text-xs pt-4 lg:pt-8">پزشکان ماهر جهت دریافت مشاوره</h2>
                            <p className="lg:pb-4 pt-4 text-textColor leading-relaxed">بهترین پزشکان با تجربه و سابقه کاری درخشان جهت انجام مشاوره و پاسخ کامل آزمایشات شما آماده خدمت رسانی هستند.</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center px-4 lg:py-2 lg:px-8 w-56 h-56 lg:w-80 lg:h-64 bg-white border border-gray rounded-lg shadow-lg lg:hover:-translate-y-2 lg:hover:shadow-2xl duration-300 cursor-pointer">
                        <div className="inline-flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-primaryColor rounded-full">
                            <img src={onlineService} alt='onlineService' />
                        </div>
                        <div className="text-xs lg:text-sm text-center">
                            <h2 className="text-primaryColor text-xs pt-4 lg:pt-8">خدمات مجازی و جوابدهی آنلاین</h2>
                            <p className="lg:pb-4 pt-4 text-textColor leading-relaxed">جهت تسریع در جوابدهی و دریافت جواب آزمایشات بدون نیاز به مراجعه حضوری به صورت سیستم جوابدهی آنلاین در خدمت شما هستیم.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
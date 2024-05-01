import React from 'react';

// Images
import banner01 from '../images/banner01.png'
import banner02 from '../images/banner02.png'
import banner03 from '../images/banner03.png'

const Process = () => {
    return (
        <div className="-mt-80 lg:mt-8">
            <div className="flex flex-col text-center items-center lg:items-start lg:text-right px-24 lg:pt-28 pt-96 ">
                <h1 className="text-lg font-bold text-textColor">روند انجام آزمایش در آزمایشگاه بهمن</h1>
                <div className="h-1 w-20 bg-primaryColor rounded mt-4"></div>
            </div>
            <div className="px-24 py-14 flex">
                <div className="flex flex-col lg:flex-row w-full justify-center items-center">
                <div className="lg:w-1/2 lg:pr-10 md:py-6">
                    <div className="flex relative pb-20 md:mt-2">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primaryColor inline-flex items-center justify-center text-white relative z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                        </svg>
                    </div>
                    <div className="flex-grow lg:pl-24 pr-2">
                        <h2 className="font-bold text-primaryColor mb-2 tracking-wider">انواع آزمایشات</h2>
                        <p className="leading-relaxed text-justify text-textColor text-sm md:text-lg">جهت رفاه حال مراجعین محترم، آزمایشگاه بهمن امکان انجام نمونه گیری انواع آزمایشات را فراهم نموده است.</p>
                    </div>
                    </div>
                    <div className="flex relative pb-24">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primaryColor inline-flex items-center justify-center text-white relative z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                    </div>
                    <div className="flex-grow lg:pl-24 pr-2">
                        <h2 className="font-bold text-primaryColor mb-2 tracking-wider">دریافت نوبت</h2>
                        <p className="leading-relaxed text-justify text-textColor text-sm lg:text-lg">میتوانید جهت دریافت نوبت و یا مشاوره تلفنی با پزشکان ما تماس حاصل نمایید.( ۹۷۸۶ ۳۳۲۴-۰۸۱)</p>
                    </div>
                    </div>
                    <div className="flex relative pb-20">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primaryColor inline-flex items-center justify-center text-white relative z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                        </svg>
                    </div>
                    <div className="flex-grow lg:pl-24 pr-2">
                        <h2 className="font-bold text-primaryColor mb-2 tracking-wider">مراجعه حضوری</h2>
                        <p className="leading-relaxed text-justify text-textColor text-sm lg:text-lg">جهت مراجعه حضوری از شنبه تا پنجشنبه در ساعات ۷ صبح الی ۲ بعد از ظهر و ۳ بعد از ظهر الی ۸ شب در خدمت شما هستیم.</p>
                    </div>
                    </div>
                    <div className="flex relative pb-20">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primaryColor inline-flex items-center justify-center text-white relative z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                    </div>
                    <div className="flex-grow lg:pl-24 pr-2">
                        <h2 className="font-bold text-primaryColor mb-2 tracking-wider">نمونه گیری در منزل یا آزمایشگاه</h2>
                        <p className="leading-relaxed text-justify text-textColor text-sm lg:text-lg">جهت رفاه حال مراجعین محترم، آزمایشگاه بهمن امکان انجام نمونه گیری در منزل را فعال نموده است.</p>
                    </div>
                    </div>
                    <div className="flex relative">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primaryColor inline-flex items-center justify-center text-white relative z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
                        </svg>
                    </div>
                    <div className="flex-grow lg:pl-24 pr-2">
                        <h2 className="font-bold text-primaryColor mb-2 tracking-wider">جوابدهی آنلاین</h2>
                        <p className="leading-relaxed text-justify text-textColor text-sm lg:text-lg">جهت تسریع در جوابدهی امکان دریافت جواب آزمایشات به صورت آنلاین در ابتدا سایت فراهم است.</p>
                    </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <img className="lg:w-[800px] lg:h-[250px] lg:mb-2 -mb-8 object-cover object-center rounded-lg lg:mt-0 mt-12 border border-gray" src={banner01} alt="banner01" />
                    <img className="lg:w-auto lg:h-[250px] lg:mb-2 -mb-8 object-cover object-center rounded-lg lg:mt-0 mt-12 border border-gray" src={banner02} alt="banner02" />
                    <img className="lg:w-auto lg:h-[250px]  object-cover object-center rounded-lg lg:mt-0 mt-12 border border-gray" src={banner03} alt="banner03" />
                </div>
                </div>
            </div>
        </div>
    );
};

export default Process;
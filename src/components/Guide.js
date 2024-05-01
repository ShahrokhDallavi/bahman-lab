import React from 'react';

// Images
import guide from '../images/guide.png';

const Guide = () => {
    return (
        <div>
            <div className="flex flex-col items-center lg:items-start text-center lg:text-right px-24 w-full ">
                <h1 className="text-lg font-bold text-textColor">روند دریافت جواب آزمایش اینترنتی</h1>
                <div className="h-1 w-20 bg-primaryColor rounded mt-4"></div>
            </div>
            <div className="w-full py-8 lg:py-0 flex flex-col lg:flex-row lg:items-center lg:px-24"> 
                <div className="text-textColor text-sm px-8">
                    <h6><span className="text-primaryColor font-bold">※ </span>ورود به وبسایت آزمایشگاه</h6>
                    <h6><span className="text-primaryColor font-bold">※ </span> انتخاب گزینه جوابدهی آنلاین مندرج در صفحه نخست</h6>
                    <h6><span className="text-primaryColor font-bold">※ </span> ورود به درگاه جوابدهی اینترنتی</h6>
                    <h6><span className="text-primaryColor font-bold">※ </span> انتخاب نوع کاربری خود: (ورود مراجعین،ورود پزشکان،ورود آزمایشگاه همکار)</h6>
                    <h6><span className="text-primaryColor font-bold">※ </span> درج اطلاعات مراجعه‌کننده در کادر‌های مشخص شده</h6>
                    <h6><span className="text-primaryColor font-bold">※ </span> کلیک بر آیکون «ورود» و دریافت جواب آزمایش</h6>
                    <p className="text-red font-bold py-4">توجه نمایید یا با شماره پذیرش و شماره اشتراک وارد سامانه شوید یا با کد ملی و شماره موبایل. درصورتی که با کد ملی و موبایل نمی توانید وارد سامانه شوید با همکاران پذیرش تماس حاصل فرمایید تا اطلاعات شما بررسی شود.</p>
                    <p className="text-red pb-2"><span className="text-red font-bold">※ </span> نام کاربری: شماره پذیرش یا کد ملی</p>
                    <p className="text-red"><span className="text-red font-bold">※ </span> رمز عبور: شماره اشتراک یا شماره موبایل ثبت شده در سامانه آزمایشگاه</p>
                </div>
                <div>
                    <img src={guide} alt='guide' className="lg:w-[900px]" />
                </div>
            </div>
        </div>
    );
};

export default Guide;

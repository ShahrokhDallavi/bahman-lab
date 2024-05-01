import React from 'react';
import { Link } from 'react-router-dom';

// Components
import BackToTop from './BackToTop';

const Footer = () => {
    return (
        <div className="text-gray bg-[#080E20] ">
            <div className="flex flex-col justify-center items-center text-center lg:px-24 px-8 lg:flex-row lg:text-start lg:py-12">
                <div className=" py-16 lg:py-0 text-sm lg:w-80 lg:pl-24">
                    <h6 className="text-lg font-bold text-primaryColor pb-4">درباره آزمایشگاه بهمن</h6>
                    <p className="leading-relaxed lg:text-justify">آزمایشگاه بهمن با هدف کمک به بیماران و راه اندازی تمامی آزمایش ها و خدمات مورد نیاز آنان جهت تشخیص و درمان به موقع آنان و ارتقای سطح کیفیت زندگی ایشان در حد امکان شکل گرفته است.</p>
                </div>
                <div className="flex flex-col pb-12 lg:pb-0 lg:pl-24">
                    <h4  className="text-lg font-bold text-primaryColor pb-4">دسترسی سریع</h4>
                    <Link to='/' className="hover:text-secondaryColor duration-300 pb-2">صفحه اصلی</Link>
                    <Link to='/testlist' className="hover:text-secondaryColor duration-300 pb-2">لیست آزمایشات</Link>
                    <Link to='/javabdehi' className="hover:text-secondaryColor duration-300 pb-2">جوابدهی آنلاین</Link>
                    <Link to='/blogpage' className="hover:text-secondaryColor duration-300 pb-2">وبلاگ آزمایشگاه</Link>
                </div>
                <div className="flex flex-col pb-12 lg:pb-0">
                    <h4 className="text-lg font-bold text-primaryColor pb-4">پل ارتباطی</h4>
                    <p className="lg:pb-2 pb-4">آدرس: همدان-نهاوند خیابان ۱۷ شهریور- جنب داروخانه دکتر نیکومنش - ساختمان دکتر ابوالقاضی طبقه زیرین(آزمایشگاه بهمن)</p>
                    <p className="lg:pb-2 pb-4">ایمیل: bahmanlab2013@gmail.com</p>
                    <p className="pb-2">تلفن: ۳۳۲۴۹۷۸۶-۰۸۱</p>
                    <p className="pb-2">فکس: ۳۳۲۴۹۷۸۶-۰۸۱</p>
                </div>
            </div>
            <BackToTop />
            <div className="bg-gray text-textColor text-sm text-center py-4">
                <p>© تمامی حقوق این سایت مطعلق به<span className="text-primaryColor"> آزمایشگاه پاتوبیولوژی بهمن</span> میباشد.</p>
            </div>
        </div>
    );
};

export default Footer;
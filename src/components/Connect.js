import React from 'react';

// helper component
import ScrollToTop from '../helper/ScrollToTop';

const Connect = () => {
    return (
        <div classNameName='flex justify-center items-center pt-20'>
            <ScrollToTop />
            <div className="py-8 flex items-end justify-center relative h-screen w-full text-textColor">
                <iframe width="100%" height="100%" className=" absolute inset-0 pt-20" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206.25563000364528!2d48.366824077668284!3d34.19517476766632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fee3ffed732eb5d%3A0xf6859522c76ae92a!2z2KLYstmF2KfbjNi02q_Yp9mHINio2YfZhdmG!5e0!3m2!1sen!2sus!4v1714178190356!5m2!1sen!2sus"></iframe>
                <div className="bg-white relative flex flex-wrap p-8 mb-20 mx-20 rounded-lg shadow-2xl border border-gray">
                    <div className="lg:w-1/2 px-6">
                        <h2 className="tracking-widest text-xs">آدرس</h2>
                        <p className="mt-2 text-justify text-sm">همدان-نهاوند خیابان ۱۷ شهریور- جنب داروخانه دکتر نیکومنش - ساختمان دکتر ابوالقاضی طبقه زیرین(آزمایشگاه بهمن)</p>
                    </div>
                    <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                        <h2 className="tracking-widest text-xs">ایمیل</h2>
                        <a href='mailto:bahmanlab2013@gmail.com' className="text-primaryColor">bahmanlab2013@gmail.com</a>
                        <h2 className="tracking-widest text-xs mt-4">تلفن</h2>
                        <a href='tel:08133249786' className="leading-relaxe hover:text-primaryColor duration-300">۰۸۱-۳۳۲۴۹۷۸۶</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Connect;
import React from 'react';
import { Link } from 'react-router-dom';

// Images
import headerImage from '../images/headerImage.png';

const Header = () => {
    return (
        <div className="text-textColor">
            <div className="flex flex-col items-center lg:px-24 px-8 pt-24 lg:flex-row lg:pt-36">
                <div className="text-center lg:text-right lg:mt-4">
                    <h1 className="text-xl pt-8 pb-4 lg:text-3xl lg:leading-relaxed"> آزمایشگاه پاتوبیولوژی بهمن <br /><span className="text-primaryColor">فداکاری سرمشق حرفه ماست.</span></h1>
                    <p className="leading-loose text-sm text-justify mb-8 lg:ml-80 lg:leading-loose">آزمایشگاه پاتوبیولوژی بهمن با بروزترین دستگاه ها و کیت های آزمایشگاهی در خدمت شماست. ما یک تیم متخصص و مجرب در زمینه ارائه خدمات تشخیص روتین، تخصصی و فوق تخصصی به بیماران و پزشکان و تحلیل داده های علمی آزمایشگاهی هستیم. هدف ما ارائه خدمات دقیق و حرفه ای در حوزه تشخیص و درمان به موقع است. با استفاده از تجهیزات پیشرفته و کادری متخصص و باسابقه، ما به شما  از صحت و دقت نتایج اطمینان کامل میدهیم.</p>
                    <div className=" mb-8 lg:mb-24">
                        <Link to='/javabdehi' className="bg-secondaryColor py-2 px-6 hover:bg-primaryColor hover:text-white duration-300 rounded">مشاهده جواب آزمایش</Link>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full lg:w-1/2 w-5/6 lg:pt-4">
                    <img className="object-cover object-center" alt="hero" src={headerImage} />
                </div>
            </div>
        </div>
    );
};

export default Header;
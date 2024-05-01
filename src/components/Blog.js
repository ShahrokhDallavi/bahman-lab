import React from 'react';
import { Link } from 'react-router-dom';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Images
import blog01 from '../images/blog01.jpeg';
import blog02 from '../images/blog02.jpeg';
import blog03 from '../images/blog03.jpeg';
import blog04 from '../images/blog04.jpeg';

const Blog = () => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true, 
                    dots: true,
                }
            },
        ]
    };


    return (
        <div>
            <div className="px-5 py-24 mx-auto">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-right md:px-24 px-8 w-full ">
                    <h1 className="text-lg font-bold text-textColor">وبلاگ های آزمایشگاه بهمن</h1>
                    <div className="h-1 w-20 bg-primaryColor rounded mt-4"></div>
                </div>
                <div className="grid grid-cols-1 px-16 lg:px-20 mt-8">
                <Slider {...settings}>
                    <div>
                        <Link to="/blogpage" className="lg:w-1/4 md:w-1/2 p-4">
                            <div className="bg-white border border-gray p-4 rounded-lg hover:shadow-lg duration-300" dir='rtl'>
                                <img className="h-40 rounded-lg w-full object-cover object-center mb-8" src={blog01} alt="blog01" />
                                <h3 className="text-primaryColor text-xs mb-4">ویروس کرونا: نگاهی جامع به ابعاد مختلف تا کنترل بیماری</h3>
                                <p className="leading-relaxed text-textColor text-sm text-justify ">این مقاله به طور جامع به زمینه‌های مختلف ویروس کرونا می‌پردازد، شامل مسائلی از جمله انتقال ویروس، علائم و عوارض، روش‌های تشخیص، واکسیناسیون، و راهکارهای کنترل <span className="text-[#969696]">و پیشگیری از انتشار ...</span></p>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/blogpage" className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-white border border-gray p-4 rounded-lg hover:shadow-lg duration-300" dir='rtl'>
                                <img className="h-40 rounded-lg w-full object-cover object-center mb-8" src={blog02} alt="blog02" />
                                <h3 className="text-primaryColor text-xs mb-4">دیابت: شناخت، پیشگیری و مدیریت</h3>
                                <p className="leading-relaxed text-textColor text-sm text-justify">دیابت یکی از بیماری‌های شایع و مزمن جهان است که باعث افزایش قند خون در بدن می‌شود و در صورت عدم مدیریت مناسب، به عوارض جدی منجر می‌شود. در این مقاله، <span className="text-[#969696]">با توجه به ...</span></p>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/blogpage" className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-white border border-gray p-4 rounded-lg hover:shadow-lg duration-300" dir='rtl'>
                                <img className="h-40 rounded-lg w-full object-cover object-center mb-8" src={blog03} alt="blog03" />
                                <h3 className="text-primaryColor text-xs mb-4">پروستات: علائم، درمان، و پیشگیری</h3>
                                <p className="leading-relaxed text-textColor text-sm text-justify">بیماری‌ پروستات از جمله مسائل شایعی است که مردان ممکن است با آن مواجه شوند و می‌توانند با علائم مختلفی همراه باشند، از جمله: ناراحتی و درد در منطقه فرج، مشکلات  <span className="text-[#969696]">در تحریک جنسی و...</span></p>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/blogpage" className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-white border border-gray p-4 rounded-lg hover:shadow-lg duration-300" dir='rtl'>
                                <img className="h-40 rounded-lg w-full object-cover object-center mb-8" src={blog04} alt="blog04" />
                                <h3 className="text-primaryColor text-xs mb-4">غربالگری سه ماهه اول بارداری</h3>
                                <p className="leading-relaxed text-textColor text-sm text-justify">آزمایش غربالگری سه ماهه اول بارداری ابزاری قابل اعتماد برای ارزیابی سلامت مادر و جنین است. انجام این آزمایشات به مادران کمک می‌کند تا مشکلات سلامتی زودرس تشخیص داده شده  <span className="text-[#969696]">و برای جلوگیری ...</span></p>
                            </div>
                        </Link>
                    </div>
                </Slider>
                </div>
            </div>
        </div>
    );
};

export default Blog;
import React from 'react';

// Images
import qrcode from '../images/qrcode.png'

const Instagram = () => {
    return (
        <div>
            <div className='flex flex-col lg:flex-row justify-between items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 lg:px-16 px-4 py-8 mx-16 md:mx-24 mb-20 rounded-xl' dir='rtl'>
                <p className='text-white font-bold text-xl text-center pb-8 lg:pb-0'>برای اطلاع از آخرین اخبار آزمایشگاه، ما را در <a href='https://www.instagram.com/bahman_lab_nahavand?igsh=MWdkbXNrcTV3NWVhZA==' target="_blank" rel="noreferrer" className='text-primaryColor'>اینستاگرام</a> دنبال کنید.</p>
                <img src={qrcode} alt='qrcodeinstagram' className='w-48 rounded-xl shadow-lg' />
            </div>
        </div>
    );
};

export default Instagram;
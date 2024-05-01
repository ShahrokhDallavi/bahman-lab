import React from 'react';

const BackToTop = () => {

    const top = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div dir='ltr'>
            <button onClick={top} className="bg-secondaryColor p-3 rounded-full m-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="#080E20" class="w-6 h-6 animate-bounce">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
            </svg>
            </button>
        </div>
    );
};

export default BackToTop;
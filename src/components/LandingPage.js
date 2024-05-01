import React from 'react';

// Components
import Header from './Header';
import Services from './Services';
import Process from './Process';
import Guide from './Guide';
import Phone from './Phone';
import Blog from './Blog';
import Bime from './Bime';
import Instagram from './Instagram';

const LandingPage = () => {
    return (
        <div>
            <Header />
            <Services />
            <Process />
            <Guide />
            <Phone />
            <Blog />
            <Bime />
            <Instagram />
        </div>
    );
};

export default LandingPage;
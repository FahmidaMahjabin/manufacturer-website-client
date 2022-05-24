import React from 'react';
import Banner from './Banner';
import Navbar from './Navbar/Navbar';
import Parts from './Parts/Parts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='m-16'>
                <Parts></Parts>
            </div>
            
        </div>
    );
};

export default Home;
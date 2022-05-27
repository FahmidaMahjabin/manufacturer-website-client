import React from 'react';
import ShowReview from '../AddAReview/ShowReview';
import Banner from './Banner';
import Navbar from './Navbar/Navbar';
import Parts from './Parts/Parts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='m-16'>
                <Parts></Parts>
                <ShowReview></ShowReview>
            </div>
            
        </div>
    );
};

export default Home;
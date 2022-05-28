import React from 'react';
import ShowReview from '../AddAReview/ShowReview';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Footer from './Footer';
import Navbar from './Navbar/Navbar';
import Parts from './Parts/Parts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='m-16'>
                <Parts></Parts>
                <ShowReview></ShowReview>
                <BusinessSummary></BusinessSummary>
                <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Home;
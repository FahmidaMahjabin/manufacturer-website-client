import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const ShowReview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(
        () => {
            fetch('http://localhost:5000/review')
                .then(res => res.json())
                .then(data => setReviews(data))
        },
        []
    )
    return (
        <div>
            <h1 className='text-5xl text-center text-primary my-8'>Review</h1>
            <div className='grid grid-cols-1 lg: grid-cols-3 gap-4 my-4'>
                {reviews?.map(review => <ReviewCard key = {review._id} oneReview={review}></ReviewCard>)}
            </div>
        </div>
    );
};

export default ShowReview;
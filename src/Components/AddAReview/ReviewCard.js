import React from 'react';

const ReviewCard = ({ oneReview }) => {
    const { review, rating, reviewer } = oneReview;
    return (
        <div class="card bg-primary text-primary-content">
            <div class="card-body">
                <div class="avatar text-end">
                    <div class="w-16 rounded-full">
                        <img src={reviewer} />
                    </div>
                </div>
                <div>
                    {review}
                    <br></br>
                    {rating}
                </div>

            </div>
        </div>
    );
};

export default ReviewCard;
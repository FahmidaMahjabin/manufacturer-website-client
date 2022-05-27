import React from 'react';

const MyReview = () => {
    return (
        <div>
            <h1 className='text-3xt text-center text-red-600'>Add A Review</h1>
            <form>
                <input name="review" type="text" placeholder="Write a review" class="input input-bordered input-primary w-full max-w-xs" />
                <select class="rating">
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                </select>
                
            </form>
        </div>
    );
};

export default MyReview;

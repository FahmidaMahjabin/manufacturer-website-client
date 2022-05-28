import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../init';

const AddAReview = () => {
    // function = postAReview
    // step1:review and rating er value form theke nibo and user er name nibo 
    // step2:submit click korle ei info ekta object create kore backend e pathabo 
    const [user] = useAuthState(auth)
    const postAReview = (e) =>{
        e.preventDefault();
        const review = e.target.review.value;
        const rating = e.target.rating.value;
        const reviewObject = {
            review, 
            rating,
            reviewer: user.photoURL

        }
        console.log("reviewObject:", reviewObject)
        fetch("https://damp-shelf-41309.herokuapp.com/review", {
            method: "POST", 
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(reviewObject)
        })
        .then(res => res.json())
        .then(data => console.log("data from review:", data))


    }
    return (
        <div>
            <h1 className='text-5xl font-bold text-center text-red-600'>Add A Review</h1>
            <form onSubmit={postAReview} className='bg-red-100 p-8 rounded-sm mx-auto w-1/2 mt-8'>
                <div className='form-control'>
                    <label for="review" className='font-bold'>Add A Review:</label>
                    <textarea name="review" type="text" placeholder="Write a review" class="input input-bordered input-primary w-full max-w-xs" />
                </div>
                <br></br>
                <div className='form-control'>
                    <label className='font-bold' for="rating">Rate:</label>
                    <div class="rating">
                        <input type="radio" value = "1" name="rating" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" value = "2" name="rating" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" value = "3" name="rating" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" value = "4" name="rating" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" value = "5" name="rating" class="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
                <button className='btn btn-primary my-4' type = "submit">Submit</button>
            </form>
        </div>
    );
};

export default AddAReview;
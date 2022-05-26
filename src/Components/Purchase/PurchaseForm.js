import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../init';

const PurchaseForm = ({item}) => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    // function = onSubmit (click korle quantity kombe and purchase list e add hobe)
    // step1:oi object er id ta nobo
    // step2:oi id diye query kore item er quantity ager quantity theke new quantity ta minus korbo
    // step3:new ekta collection purchase e name diye query korbo j ase kina 
        // step3.1:jodi item thake tahole quantity increase korbo 
        // step4: nam thakle item insert korbo

    const onSubmit = (data) => {
        console.log("data from purchase submit:", data);
    }
    const [user] = useAuthState(auth);
    
    const {quantity, minimumQuantity} = item;
    
    return (
        <form onSubmit={handleSubmit(onSubmit)} className = "w-1/2 mx-auto bg-gray-300 p-8">
            <div class="form-control">
                <label class="label">
                    <span class="label-text font-bold">Name</span>
                </label>
                <input type="text" placeholder="Name" class="input input-bordered"
                {...register("name", { required: true })} disabled
                defaultValue = {user?.displayName || ""} />
            </div>

            <div class="form-control">
                <label class="label">
                    <span class="label-text font-bold">Email</span>
                </label>
                <input type="text" placeholder="email" class="input input-bordered"
                {...register("email", { required: true })} disabled
                defaultValue = {user?.email || ""} />
            </div>

            <div class="form-control">
                <label class="label">
                    <span class="label-text font-bold">Address</span>
                </label>
                <input type="text" placeholder="address" class="input input-bordered"
                {...register("address", { required: true })} />
            </div>

            <div class="form-control">
                <label class="label">
                    <span class="label-text font-bold">Purchase Quantity</span>
                </label>
                <input type="text" placeholder="Enter quantity" class="input input-bordered"
                {...register("quantity", { required: true 
                ,
                min: {
                    value: minimumQuantity, 
                    message: "can't be less than minimum"},
                
                max:{
                    value: quantity,
                    message:"can't be greater than available"
                }
            })}
            defaultValue = {minimumQuantity} />
                {errors.quantity?.type === 'min' && <span className='text-red-700'>Can't purchase less than minimum quantity</span>}
                {errors.quantity?.type === 'max' && <span className='text-red-700'>Please purchase within available quantity</span>}
            </div>

            <div class="form-control">
                <label class="label">
                    <span class="label-text font-bold">Phone Number</span>
                </label>
                <input type="text" placeholder="Enter Number" class="input input-bordered"
                {...register("phoneNo", { required: true })} />
            </div>

            

            

            <input type="submit" className='btn btn-block mt-8' value = "purchase" />
        </form>
    );
};

export default PurchaseForm;
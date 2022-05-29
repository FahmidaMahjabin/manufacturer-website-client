import React from 'react';

const SetState = () => {
    return (
        <div>
            <h1 className='font-bold mt-5'>
            Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
            </h1>
            <p>If we set products = [...] then it'll copy the products from an array. It'll do it once. But when we use [products, setProducts] = useState([]), it'll create a state that'll rerender when the product value will be changed and make that change. So whenever the product value will change it'll rerender.</p>
        </div>
    );
};

export default SetState;
import React from 'react';

const OptimizeReact = () => {
    return (
        <div>
            <h1 className='font-bold mt-5'>How to Optimize react application performance?</h1>
            <p>
            When we create a rendered component, React creates a virtual DOM for its element tree in the component. Now, whenever the state of the component changes, React recreates the virtual DOM tree and compares the result with the previous render.So if we can decrease rerender then it'll be more optimized. In parent component , if the component is updated all children elements will also be rerendered. So if we extract or set state in the child element then it'll be more optimized.
            </p>
        </div>
    );
};

export default OptimizeReact;
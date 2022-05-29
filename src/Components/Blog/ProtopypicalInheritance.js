import React from 'react';

const ProtopypicalInheritance = () => {
    return (
        <div>
            <h1 className='font-bold mt-5'>How does protypica Inheritance work in js? </h1>
            <p>
            JavaScript is a prototype-based, Object Oriented programming language.In heritance means that Objects and methods can be shared, extended, and copied.

Sharing into objects makes for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values).When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.


            </p>
        </div>
    );
};

export default ProtopypicalInheritance;
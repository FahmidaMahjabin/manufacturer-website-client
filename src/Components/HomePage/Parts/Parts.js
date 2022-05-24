import axios from 'axios';
import React, { useEffect, useState } from 'react';
import EachPart from './EachPart/EachPart';

const Parts = () => {
    const [parts, setParts] = useState([]);
    useEffect(
        ()=>{
            axios.get("http://localhost:5000/manufacturerParts")
            .then(data => setParts(data.data))
        },
        []
    )
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {parts.map(part => <EachPart key = {part._id} part = {part}></EachPart>)}
        </div>
    );
};

export default Parts;
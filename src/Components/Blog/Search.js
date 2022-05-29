import React from 'react';

const Search = () => {
    return (
        <div>
            <h1 className='font-bold mt-5'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
            <p>
                <ul>
                    <li>
                        Make a filter by the product name like, filter = "shirts"
                    </li>
                    <li>
                        If any product's name is equal to filter then add the product in a newProductlist
                    </li>
                    <li>
                        else go to the next product
                    </li>
                    <li>
                        return the newProductlist
                    </li>
                </ul>
            </p>
        </div>
    );
};

export default Search;
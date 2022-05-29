import React, { useEffect, useState } from 'react';

const UseAdmin = (user) => {
    const [admin, setAdmin] = useState(false)
    const email = user?.email;
    useEffect(
        () => {
            if (email) {
                fetch(`https://damp-shelf-41309.herokuapp.com/admin/${email}`)
                    .then(res => res.json())
                    .then(data => setAdmin(data))
            }

        },
        [user]
    )

    return (
        admin
    );
};

export default UseAdmin;
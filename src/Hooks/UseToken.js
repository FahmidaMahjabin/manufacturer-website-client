import React, { useEffect, useState } from 'react';

const UseToken = (user) => {
    const [token, setToken] = useState("");
    useEffect(
        ()=>{
            console.log("user in UseToken:", user);
            const email = user?.user.email;
            if(email){
                const currentUser = {email: email};
                fetch(`http://localhost:5000/user/${email}`, {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(currentUser)
                })
                .then(res => res.json())
                .then(data =>{ console.log(data);
                    const accessToken = data.token;
                    localStorage.setItem("accesstoken", accessToken)
                    setToken(accessToken)
                })
            }
        },
        [user]
    )
    return [token]
};

export default UseToken;
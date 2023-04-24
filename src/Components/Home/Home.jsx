import React, { useContext } from 'react';
import { authContext } from '../../Providers/AuthProviders';

const Home = () => {
    const {user} = useContext(authContext)
    return (
        <div>
            <h1>This is home { user && <span>{user.displayName}</span>}</h1>  
        </div>
    );
};

export default Home;    
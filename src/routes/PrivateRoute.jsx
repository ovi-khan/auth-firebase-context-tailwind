import React, { useContext } from 'react';
import { authContext } from '../Providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({childeren}) => {
    const { user, loading } = useContext(authContext)

    if(loading) {
        return <div className="radial-progress progress  text-red-content border-4 animate-spin border-primary" style={{"--value":70}}></div>
    }

    if(user) {
        return childeren
    }

    return <Navigate to='/login' replace={true}></Navigate>
};

export default PrivateRoute;
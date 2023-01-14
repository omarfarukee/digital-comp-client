import React, { useContext } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Private = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
     if(loading){
        return <div className='flex justify-center pt-20'><button className="btn btn-square loading h-20 w-20"></button></div>
    
    }
    if(!user) {
     return <Navigate to='/login' state={{from : location}} replace></Navigate>
    }
    return children
    };


export default Private;
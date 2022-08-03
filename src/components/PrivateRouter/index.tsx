import React from 'react'
import { Navigate } from 'react-router-dom';
import { isAuthenticate } from '../../utils/localStorage';

type PrivateRouterProps = {
    children: JSX.Element
}

const PrivateRouter = (props: PrivateRouterProps) => {
    if(isAuthenticate('user')) {
        const isUser = isAuthenticate('user').user
        console.log("a",isUser);
        if(!isUser){
            return <Navigate to='/'/>
        }
    }else {
        return <Navigate to='/signin'/>
    }
    return props.children
}

export default PrivateRouter
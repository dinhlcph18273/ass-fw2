import React from 'react'
import { Navigate } from 'react-router-dom';
import storage from 'redux-persist/lib/storage';
import { useAppSelector } from '../../app/hooks';
import { isAuthenticate } from '../../utils/localStorage';

type PrivateRouterProps = {
    children: JSX.Element
}

const PrivateRouter = (props: PrivateRouterProps) => {
    const isLogin = useAppSelector((state: any) => state.user);
    if (isLogin && isLogin.user.id === 1) {
        return props.children;
      }
      return <Navigate to="/signin" />;
}

export default PrivateRouter
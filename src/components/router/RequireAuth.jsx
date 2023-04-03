import React , {useContext} from 'react';
import {useLocation,Navigate} from "react-router-dom";
import {AuthContext} from "../contex";

const RequireAuth = ({children}) => {
    const {isAuth,setIsAuth} = useContext(AuthContext)
    const location = useLocation();
    if(!isAuth){
        return <Navigate to={'/login'} state={{from:location}}/>
    }
    return children
};

export default RequireAuth;
import React , {useContext} from 'react';
import {NavLink} from "react-router-dom";
import LogoutButton from "../Buttons/LogoutButton";
import {AuthContext} from "../../contex";

const Navbar = () => {
    const {isAuth,setIsAuth} = useContext(AuthContext)
    return (
        <div className="navbar">
            <div className="navbar__links">
                <NavLink to="/"> Home </NavLink>
                <NavLink to="/about"> About </NavLink>
                {isAuth && <LogoutButton onClick={()=>setIsAuth(false)}>Logout</LogoutButton>}
            </div>
        </div>
    );
};

export default Navbar;
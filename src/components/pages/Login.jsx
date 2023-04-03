import React , {useContext} from 'react';
import AddButton from "../UI/Buttons/AddButton";
import {useLocation , useNavigate} from "react-router-dom";
import MyInput from "../UI/Input/MyInput";
import {AuthContext} from "../contex";
import MyModal from "../UI/ModalWindow/MyModal";
import {useState} from "react";

const Login = () => {
    const {isAuth,setIsAuth} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const fromPage=location.state?.from?.pathname || '/'
    const [modal,setModal] = useState(true)


    const login = (event) => {
        event.preventDefault()
        setIsAuth(true)
        navigate(fromPage,{replace:true})
    }
    console.log(isAuth)
    return (
        <MyModal visible={ modal } setVisible={ setModal }>
            <h1>
                Authorization
            </h1>
            <form onSubmit={ login }>
                <MyInput type="text" placeholder="Input login..."/>
                <div><MyInput type="password" placeholder="Input password..."/></div>
                <AddButton>Sign In</AddButton>
            </form>
        </MyModal>
    );
};

export default Login;
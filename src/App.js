import React , {useState} from "react";
import {BrowserRouter} from "react-router-dom";
import './styles/App.css';
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/router/AppRouter";
import {AuthContext} from "./components/contex";



function App() {
    const [isAuth,setIsAuth] = useState(false)
    return (
        <AuthContext.Provider value={ {
            isAuth ,
            setIsAuth
        }}>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>

  );
}

export default App;

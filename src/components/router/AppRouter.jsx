import React from 'react';
import {BrowserRouter , Route , Routes} from "react-router-dom";
import Items from "../pages/Items";
import About from "../pages/About";
import Navbar from "../UI/Navbar/Navbar";
import ItemId from "../items/ItemId";
import RequireAuth from "./RequireAuth";
import {TransitionGroup} from "react-transition-group";
import Login from "../pages/Login";

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={
                    <RequireAuth>
                        <Items/>
                    </RequireAuth>
                }/>
                <Route exact path="/:id"  element={<ItemId/>} />
                <Route path="/about" element={<About/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </div>
    );
};

export default AppRouter;
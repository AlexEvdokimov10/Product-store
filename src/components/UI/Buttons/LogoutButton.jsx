import React from 'react';
import classes from "./MyButton.module.css";

const LogoutButton = ({children,...props}) => {
    return (
        <button className={classes.logoutBtn} {...props} >
            {children}
        </button>
    );
};

export default LogoutButton;
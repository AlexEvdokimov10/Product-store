import React from 'react';
import classes from "./MyButton.module.css";

const DeleteButton = ({children,...props}) => {
    return (
        <button className={classes.deleteBtn} {...props} >
            {children}
        </button>
    );
};

export default DeleteButton;
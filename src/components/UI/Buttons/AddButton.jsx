import React from 'react';
import classes from "./MyButton.module.css"


const AddButton = ({children,...props}) => {
    return (
        <button className={classes.addBtn} {...props} >
            {children}
        </button>
    );
};
export default AddButton;
import React from 'react';
import DeleteButton from "../UI/Buttons/DeleteButton";
import ConvertSelect from "../UI/Select/ConvertSelect";
import ConverterPrice from "../ConverterPrice";
import AddButton from "../UI/Buttons/AddButton";
import { useNavigate } from 'react-router-dom';


const Item = (props) => {
    const [checked, setChecked] = React.useState(false);
    const router = useNavigate()

    const changeToSold=()=>{
        props.sold(props.item,checked)
        setChecked(!checked);
    }

    return (
        <div className="post">
            <div className="post__content">
                <strong>
                    {props.item.id}
                </strong>
                <div>
                    {props.item.name}
                </div>
                <div>
                   <ConverterPrice price={props.item.price}/>
                </div>
            </div>
            <input type="checkbox" onChange={changeToSold} checked={checked}/>
            <div className="post__btns">
                <AddButton onClick={()=>router(`/${props.item.id}`)}>
                    Open
                </AddButton>
                <DeleteButton onClick={()=>props.remove(props.item)}>
                    Delete
                </DeleteButton>
            </div>
        </div>
    );
};

export default Item;
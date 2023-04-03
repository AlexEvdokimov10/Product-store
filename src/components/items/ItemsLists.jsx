import React from 'react';
import Item from "./Item";
import {CSSTransition , TransitionGroup} from "react-transition-group";

const ItemsLists = ( {items,remove,sold}) => {

    if(!items.length){
        return (
            <h1 style={{textAlign:"center"}}>
                Items wasn't found
            </h1>
        )
    }

    return (
        <div>
            <h1 style={{textAlign:"center"}}>List items</h1>
            <TransitionGroup>
                {
                    items.map((item)=>
                        <CSSTransition key={item.id} timeout={500} classNames="item">
                            <Item remove={remove} item={item} sold={sold} />
                        </CSSTransition>
                    )
                }
            </TransitionGroup>
        </div>
    );
};

export default ItemsLists;
import React from 'react';
import MyInput from "../UI/Input/MyInput";
import SortedSelect from "../UI/Select/SortedSelect";

const FilterItems = ({filter,setFilter}) => {
    return (
        <div>
            <MyInput type="text" value={filter.query} onChange={e=>setFilter({...filter,query:e.target.value})}/>
            <SortedSelect value={filter.sort} onChange={selectedSort=>setFilter({...filter,sort:selectedSort})} options={[
                { value: 'name' , name: "By name" } ,
            ]} defaultValue="Sorting"/>
        </div>
    );
};

export default FilterItems;
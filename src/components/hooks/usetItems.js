import {useMemo} from "react";

export const useSortedItems=(items,sort)=>{
    const sortedItems = useMemo(()=> {
        console.log("SORTING WAS PERFORMED")
        if(sort){
            return [...items].sort((a,b)=>sort.localeCompare(b[sort]))
        }
        return items;
    },[sort,items])
    return sortedItems
}
export const useItems=(items,sort,query)=>{
    const sortedItems = useSortedItems(items,sort)
    const sortedAndSearchedItems = useMemo(()=>{
        return sortedItems.filter((item)=>item.name.toLowerCase().includes(query))
    },[query,sortedItems])
    return sortedAndSearchedItems
}
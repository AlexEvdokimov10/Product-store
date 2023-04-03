import React , {useEffect , useMemo , useState} from 'react';
import {useItems} from "../hooks/usetItems";
import {useFetching} from "../hooks/useFetching";
import ItemService from "../API/ItemService";
import AddButton from "../UI/Buttons/AddButton";
import LogoutButton from "../UI/Buttons/LogoutButton";
import ClassCounter from "../ClassCounter";
import MyModal from "../UI/ModalWindow/MyModal";
import FilterItems from "../items/FilterItems";
import Loader from "../UI/Loader/Loader";
import ItemsLists from "../items/ItemsLists";
import {getPageCount} from "../../utils/page";
import Pagination from "../UI/Pagination/Pagination";

const Items = () => {
    const [items,setItems]=useState([])
    const [sale,setSale]=useState([])
    const [filter,setFilter]=useState({sort:'', query:''})
    const sortedAndSearchedItems = useItems(items,filter.sort,filter.query)
    const [totalCountPages,setTotalCountPages] = useState(0)
    const [limit,setLimit] = useState(3)
    const [page,setPage]=useState(1)
    const [fetchItems,isItemsLoading] = useFetching(async ()=>{
        const response = await ItemService.getAll(limit,page);
        setItems(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalCountPages(getPageCount(totalCount,limit))
    })

     useEffect(()=>{
        fetchItems ()
    },[page])

    const checkItem=(soldItem,checked)=>{
        if(checked) {
            setSale(sale.filter(i=>i.id!==soldItem.id))
        }
        else {
            setSale ( [...sale , soldItem] )
        }
    }

    const removeItem=(item)=>{
        setItems(items.filter(i=>i.id !== item.id))
    }

    const changePage = (page) => {
        setPage(page)
    }

    return (
        <div>
            <ClassCounter products={sale.length}/>
            <FilterItems filter={filter} setFilter={setFilter} />
            {isItemsLoading ?
                <div style={{display:"flex",justifyContent:"center", marginTop:50}}>
                    <Loader/>
                </div>
                :
                <ItemsLists remove={removeItem} items={sortedAndSearchedItems} key={items.id} sold={checkItem}/>
            }
            <Pagination page = {page} changePage={changePage} totalCountPages={totalCountPages}/>
        </div>
    );
};

export default Items;
import React , {useEffect , useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import ItemService from "../API/ItemService";
import Loader from "../UI/Loader/Loader";
import Comments from "../../comments/Comments";
import CommentsForm from "../../comments/CommentsForm";
import CommentService from "../API/CommentService";

const ItemId = () => {
    const params = useParams()
    const [item,setItem]=useState({})
    const [comments,setComments]=useState([])
    const [fetchItemById,isLoading] = useFetching(async ()=> {
        const response =  await ItemService.getById(params.id)
        setItem(response.data)
    })
    const [fetchComments,isComLoading] = useFetching(async ()=> {
        const response =  await CommentService.getCommentById(params.id)
        setComments(response.data)
    })
    const createComment = (newComment) => {
        setComments([...comments,newComment])
    }

    useEffect(()=> {
        fetchItemById ( params.id )
        fetchComments ( params.id )
    },[])
    return (
        <div>
            <h1>
                You open the page with ID = {params.id}
            </h1>
            <div>
                {isLoading ?
                    <Loader/>
                    :
                    <div>
                        { item.name }. {item.price}
                        <CommentsForm comments={comments} create={createComment}/>
                        <Comments comments={comments}/>
                    </div>

                }
            </div>
        </div>
    );
};

export default ItemId;
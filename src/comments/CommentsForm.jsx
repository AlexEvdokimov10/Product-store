import React from 'react';
import AddTextArea from "../components/UI/TextAreas/AddTextArea";
import AddButton from "../components/UI/Buttons/AddButton";
import {useState} from "react";
import {useParams} from "react-router-dom";
import CommentService from "../components/API/CommentService";

const CommentsForm = ( {create,comments}) => {
    const [comment,setComment]=useState("")
    const params = useParams()
    const addNewComment= (e) => {
        const commentTemp = {id:comments.length+1,itemId:params.id,body:comment}
        e.preventDefault()
        create(commentTemp)
        CommentService.postComment(params.id,commentTemp)
        setComment('');
        alert("Comment was sent")
    }
    return (
        <form>
            <AddTextArea value={comment} onChange={e=>setComment(e.target.value)} type="text" placeholder="Comment..."/>
            <AddButton onClick={addNewComment}>Add comment</AddButton>
        </form>
    );
};

export default CommentsForm;
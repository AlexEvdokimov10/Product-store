import axios from "axios";

export default class CommentService {
    static async getCommentById(id){
        try {
            const response = await axios.get(`http://localhost:3000/items/${id}/comments` )
            return response
        } catch ( e ) {
            console.log(e)
        }
    }
    static async postComment(id,comment){
        try {
            const response = await axios.post(`http://localhost:3000/items/${id}/comments`,{
                body:comment.body
            } )
            return response
        } catch ( e ) {
            console.log(e)
        }
    }
}
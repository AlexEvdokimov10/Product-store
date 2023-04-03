import axios from "axios";


export default class ItemService {
    static async getAll(limit,page){
        try {
            const response = await axios.get("http://localhost:3000/items",{
               params:{
                   _limit:limit,
                   _page:page,
               }
            })
            return response
        } catch ( e ) {
            console.log(e)
        }
    }
    static async getById(id){
        try {
            const response = await axios.get("http://localhost:3000/items/" + id )
            return response
        } catch ( e ) {
            console.log(e)
        }
    }
}
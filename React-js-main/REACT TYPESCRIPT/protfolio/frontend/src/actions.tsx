import axios from "axios"
import type { AppDispatch } from './store'
type pd = {
    fname: string
    lname: string
    email: string
    comment: string
}

export const createPost = (postData:pd)=> async(dispatch:AppDispatch)=>{
        
    try{
        const data = await axios.post('http://localhost:5000/contactus',postData)
        console.log(data.data)
        // console.log("C: ",c)
        dispatch({type: 'CREATE',payload:data.data})
        
    }catch(error){
        dispatch({type:'ERROR',payload:'UnSuccessful'})
    }
}
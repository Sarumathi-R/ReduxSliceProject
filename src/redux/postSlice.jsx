import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import Axios from "axios"
export const fetchpost=createAsyncThunk('posts/fetchpost',async()=>{
    return Axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then(res=>{
        return res.data
    })
    .catch((error)=>console.log(error))
})
export const fetchpostdetails=createAsyncThunk('posts/fetchpostdetails',async(id)=>{
    return Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res=>{
        return res.data
    })
    .catch((error)=>console.log(error))
})


const postSlice=createSlice({
    name:"posts",
    initialState:{
        posts:[],
        postDetails:[]
    },
     extraReducers(bulider){
        bulider
        .addCase(fetchpost.fulfilled,(state,action)=>{
            state.posts=action.payload
            
        })
        .addCase(fetchpostdetails.fulfilled,(state,action)=>{
            state.postDetails=action.payload
            
        })
     }
      

});
export const postsReducer=postSlice.reducer;
export default postsReducer;








//  (bulider)=>{
    // bulider
    //     .addCase(fetchpost.fulfilled,(state,action)=>{
    //     state.post=action.payload
    //     });
    //     bulider.addCase(fetchpostdetails.fulfilled,(state,action)=>{
    //     state.postDetails=action.payload
            
    //     });
    
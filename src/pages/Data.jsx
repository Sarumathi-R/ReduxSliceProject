import React,{useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import { fetchpostdetails } from "../redux/postSlice";
import '../Liststyle.css';

const Data=()=>{
    
    const dispatch=useDispatch();
    const {id}=useParams();
const postDetails=useSelector((state)=>state.posts.postDetails)
 
useEffect(()=>{
    dispatch(fetchpostdetails(id));
},[id]);


return(<> 

<div className="container-all">
        {postDetails?(<div><h1>{postDetails.title}</h1><p>{postDetails.body}</p></div>
        ):(
            <p>Loging post...</p>
        )}
        
           
           </div>
            
        </>
        
            );
        
        }
export default Data;
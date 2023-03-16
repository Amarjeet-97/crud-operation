import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
export default function Update(){
    const [id,setId]=useState(0);
    const [name,setName]=useState("");
    const [email, setEmail]= useState("");
    const navigate= useNavigate();
    
    useEffect(()=>{
        setId(localStorage.getItem("id"))
        setName(localStorage.getItem("name"))
        setEmail(localStorage.getItem("email"))
    },[])
    const handleUpdate=(e)=>{
        e.preventDefault();
        axios.put(`https://641312143b710647375e5d37.mockapi.io/crud-app/${id}`,
        {
            name:name,
            email:email,

        }
        ).then(()=>{
            navigate("/read")
        })


    }
    return(
        
        <>
            <h1>Update Operation</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                        <input defaultValue={name} onChange={(e)=>setName(e.target.value)} type="text" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" defaultValue={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" aria-describedby="emailHelp" />
                        
                    </div>
                    <button type='submit' className='btn btn-primary'onClick={handleUpdate}>Update</button>
                        
                </form>
        </>
    )
}
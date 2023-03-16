import React,{useEffect, useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Read(){
    const [data,setData]=useState([]);
    const navigate= useNavigate();
    function getData(){
        axios.get("https://641312143b710647375e5d37.mockapi.io/crud-app")
        .then((res)=>{
            
            setData(res.data)
        })
    }

    function handleDelete(id){
        axios.delete(`https://641312143b710647375e5d37.mockapi.io/crud-app/${id}`)
        .then(()=>{getData()})
    }
    const setToLocalStorage=(id,name,email)=>{
        navigate("/update")
        localStorage.setItem("id",id)
        localStorage.setItem("name",name)
        localStorage.setItem("email",email)
    }
    useEffect(()=>{
        getData();
    },[])
    
    return(
        <>  <h1>Read Operation</h1>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    </tr>
                </thead>

                {
                    data.map((eachData,id)=>{
                        return(
                           
                            <>
                            <tbody>
                                <tr>
                                <th scope="row">{eachData.id}</th>
                                <td>{eachData.name}</td>
                                <td>{eachData.email}</td>
                                <td><button className="btn btn-success" onClick={()=>{setToLocalStorage(eachData.id,eachData.name,eachData.email)}}>Edit</button></td>
                                <td><button className="btn btn-danger" onClick={()=>handleDelete(eachData.id)}>Delete</button></td>
                                </tr>
                    
                            </tbody>
                            </>
                        )
                    })
                }

                
            </table>
        </>
    )
}
import axios from 'axios';
import React,{useState} from 'react'
import { useNavigate,Link } from 'react-router-dom';

const Create = () => {
    const [name,setName]=useState("");
    const [email, setEmail]= useState("");
    const navigate= useNavigate();

    const header= {"Access-Control-Allow-Origin":"*"};
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("https://641312143b710647375e5d37.mockapi.io/crud-app",{
            name:name,
            email:email,
            header,
        })
        // .then(()=>{
        //     navigate("/read");
        // })
        navigate("/read")
        

    }
  return (   
    <>
    <div className='d-flex  justify-content-between m-2'>
        <h2>Create</h2>
        <Link to="/read">
            <button className='btn btn-primary'>Show Data</button>
        </Link>
        
    </div>
    <form>
        <div className="mb-3">
            <label  className="form-label">Name</label>
            <input className="form-control" onChange={(e)=>setName(e.target.value)} type="text" />
        </div>
        <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" onChange={(e)=>setEmail(e.target.value)} className="form-control" aria-describedby="emailHelp" />
            
        </div>
        <button type='submit' className='btn btn-primary'onClick={handleSubmit}>submit</button>
        
        
    </form>
    </>
  )
}

export default Create


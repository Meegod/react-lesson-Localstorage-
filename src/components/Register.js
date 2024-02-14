import React, { useState } from 'react'
import './Register.css'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function Register() {
    const [name, setname] = useState("");
    const[pass,setpass] =useState("");
    const navigate = useNavigate();

  const handleUsername=(e)=>{
           setname(e.target.value);
           console.log(e.target.value)
  }

  const handlepass =(e)=>{
    setpass(e.target.value);
  }

   function handleSubmit(){
    const data = {
        name:name,
        pass:pass,
    }
let olddata =localStorage.getItem("formdata", JSON.stringify(data));
if(olddata ==null){
  olddata =[]
  olddata.push(data)
  localStorage.setItem('formdata',JSON.stringify(olddata));
}else{
  let oldArr =JSON.parse(olddata);
   oldArr.push(data);
   localStorage.setItem('formdata',JSON.stringify(oldArr))
   console.log(oldArr,'hhg')
}


//route to the next page if success
navigate('/success');
   


   }

  return (
<div className="register-card">
    <form className="register-form">
      <input type="text" placeholder="Username"  onChange={handleUsername}/>
      <input type="password" placeholder="Password"   onChange={handlepass}/>
      <div className="register-buttons">
        <button type="submit" className="register-button" onClick={handleSubmit}>Register</button>
      </div>
     <p><Link to ='/' relative="path">Back Home</Link></p> 

    </form>
  </div> 
    )
}

export default Register
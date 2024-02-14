import Reac,{useEffect,useState} from 'react'
import  './Login.css';
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


function Login() {
 
 const [useremail, setEmail] = useState('');
  const [password,setPassword] =useState('')

 const navigate = useNavigate();

const handlePasswordChange =(e)=>{
   setPassword(e.target.value);
}

const handleUsername =(e)=>{
    setEmail(e.target.value);
}


function handleSubmit(e){
  e.preventDefault();
  let olddata =localStorage.getItem('formdata');
  let oldArr =JSON.parse(olddata);
  
  oldArr.map(arr=>{
    if(useremail.length > 0 && password.length > 0){
      if(arr.name === useremail  && (arr.pass === password)){
        toast.success("Login Success");
        // navigate('/success');
      }else{
        toast.error("Invalid Email OR password");
      }
    }
  })
 
}


  return (
     <div className="login-card">
    <form className="login-form">
      <input type="text" placeholder="Username" required
      value={useremail}
      onChange={handleUsername}
      />
      <input type="password" placeholder="Password" 
      value={password} 
      onChange={handlePasswordChange}
      />
      <div className="login-buttons">
        <button type="submit" className="login-button" onClick={handleSubmit}>Login</button>
        <Link to ='/register'><button type="submit" className="register-button">Register</button></Link>
      </div>
    </form>
  </div>
     
  











  )
  }


export default Login
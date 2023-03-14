import { useState } from "react"

import "./App.css"
export const App=()=>{
  
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[repassword,setRepassword]=useState("")
var pp= new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%*/^])(?=.{8,})");
  function my(event){
    event.preventDefault()
    if(!pp.test(password)){
      alert("please follow below instructions")
    }
    else if(password!=repassword ){
     alert("passwordnot match")
    }
    else{
      alert("register")
    }
  }
  return(
    <>
   <form onSubmit={my}>
    <center><h2>register form</h2></center>
    <label>email:</label>
    <input className="form-control" required type="email" value={email} onChange={(x)=>{setEmail(x.target.value)}}></input>
   <label>password:</label>
   <input className="form-control" required type="password" value={password} onChange={(x)=>{setPassword(x.target.value)}}></input>
   <label>re-enter-password</label>
   <input className="form-control" required type="password"  value={repassword} onChange={(x)=>{setRepassword(x.target.value)}} ></input>
   <input className="btn btn-primary" type="submit" value="createAccount"></input>
   </form>
   <p>
    <label>minimum 8 charecters</label><br></br>
    <label>1 uppercase charecter</label><br></br>
    <label>1 lower charecter</label><br></br>
    <label>1 special charecter</label><br></br>
    <label>any one number</label>
   </p>
    </>
  )
}
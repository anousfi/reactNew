import {useState,useEffect} from 'react'
import { BrowserRouter, Routes, Route, Link ,useNavigate} from "react-router-dom";
import TheMain from './Main'
const Signin=()=>{
    const [infos,setI]=useState({
        id:"",
        password:"",
        condition:false
    })
    const navigate=useNavigate()

    function addId(a){
        setI({...infos,id:a})
    }
    function addP(b){
        setI({...infos,password:b})
    }
  
    return (
        <div id="central">
            <input type ="text" size="30" onChange={(e)=>addId(e.target.value)}/>
            <input type="password" onChange={(e)=>addP(e.target.value)}/>
            {console.log(infos)}
            <button type="checkbox" onClick={()=>(infos.id==='hk23',infos.password==='motdepasse') ?navigate("/TheMain"):navigate("/")}></button>
        </div>
    )

}
export default Signin;
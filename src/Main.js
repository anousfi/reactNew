import './App.css';
import { useState ,useEffect} from 'react';

function TheMain() {

  const [todolist,setList]=useState([
    {
      task : "Coding",
      status:false,
    },
    {
      task: "writing",
      status :false,
    }
  ])
    useEffect ( ()=>
      {
        console.log(todolist.length) 
      }
    )
    useEffect(()=>{
      return ()=>console.log(todolist.length)
    },[todolist])



  

  const [sentence,setSentence]=useState("")
  function addElement(a){
     setList([...todolist,{task:a}])
  }
  function remElement(a){
    setList([...todolist.filter(element =>(element.task!==a.task ))])
  }
  const [searched,setSearched]=useState("")
  function searching(a) {
    setSearched(a)
  }
  function finding(a){
    setList([...todolist.filter(element=>element.task.includes(a))]) 
  }
  return (
    <div id="central">
      <div id="main">
      <div>
      <input type="text" onChange={(event)=>{
        setSentence(event.target.value)
      }}/>
      <button onClick={()=>addElement(sentence)}>add</button>
      </div>
      <div id="lis">
      <h2>tasks list:</h2>
      <div>
        {todolist.map((element)=>(
         <div className="items">
          <button type="button" class="btn btn-dark" onClick={()=>{remElement(element)}}>Delete</button>
          <p className={element.status ? "styling" : ""}>{element.task}</p>
          <input type="checkbox"
         value="checked" onClick={()=>{
          setList([...todolist.map(element1=>(element1.task===element.task)?{...element1, status : !element1.status}:element1)])
        
          }}/>
         {console.log()}</div>))}
      </div>
      </div>
      <div>
        <input type="text" onChange={(e)=>searching(e.target.value)}/>
        <button type="search" onClick={()=>finding(searched)}>search</button>      
      </div>

    </div>
    </div>
  );
}

export default TheMain;
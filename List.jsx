import React,{useState} from 'react'
import  '../components/list.css'

const List = ({row,colm,type,handleAddStore,count}) => {
    const obj={"type":type,"seat":`${row}${colm}`,"code":`${type}${row}${colm}`}
   const [colore,setColore]=useState("grey");
   
    const handleColor=()=>{
        if(count!==obj["code"]) 
        {setColore("salmon"); }
        else{
            setColore("grey");console.log(count,obj["code"])
        }
        }

  return (
    <>
   

 <button  onClick={()=>{handleColor(); return  handleAddStore(obj,obj["code"])}} style={{color:colore} } >{`${row}${colm}` }</button>
    
    
    
    </>
  )
}

export default List
import React,{useState} from 'react';
import List from "./components/List";

const App = () => {


const vip=[1,2,3,4,5];
const general=[1,2,3,4,5,6];
const Economy=[1,2,3,4,5,6,7,8];
const [store,setStore]=useState([]);
const count=store.length+1;
console.log("store length",count)



var handleAddStore=(e,j)=>{



 if(store.length<5)
 {
  let duplicate=0;
  store.forEach((s)=>{if(s.code === e.code){duplicate=1;}})
   if(duplicate===0)
   {
    setStore((prev)=>{return [...prev,e] });
   }
 }
 else{
  
  alert("not more than 5");
 }
 

}




let allInfo = store.map(obj => `Type: ${obj.type}, Seat: ${obj.seat}`).join('\n');

  return (
    <>
   <p style={{color:'Grey',fontSize:"large",textAlign:"center"}}>VIP</p>
     <div style={{textAlign:"center"}}>
      {
       vip.map((i)=>
        {
      return <div>{vip.map((e)=>{return <List key={`${i}${e}`} row={i} type={"vip"} colm={e} handleAddStore={handleAddStore} count={count} />  } )}</div>
       }
       )
      }
     </div>
    

     <p style={{color:'Grey',fontSize:"large",textAlign:"center"}}>general</p>
     <div style={{textAlign:"center"}}>
      {
       general.map((i)=>
        {
      return <div>{general.map((e)=>{return <List key={`${i}${e}`} row={i} type={"general"} colm={e} handleAddStore={handleAddStore} count={count} /> } )}</div>
       }
       )
      }
     </div>


     <p style={{color:'Grey',fontSize:"large",textAlign:"center"}}>Economy</p>
     <div style={{textAlign:"center"}}>
      {
       Economy.map((i)=>
        {
      return <div>{Economy.map((e)=>{return <List key={`${i}${e}`} row={i} type={"Economy"} colm={e} handleAddStore={handleAddStore} count={count} /> } )}</div>
       }
       )
      }
     </div>


<button onClick={()=>
{if(!allInfo)
{alert("Seat is not booked");}
else
alert(allInfo)
}}>Confirm Booking</button>

    </>
  )
}

export default App
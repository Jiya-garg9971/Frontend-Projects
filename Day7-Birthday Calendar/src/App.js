import react, { useState } from 'react';

import ReactDOM from 'react-dom/client';
import data from './Data';
import List  from './List';
const App=()=>
{
    const [peopledetail,setdetail]=useState(data);
const date=new Date();
var dm=parseInt(date.getMonth())+parseInt(1);
const Close=()=>{if(peopledetail.length){
    return(
        <button onClick={()=>setdetail([])}>
            Clear All
            </button>)}
}
var dateexact=date.getDate()+"-"+dm+"-"+date.getFullYear();
console.log(dateexact);
return(
    <>
    <div className="container">
        <h3> {peopledetail.length} birthday today</h3>
        <List people={peopledetail}/>
      <Close/>
    </div>
    </>
)
}
export default App;
import react, { useState } from 'react';

import ReactDOM from 'react-dom/client';
import data from './Data';
import List  from './List';
var i=0;
 const cat=['All','Breakfast','Lunch','Shakes']
const App=()=>
{
    const [items,setitems]=useState([]);
    const filterchoice=(category)=>{
        if(category==="All"){
            setitems(data);
        }
        if(category==="Breakfast"){
            const eat=data.filter(food=>{
                return food.category==="breakfast";
            })
            setitems(eat);
        }
        if(category==="Shakes"){
            const eat=data.filter(food=>{
                return food.category==="shakes";
            })
            setitems(eat);
        }
        if(category==="Lunch"){
            const eat=data.filter(food=>{
                return food.category==="lunch";
            })
            setitems(eat);
        }
    }
    return(
        <>
        <div className='Navbar'>
        {cat.map((q,idx)=>{
            return(
                <button key={idx} onClick={()=>filterchoice(q)} >{q}</button>  
                    
                        
                )})
           }
           </div>
           <List details={items} id="1"/>
       </>
       
    )
}
export default App;
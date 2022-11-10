 import React, { useState } from "react";
 import { ReactDOM } from "react";
 
 const Tour=({tour,removeTour})=>{
    console.log(tour);
    const[readmore,setread]=useState(false);
return(
    <div className="flash-card">
   { tour.map((person)=>{
        const {id,image,info,name,price}=person;
        return(
        <article key={id} className="container">
            <img src={image}/>
            <h2> {name}</h2>
            <p>{readmore?info:`${info.substring(0,200)}...`}
            <button onClick={()=>setread(!readmore)}
            className="read">
            {!readmore?`Read more`:'Show less'}
            </button></p>
            <h4>Price: {price}</h4>
            <h2><button onClick={() => removeTour(id)} className="btn"> Remove this</button></h2>
        </article>

        )
        
    })}
    </div>

)
  }
  export default Tour;
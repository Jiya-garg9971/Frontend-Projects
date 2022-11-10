import React from "react";
import { ReactDOM } from "react";
const List=({people})=>{
   
    return(
        <>
       { people.map((person)=>{
            const {id,name,age,image}=person;
            return(
                <article key={id} id="detail">
                      <img src={image} alt="image her"/>
                    <div className="content">
                        <p className="name"> {name} </p>
                        <p className="age"><span className="agehead">Age:</span>
                        {age}</p>
                    </div>
                  
                </article>
                
            )
           
        })}
        </>
    )
 
}
export default List;
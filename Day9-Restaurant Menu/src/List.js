import React from "react";
import { ReactDOM } from "react";
const List=({details})=>{
    return(
        <>
        {details.map((det)=>{ 
            const {id,title,category,price,img,desc}=det;
            return(
                <article key={id} id="detail">
                      <img src={img} alt="image her"/>
                    <div className="content">
                        <h3 className="name"> {category}-{title} </h3>
                        <p className="age">{desc}</p>
                        <h5> Price: {price}</h5>
                    </div>
                </article>
            )
        })
    }
    </>
    )
}
export default List;
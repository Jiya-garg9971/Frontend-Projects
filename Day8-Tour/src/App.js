import Loading from './loading.js'
import './App.css'
import Tour from './tour.js';
import React from 'react'; 
import{ useEffect, useState } from 'react';
const url= 'https://course-api.com/react-tours-project'

const App=()=>{
  const [loading,setloading]=useState(true);
  const [tours,settours]=useState([]);
 
  const fetchdata=async()=>{
    setloading(true)
    try{
      const response=await fetch(url)
      const content=await response.json()
      //console.log(data);
        setloading(false)
      settours(content)
    }
    catch(error){
      setloading(false)
    }
  }
const removeTour=(id)=>{
  const newtours=tours.filter((t)=>t.id!=id)
 settours(newtours)
}
  useEffect(()=>{
    fetchdata()
  },[]);
  if(loading){
    return(
      <main> <Loading/></main>
    )
  } 
  //console.log(tours);
  return(
    
  <>  
  {console.log(tours)}
  <h1 className='heading'>
    Different places to visit this vacation.
  </h1>
    <Tour tour={tours} removeTour={removeTour} className="box" /> 
 </>
    
  )
  
}
export default App;
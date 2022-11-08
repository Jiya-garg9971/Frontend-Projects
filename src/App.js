import { useState,useEffect } from 'react'
import './App.css'
import purple from './images/purple.webp';
import red from './images/red.png';
import orange from './images/orange.png';
import blue from './images/blue.png';
import yellow from './images/yellow.png';
import green from './images/green.png';
import blank from './images/blank.png'
let present,next;
let row=8
let col=8
let score=0;
let width=8
const color=[blue,green,yellow,red,orange,purple]
function App() {

  const [colorboard,setcolorboard]=useState([]);
  //check for match of item in a col
  const checkforcolofthree=()=>{
    for(let i=0;i<=47;i++){
      const colorofthree=[i,i+8,i+16];
      const dividedcolor=colorboard[i];
      if(colorofthree.every(sq=>colorboard[sq]===dividedcolor)){
       
        colorofthree.forEach(sq=>colorboard[sq]=blank);
      }
    }
  }
//check for match of item in a row
const checkforrowofthree=()=>{
  const notvalid=[6,7,14,15,22,23,30,31,38,39,46,47,54,55];
    for(let i=0;i<62;i++){
     
     if(notvalid.includes(i)){
      continue;
     }
      const colorofthree=[i,i+1,i+2];
      const dividedcolor=colorboard[i];
      if(colorofthree.every(sq=>colorboard[sq]===dividedcolor)){
        score=score+2;
        colorofthree.forEach(sq=>colorboard[sq]=blank);
      }
    }
  }

  //move all candies down
  const movecandiesdown=()=>{
    for(let i=0;i<64-row;i++){
      if(colorboard[i+width]===blank){
        colorboard[i+width]=colorboard[i];
        colorboard[i]=blank;
      }
    }
    for(let i=0;i<row;i++){
      if(colorboard[i]===blank){
        //generate new candies
        let num=Math.floor(Math.random()*color.length)
       score=score+2;
        colorboard[i]=color[num];
       
      }
    }
  }
  //check for valid move
  const validmove=()=>{
    //column check    
     
    for(let i=0;i<=47;i++){
      const colorofthree=[i,i+8,i+16];
      const dividedcolor=colorboard[i];
      if(colorofthree.every(sq=>colorboard[sq]===dividedcolor)){
        return "true";
      }
    }
    //check for row
  const notvalid=[6,7,14,15,22,23,30,31,38,39,46,47,54,55];
    for(let i=0;i<62;i++){
     
     if(notvalid.includes(i)){
      continue;
     }
      const colorofthree=[i,i+1,i+2];
      const dividedcolor=colorboard[i];
      if(colorofthree.every(sq=>colorboard[sq]===dividedcolor)){
        return "true";
      }
    }
  
  return "false";
}
const DragStart=(e)=>{

  present=e.target.id;
}
const Dragdrop=(e)=>{
  
  next=e.target.id;
  //swap color
  let currentcol=colorboard[next];
  colorboard[next]=colorboard[present];
  colorboard[present]=currentcol;
  console.log(validmove())
  if(validmove()==="false"){
    
    let currentcol=colorboard[next];
    colorboard[next]=colorboard[present];
    colorboard[present]=currentcol;
  }

}
const Dragend=()=>{
  //console.log("end")
}
  const createbox=()=>{
    const board=[];
    for(let r=0;r<row*col;r++){
        let num=Math.floor(Math.random()*color.length)
       board.push(color[num])
    }
    
    setcolorboard(board)
  
  }
  useEffect(()=>{
    const timer=setInterval(()=>{
        checkforcolofthree();
        checkforrowofthree();
        movecandiesdown();
  setcolorboard([...colorboard])
      },1000)
      return ()=>clearInterval(timer)
    },[checkforcolofthree,colorboard])
  
  useEffect(()=>{createbox()},[])
  return (
    <div className="App">

      <h1> CANDY CRUSH</h1>
    <h3> Score:{score}</h3>
      <div className='game'>
       
      {colorboard.map((c,index)=>(
      
          <img src={c} alt={c} key={index} id={index} style={{backgroundColor:c}} 
          draggable={true} 
          onDragEnter={(e)=>e.preventDefault()}
          onDragStart={ DragStart  }
           onDragOver={(e)=>e.preventDefault()}
          
          onDragLeave={(e)=>e.preventDefault()}
           onDrop={Dragdrop}
          onDragEnd={ Dragend }
          
          

          />
      
      ))}
    </div>
    </div>
  );
}

export default App;

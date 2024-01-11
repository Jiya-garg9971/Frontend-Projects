let boxes=document.getElementsByClassName("box");
console.log("hello")
let turn='X';
let res=document.getElementById("Result")
let wonimg=document.getElementById("wonimg")
let voice=new Audio("click.mp3");
let success=new Audio("win.mp3");
let restart=document.getElementById("restart");
const checkwin=()=>{
    let arr=[1,2,3,4,5,6,7,8,9];
    // const array = [1, 2, 3, 4, 5];
    var won=false;
    Array.from(boxes).forEach(function(element,index) {
        if(element.innerText!="")
        arr[index]=element.innerText;
    // console.log(`${element.innerText} ${index}`);
    });

    
    for(var i=0;i<9;i+=3){
        console.log("c");
        if(arr[i]==arr[i+1] && arr[1+i]==arr[i+2]){
            won=true;
        }
    }
    // vertical
    for(var i=0;i<3;i++){
        if(arr[i]==arr[3+i] && arr[3+i]==arr[6+i]){
            won=true;
        }
    }
    // diagonal
    if(arr[0]==arr[4] && arr[4]==arr[8]){
        won=true;
    }
    if(arr[2]==arr[4] && arr[4]==arr[6]){
        won=true;
    }
    
    console.log(arr);
    if(won){
        success.currentTime=0;
        success.play();
        wonimg.style.display="block";
        res.innerText=`${turn=='O'?'X':'O'} won`;
    }
    else{
        var all=false;
        for(var i=0;i<9;i++){
            if(arr[i]==(i+1))all=true;
        }
        if(all==false){
            res.innerText="It is a tie"
        }
    }
    
}
Array.from(boxes).forEach(element=>{
    element.addEventListener("click",()=>{
        if(element.innerHTML!=""){
            alert("Already filled");
            
        }
        else{
            voice.currentTime=0;
            voice.play();
            element.innerHTML=turn;
            turn=(turn=='X')?'O':'X';
            console.log("clicked")
            checkwin();
        }
    })
})
restart.addEventListener('click',()=>{
    Array.from(boxes).forEach(element=>{
        element.innerText="";
        res.innerText="";
        success.pause();
         wonimg.style.display="none";

    }
    )

})
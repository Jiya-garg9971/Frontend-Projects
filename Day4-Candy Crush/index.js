console.log("connected");
var row=9;
var board=[];
var col=9;
var score=document.getElementById("digit");
var st=0;
var curtile;
let othertile;
const color=['Red','Blue','Green','Purple','Yellow','Orange'];
window.onload=function(){
    startGame();
    window.setInterval(function(){removecandies();falldown();generatenew();},0.0000001);  //0.1 seconds
}
function randomCandy(){
    return color[Math.floor(Math.random()* color.length)];
}
function startGame(){
    for(let r=0;r<row;r++){
        let rows=[];
        for(let c=0;c<col;c++){
            let tile=document.createElement("img");
            tile.src="./images/"+randomCandy()+".png";
            tile.id=r.toString()+"-"+c.toString();
            tile.alt="image";
            document.getElementById("board").append(tile);
            rows.push(tile);
            tile.addEventListener('dragstart',dragstart);
            tile.addEventListener('dragover',dragover);
             tile.addEventListener('dragenter',dragenter);
            tile.addEventListener('dragleave',dragleave);
            tile.addEventListener('drop',dragdrop);
            tile.addEventListener('dragend',dragend);
        }
        board.push(rows);
    }
}
function dragstart(){
    
    curtile=this;
}
function dragover(e){
    e.preventDefault();
}
function dragenter(e){
    e.preventDefault();
}
function dragleave(e){
    //e.preventDefault();
}
function dragdrop(){
    othertile=this;

}
function dragend(){
     if(curtile.src.includes("blank") || othertile.src.includes("blank")){
        return;
     }
    let idx=othertile.id.split("-"); //finalcords
    let r2=parseInt(idx[0]);
    let c2=parseInt(idx[1]);;
    let i=curtile.id.split("-"); //current cords
    let r=parseInt(i[0]);
    let c=parseInt(i[1]);
    let moveUp=r==r2+1 && c==c2;
    let moveDown=r==r2-1 && c==c2;
    let moveLeft= r==r2 && c==c2-1;
    let moveRight= r==r2 && c==c2+1;
    
    let isadj=moveDown || moveLeft || moveRight || moveUp;
    //console.log(isadj?"true":"oops");
    if(isadj){
        let cursrc=curtile.src;
        let finalsrc=othertile.src;
        curtile.src=finalsrc;
        othertile.src=cursrc;
         if(!checkvalid()){
            let cursrc=curtile.src;
            let finalsrc=othertile.src;
            curtile.src=finalsrc;
            othertile.src=cursrc;
            
        }
       
    }
   
}
function removecandies(){
   //row wise
    for(let r=0;r<row-2;r++){
        for(let c=0;c<col;c++){
            let candy1=board[r][c];
            let candy2=board[r+1][c];
            let candy3=board[r+2][c];
            if(candy1.src==candy2.src && candy2.src==candy3.src && !candy1.src.includes("blank") ){
                candy1.src="./images/blank.png"
                candy2.src="./images/blank.png"
                candy3.src="./images/blank.png"
                updatescore();
                //return true;
            }
        }
    }
    //col wise
    for(let r=0;r<row;r++){
        for(let c=0;c<col-2;c++){
            let candy1=board[r][c];
            let candy2=board[r][c+1];
            let candy3=board[r][c+2];
            if(candy1.src==candy2.src && candy2.src==candy3.src){
                candy1.src="./images/blank.png"
                candy2.src="./images/blank.png"
                candy3.src="./images/blank.png"
                updatescore();
               // return true;
            }
        }
    }
   // return false;
}
function checkvalid(){
    //row wise
     for(let r=0;r<row-2;r++){
        for(let c=0;c<col;c++){
            let candy1=board[r][c];
            let candy2=board[r+1][c];
            let candy3=board[r+2][c];
            if(candy1.src==candy2.src && candy2.src==candy3.src && !candy1.src.includes("blank") ){
                
                return true;
            }
        }
    }
    //col wise
    for(let r=0;r<row;r++){
        for(let c=0;c<col-2;c++){
            let candy1=board[r][c];
            let candy2=board[r][c+1];
            let candy3=board[r][c+2];
            if(candy1.src==candy2.src && candy2.src==candy3.src && !candy1.src.includes("blank")){
               
              return true;
            }
        }
    }
    return false;

}
function updatescore(){
    let points=score.innerText;
    let newpoints=parseInt(points)+10;
    score.innerHTML=newpoints;
}
function falldown(){
    for(let c=0;c<col;c++){
        let idx=col-1;
        for(let r=col-1;r>=0;r--){
            if(!board[r][c].src.includes("blank")){
                board[idx][c].src=board[r][c].src;
                idx--;
            }
        }
        for(let r=idx;r>=0;r--){
             board[r][c].src="./images/blank.png";
        }
    }
}
function generatenew(){
    for(let c=0;c<col;c++){
        if(board[0][c].src.includes("blank")){
            board[0][c].src="./images/"+randomCandy()+".png";
        }
    }
}
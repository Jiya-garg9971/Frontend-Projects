console.log("connected");
var row=3;
var board=[];
var col=3;
var score=document.getElementById("digit");
var output=document.getElementById("result");
var generate=document.getElementById("newgame");
var check=document.getElementById("Check");

var st=0;
var curtile;
let othertile;
var color=['1','2','3','4','5','6','7','8','9'];
var copyofcolors=['1','2','3','4','5','6','7','8','9'];
check.addEventListener('click',()=>wincheck());
generate.addEventListener('click',()=>generatenew());
window.onload=function(){
    startGame();
   
}
function randompart(){
    let num=Math.floor(Math.random()* color.length);
    let a= color[num];
    color.splice(num,1);
    return a;
}
function startGame(){
    for(let r=0;r<row;r++){
        let rows=[];
        for(let c=0;c<col;c++){
            let tile=document.createElement("img");
            tile.src="./"+randompart()+".jpg";
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
       updateturn();
       
    }
   
}

function updateturn(){
    let points=score.innerText;
    let newpoints=parseInt(points)+1;
    score.innerHTML=newpoints;
}

function generatenew(){
    output.innerText="";
    color=['1','2','3','4','5','6','7','8','9'];
    console.log(color);
    for(let r=0;r<row;r++){
        for(let c=0;c<col;c++){
            
            board[r][c].src="./"+randompart()+".jpg";


        }

    }
}
function wincheck(){
    let k=0;
     color=['1','2','3','4','5','6','7','8','9'];
    for(let r=0;r<row;r++){
        for(let c=0;c<col;c++){
            let cmp=color[k];
            let sourceof=board[r][c].src;
            let a=sourceof[sourceof.length-5];
            if(a!=cmp){
                console.log(a);
                console.log(cmp);
                 output.innerText="OOPS !! YOU LOOSE THE GAME😞";
                return;

            }
            k+=1;

        }

    }
    output.innerText="YOU WON THE GAME !!🎊";
   
    return ;

}
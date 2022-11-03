const togglebtn=document.getElementById('toggle');
console.log("connected")
const hide=document.getElementById('cross');
const navbar=document.getElementById('navbar');
togglebtn.addEventListener('click',()=>{
    console.log("clicked");
navbar.classList.add('active')
})

hide.addEventListener('click',()=>{
    console.log("clicked");
   // cross.classList.add('cross');
navbar.classList.remove('active')
})
console.log(navbar)
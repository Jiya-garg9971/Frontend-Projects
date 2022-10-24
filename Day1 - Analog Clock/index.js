// javascript
setInterval(()=>{
    d=new Date();
    hr=d.getHours();
    min=d.getMinutes();
    sec=d.getSeconds();
    hrotation=30*(hr%12) + (min/2);
    minrotation=6*min;
    secrotation=6*sec;
    hours.style.transform=`rotate(${hrotation}deg)`;
    minutes.style.transform=`rotate(${minrotation}deg)`;
    second.style.transform=`rotate(${secrotation}deg)`;
    
},1000)

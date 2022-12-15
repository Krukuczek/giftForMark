function animateDown(){
    topGift.animate([
        { transform: 'translateY(500px)' },
    ],{
        duration: 2000,
        iterations: 1
    });
}
function paperOut(){
    paper.style.zIndex=8;
    paper.animate([
        { transform: 'scale(2.5)' },
    ],{
        duration: 3000,
        iterations: 1
    });
    setTimeout(()=>paper.style.transform="scale(2.5)" , 3000);
}
const topd=document.getElementById("top");
const decLoop=document.getElementById("loop");
const topGift=document.getElementById("topGift");
const paper=document.getElementById("paper");
topGift.addEventListener("click",e=>{
    
    topGift.animate([
        { transform: 'rotateZ(45deg) scale(1)' },
    ],{
        duration: 2000,
        iterations: 1
    },);
    topGift.animate([
        { transform: 'translateX(600px)' },
    ],{
        duration: 2000,
        iterations: 1
    },);
    decLoop.animate([
        { transform: 'translateY(-700px)' },
    ],{
        duration: 2000,
        iterations: 1
    },);
    paper.animate([
        { transform: 'translateY(-200px)' },
    ],{
        duration: 3000,
        iterations: 1
    },);
    setTimeout(()=>topd.style.transform="translateX(550px)" , 2000);
    setTimeout(()=>decLoop.style.display="none" , 2000);
    setTimeout(()=>animateDown() , 2000);
    setTimeout(()=>paper.style.transform="translateY(-200px)" , 3000);
    setTimeout(()=>topGift.style.transform="translateY(480px)" , 4000);
    setTimeout(()=>topGift.style.zIndex=1 , 4000);
    setTimeout(()=>paperOut() , 2000);
});
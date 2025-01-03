
let timer=60;
let score =0;
let hitScore=0;

function bubblemaker(){
    let clutter = " ";
    let btm=document.querySelector("#cbottom");

for(let i=1;i<=243;i++){
    var rn =Math.floor(Math.random()*10)
   clutter += `<div class="bubble">${rn}</div>`;
}

btm.innerHTML = clutter;
};

function timeout(){
    let timeInt=setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#box2").textContent=timer;
          }
          else{
            clearInterval(timeInt);
            document.querySelector("#cbottom").innerHTML = `<h1> Game Over</h1> `;
           
          }
    },1000);

};

function hitBubble(){
     hitScore =Math.floor(Math.random()*10);
     document.querySelector("#hitValue").textContent = hitScore;
};

function newScore(){
    score+=10;
    document.querySelector("#Score").textContent = score;
};

document.querySelector("#cbottom").addEventListener("click",function(dets){
    if(Number(dets.target.textContent)==hitScore){
        newScore();
        bubblemaker();
        hitBubble();
       
    }
});


hitBubble();
timeout();
bubblemaker();
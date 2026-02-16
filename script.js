function nextPage(num){
    document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
    document.getElementById("page"+num).classList.add("active");
}

function moveNo(btn){
    btn.style.position="absolute";
    btn.style.top=Math.random()*80+"%";
    btn.style.left=Math.random()*80+"%";
}

/* Heart Rain */
function createRainHeart(){
    const heart=document.createElement("div");
    heart.classList.add("rainHeart");
    heart.innerHTML="💖";
    heart.style.left=Math.random()*100+"vw";
    heart.style.fontSize=(Math.random()*25+15)+"px";
    heart.style.animationDuration=(Math.random()*3+3)+"s";
    document.body.appendChild(heart);
    setTimeout(()=>{ heart.remove(); },6000);
}
setInterval(createRainHeart,250);

/* Heart Burst */
function heartBurst(){
    for(let i=0;i<25;i++){
        const burst=document.createElement("div");
        burst.innerHTML="❤️";
        burst.style.position="fixed";
        burst.style.left="50%";
        burst.style.top="50%";
        burst.style.fontSize="20px";
        burst.style.pointerEvents="none";
        burst.style.zIndex="1000";
        const x=(Math.random()-0.5)*400;
        const y=(Math.random()-0.5)*400;
        burst.animate([
            {transform:"translate(0,0)",opacity:1},
            {transform:`translate(${x}px,${y}px)`,opacity:0}
        ],{duration:800,easing:"ease-out"});
        document.body.appendChild(burst);
        setTimeout(()=>{ burst.remove(); },800);
    }
}

/* Music Control */
const music=document.getElementById("bgMusic");
const musicBtn=document.getElementById("musicBtn");

window.addEventListener("load",()=>{
    music.volume=0.5;
    music.play().then(()=>{
        musicBtn.innerHTML="🎵 Pause Music";
    }).catch(()=>{
        musicBtn.innerHTML="🎵 Play Music";
    });
});

function toggleMusic(){
    if(music.paused){
        music.play();
        musicBtn.innerHTML="🎵 Pause Music";
    }else{
        music.pause();
        musicBtn.innerHTML="🎵 Play Music";
    }
}

/* Load 40 Images */
const gallery=document.getElementById("gallery");
for(let i=1;i<=40;i++){
    const img=document.createElement("img");
    img.src="img"+i+".jpeg";
    gallery.appendChild(img);
}

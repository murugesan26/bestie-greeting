const gift=document.getElementById("gift");
const letter=document.getElementById("letter");
const music=document.getElementById("music");
const musicBtn=document.getElementById("musicBtn");

function hearts(n=20){
  for(let i=0;i<n;i++){
    const h=document.createElement("div");
    h.className="floating-heart";
    h.textContent=["❤️","💗","💖","💕","✨"][Math.floor(Math.random()*5)];
    h.style.left=Math.random()*100+"vw";
    h.style.fontSize=(14+Math.random()*22)+"px";
    h.style.animationDelay=(Math.random()*1.5)+"s";
    document.getElementById("hearts").appendChild(h);
    setTimeout(()=>h.remove(),6500);
  }
}
gift.addEventListener("click",()=>{
  hearts(35);
  gift.style.transform="scale(1.2) rotate(3deg)";
  setTimeout(()=>gift.style.transform="",400);
  letter.scrollIntoView({behavior:"smooth"});
});

function confetti(){
  for(let i=0;i<100;i++){
    const c=document.createElement("div");
    c.className="confetti";
    c.style.left=Math.random()*100+"vw";
    c.style.background=`hsl(${Math.random()*360},90%,60%)`;
    c.style.animationDelay=Math.random()*1.5+"s";
    document.body.appendChild(c);
    setTimeout(()=>c.remove(),4500);
  }
}
document.getElementById("confetti").addEventListener("click",confetti);

musicBtn.addEventListener("click",async()=>{
  try{
    if(music.paused){await music.play();musicBtn.textContent="♫ Pause Music";}
    else{music.pause();musicBtn.textContent="♫ Play Music";}
  }catch(e){
    alert("Add a file named music.mp3 to this folder first.");
  }
});
setInterval(()=>hearts(1),1800);

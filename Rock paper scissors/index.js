let video=document.getElementById("video");
let videol=document.getElementById("video1");
let videor=document.getElementById("video2");
let left=document.getElementsByClassName("lefts");
let right=document.getElementsByClassName("rights");
let lefth=document.getElementById("lefth");
let righth=document.getElementById("righth");
let videoner=document.getElementsByClassName("videoblocks");
let winnerblock=document.getElementById("winner");
let all=document.getElementsByTagName("section");
let leftblock=document.getElementById("left");
let rightblock=document.getElementById("right");
let firstpl=document.getElementById("firstpl");
let secondpl=document.getElementById("secondpl");
let startbutton=document.getElementById("startbutton");
let names=document.getElementsByClassName("name");

let li=0;
let ri=0;
let tarb;
let check=false;

let kamenl="video/kamenl.mp4";
let bumagal="video/bumagal.mp4";
let nojl="video/nojl.mp4";
let kamenr="video/kamenr.mp4";
let bumagar="video/bumagar.mp4";
let nojr="video/nojr.mp4";

let leftss=new Array();
leftss[0]=kamenl;
leftss[1]=bumagal;
leftss[2]=nojl;

let rightss=new Array();
rightss[0]=kamenr;
rightss[1]=bumagar;
rightss[2]=nojr;


function cursorauto(arr){
for(let i=0;i<3;i++){
  arr[i].style.cursor="auto";
}
}

function cursorpointer(arr){
  for (let i=0;i<3;i++){
    arr[i].style.cursor="pointer";
  }
}

function hashvark(tarb){
  if(tarb==1 || tarb==-2){
    lefth.innerHTML++;

  }
  if(tarb==2 || tarb==-1){
    righth.innerHTML++;
  }
}

function wincheck(){
  if(lefth.innerHTML==3 || righth.innerHTML==3){
    return true;
  }
  else{
    return false;
  }
}
function winnerf(){
  for(let i=1;i<5;i++){
    all[i].style.display="none";
  }
  winnerblock.style.display="block";
  let l=lefth.innerHTML;
  let r=righth.innerHTML;
  if(l>r){
    winnerblock.innerHTML+=names[0].innerHTML;
    console.log("left");
  }
  else{
    winnerblock.innerHTML+=names[1].innerHTML;
    console.log("right");
  }
}



startbutton.onclick=function(){
 all[0].style.display="none";
 for(let i=1;i<5;i++){
  all[i].style.display="flex";
}
names[0].innerHTML=document.forms["myForm"]["firstname"].value;
names[1].innerHTML=document.forms["myForm"]["secondname"].value;

}

for(let i=0;i<3;i++){
  left[i].onclick=function(){
    if(!check){
      videol.src=leftss[i];
      li=i;
      check=true;
      cursorauto(left);
      cursorpointer(right);
      leftblock.style.backgroundColor="white";
      rightblock.style.backgroundColor="green";
    }
  }
}

for (let i=0;i<3;i++){
  right[i].onclick=function(){
    if(check){
      videor.src=rightss[i];
      ri=i;
      check=false;
      cursorauto(left);
      cursorauto(right);
      rightblock.style.backgroundColor="white";
      setTimeout(function(){
        for(let i=0;i<2;i++){
          videoner[i].style.display="block";
        }
      }, 2000);
      setTimeout(function(){
        if(!wincheck()){
        for(let i=0;i<2;i++){
          videoner[i].style.display="none";
          cursorpointer(left);
          leftblock.style.backgroundColor="green";
          
        }
        tarb=li-ri;
        hashvark(tarb);
      }
      if(wincheck()){
        winnerf();
      }
    }, 6000);
    
    }
  }
}
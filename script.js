
let aboutme=document.getElementById("aboutme");
let aboutmediv=document.getElementsByClassName("aboutmediv");
let contacts=document.getElementById("contact");
let myprojects=document.getElementById("myprojects");
let aboutmebutton=document.getElementById("aboutmebutton");
let contactsbutton=document.getElementById("contactsbutton");
let myprojectsbutton=document.getElementById("myprojectsbutton");
let fon=document.getElementById("fon");
aboutmediv=[...aboutmediv];

let allboxes=[];
allboxes[0]=fon;
allboxes[1]=aboutme;
allboxes[2]=contact;
allboxes[3]=myprojects;

let buttons=[];
buttons[0]="";
buttons[1]=aboutmebutton;
buttons[2]=contactsbutton;
buttons[3]=myprojectsbutton;

const click=ms=>{
  return new Promise(resolve=>{
    setTimeout(()=>resolve(),ms)
  })
}

for(let i=0;i<4;i++){
  buttons[i].onclick=function(){
    for(let j=0;j<4;j++){
      allboxes[j].style.transform="scale(0)";
    }
    click(1000).then(()=>allboxes[i].style.transform="scale(1)");
  }
}
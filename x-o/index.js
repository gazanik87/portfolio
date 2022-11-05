let dasht=document.getElementsByClassName("dasht");
let simbcheck= document.getElementsByClassName("first");
let body=document.getElementById("all");
let winner=document.getElementById("winner");


let winchecker=new Array();
let check= new Array();
let simbol= new Array();



for (let i=0;i<9;i++){
  dasht[i].innerHTML=" ";
  check[i]=0;
}


simbol[0]=simbcheck[0].innerHTML;
simbol[1]=simbcheck[1].innerHTML;
simbol[2]=simbol[0];

let first=0;
let second=0;
let startcheck=false;
let sum=0;

for (let i=0;i<2;i++){
    simbcheck[i].onclick=function(){
    if(!startcheck){
    first=simbol[i];
    second=simbol[i+1];
    startcheck= true;
  
  }
}
}



function checker(){

  for (let i=0;i<8;i++){
    winchecker[i]=0;
  }

  for(let i=0;i<3;i++){
    for (let j=0;j<3;j++){
      winchecker[i]+=check[i*3+j];
      winchecker[i+3]+=check[i+j*3];
      if(i<2){
        winchecker[i+6]+=check[2*i+(j*3+j)/(i+1)];
      }
    }
    }

    
  for (let i=0;i<8;i++){
    sum+=Math.floor(Math.abs(winchecker[i])/3);
    }
    if(sum==0){
      return false;
    }
    if(sum!=0){
      return true;
    }

  }

 





let qayl=true;
let k=0;
let shag=1;

 for (let i=0;i<9;i++){
  dasht[i].onclick=function(){
    if(dasht[i].innerHTML==" "){
      if(qayl){
        dasht[i].innerHTML=first;
        check[i]=1;
        qayl=false;
        
      }
      else if(!qayl){
        dasht[i].innerHTML=second;
        check[i]=-1;
        qayl=true;
      }
      if(checker()){
        body.style.display="none";
        winner.style.display="block";
        winner.innerHTML+= dasht[i].innerHTML;
        }
      // console.log(check);
      // console.log(winchecker);
      console.log(checker());
      console.log(sum);
      shag++;
    }
   
  }

 }






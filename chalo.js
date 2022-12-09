let Btn=document.getElementById("btn");

Btn.addEventListener("click",rand);
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let len=characters.length;
const chkbox=document.getElementById("chck");
let pa1=document.getElementById("p1");
let pa2=document.getElementById("p2");

function rand(){
    if(chck.checked)len=61;
    let pass1="";let pass2="";
    for(let i=0;i<document.getElementById("inpt").value;i++){
        let r1=Math.floor(Math.random()*(len));
        let r2=Math.floor(Math.random()*(len));
        pass1+=characters[r1];pass2+=characters[r2];
    }
    pa1.textContent=pass1;
    pa2.textContent=pass2;
}



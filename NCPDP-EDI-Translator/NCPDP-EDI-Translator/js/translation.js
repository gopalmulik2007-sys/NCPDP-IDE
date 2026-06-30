const btn=document.getElementById("translateBtn");
const progress=document.getElementById("progressBar");
const status=document.getElementById("status");

btn.onclick=function(){

progress.style.width="0%";
status.innerHTML="Translating...";

let p=0;

const timer=setInterval(function(){

p+=10;

progress.style.width=p+"%";

if(p>=100){

clearInterval(timer);

status.innerHTML="Translation Completed";

const edi=document.getElementById("ediInput").value;

const json={

version:"NCPDP D.0",

status:"Success",

edi:edi.trim()

};

document.getElementById("jsonOutput").value=
JSON.stringify(json,null,4);

}

},200);

};
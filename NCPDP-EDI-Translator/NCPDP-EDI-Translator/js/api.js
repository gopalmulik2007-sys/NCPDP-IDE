const sendBtn=document.getElementById("sendBtn");
const progress=document.getElementById("progressBar");
const status=document.getElementById("status");
const response=document.getElementById("response");

sendBtn.onclick=function(){

progress.style.width="0%";
status.innerHTML="Sending Request...";

let p=0;

const timer=setInterval(function(){

p+=10;

progress.style.width=p+"%";

if(p>=100){

clearInterval(timer);

status.innerHTML="API Request Successful";

const result={

status:200,

message:"Translation completed successfully",

transactionId:"TXN"+Math.floor(Math.random()*100000),

timestamp:new Date().toLocaleString(),

outputFile:"translated.json"

};

response.value=JSON.stringify(result,null,4);

}

},200);

};
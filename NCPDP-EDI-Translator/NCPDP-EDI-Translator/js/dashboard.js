// ================================
// NCPDP EDI Translator Dashboard
// dashboard.js
// ================================

// -------------------------------
// Recent Transactions Data
// -------------------------------

const transactions = [

{
id:"TXN001",
patient:"John Smith",
status:"Success",
date:"28-Jun-2026"
},

{
id:"TXN002",
patient:"Emma Johnson",
status:"Failed",
date:"28-Jun-2026"
},

{
id:"TXN003",
patient:"Michael Brown",
status:"Processing",
date:"28-Jun-2026"
},

{
id:"TXN004",
patient:"Sophia Davis",
status:"Success",
date:"27-Jun-2026"
},

{
id:"TXN005",
patient:"William Wilson",
status:"Success",
date:"27-Jun-2026"
},

{
id:"TXN006",
patient:"Olivia Miller",
status:"Failed",
date:"27-Jun-2026"
}

];

const table=document.getElementById("transactionTable");

function loadTable(){

table.innerHTML="";

transactions.forEach(item=>{

let badge="";

if(item.status==="Success"){

badge='<span class="status-success">Success</span>';

}
else if(item.status==="Failed"){

badge='<span class="status-failed">Failed</span>';

}
else{

badge='<span class="status-progress">Processing</span>';

}

table.innerHTML+=`

<tr>

<td>${item.id}</td>

<td>${item.patient}</td>

<td>${badge}</td>

<td>${item.date}</td>

</tr>

`;

});

}

loadTable();


// -------------------------------
// Refresh Button
// -------------------------------

const refreshBtn=document.createElement("button");

refreshBtn.innerHTML="Refresh";

refreshBtn.style.position="fixed";
refreshBtn.style.bottom="25px";
refreshBtn.style.right="25px";
refreshBtn.style.padding="12px 20px";
refreshBtn.style.background="#2563eb";
refreshBtn.style.color="white";
refreshBtn.style.border="none";
refreshBtn.style.borderRadius="10px";
refreshBtn.style.cursor="pointer";
refreshBtn.style.boxShadow="0 8px 20px rgba(0,0,0,.2)";

document.body.appendChild(refreshBtn);

refreshBtn.onclick=function(){

location.reload();

};


// -------------------------------
// Search
// -------------------------------

const search=document.querySelector(".search-box input");

search.addEventListener("keyup",function(){

let value=this.value.toLowerCase();

const rows=document.querySelectorAll("#transactionTable tr");

rows.forEach(row=>{

row.style.display=row.innerText.toLowerCase().includes(value)
?""
:"none";

});

});


// -------------------------------
// Counter Animation
// -------------------------------

function animateCounter(id,target){

let element=document.getElementById(id);

let count=0;

let speed=Math.ceil(target/100);

let interval=setInterval(()=>{

count+=speed;

if(count>=target){

count=target;

clearInterval(interval);

}

element.innerHTML=count.toLocaleString();

},15);

}

animateCounter("total",12458);
animateCounter("success",10982);
animateCounter("failed",892);
animateCounter("progress",584);


// -------------------------------
// Simple Canvas Chart
// -------------------------------

const line=document.getElementById("lineChart");

if(line){

const ctx=line.getContext("2d");

line.width=600;
line.height=250;

ctx.beginPath();

ctx.moveTo(30,180);
ctx.lineTo(100,120);
ctx.lineTo(180,140);
ctx.lineTo(260,80);
ctx.lineTo(340,100);
ctx.lineTo(420,60);
ctx.lineTo(520,90);

ctx.lineWidth=4;
ctx.strokeStyle="#2563eb";

ctx.stroke();

}


// -------------------------------
// Pie Chart
// -------------------------------

const pie=document.getElementById("pieChart");

if(pie){

const ctx=pie.getContext("2d");

pie.width=250;
pie.height=250;

ctx.beginPath();
ctx.moveTo(125,125);
ctx.arc(125,125,90,0,Math.PI*1.4);
ctx.fillStyle="#2563eb";
ctx.fill();

ctx.beginPath();
ctx.moveTo(125,125);
ctx.arc(125,125,90,Math.PI*1.4,Math.PI*1.8);
ctx.fillStyle="#22c55e";
ctx.fill();

ctx.beginPath();
ctx.moveTo(125,125);
ctx.arc(125,125,90,Math.PI*1.8,Math.PI*2);
ctx.fillStyle="#ef4444";
ctx.fill();

ctx.beginPath();
ctx.fillStyle="white";
ctx.arc(125,125,45,0,Math.PI*2);
ctx.fill();

}
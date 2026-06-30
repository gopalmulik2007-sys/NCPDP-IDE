const records=[

{id:"RX1001",patient:"John Smith",drug:"Paracetamol",status:"Validated"},

{id:"RX1002",patient:"Emma Brown",drug:"Amoxicillin",status:"Pending"},

{id:"RX1003",patient:"David Lee",drug:"Ibuprofen",status:"Validated"},

{id:"RX1004",patient:"Sophia Wilson",drug:"Metformin",status:"Pending"},

{id:"RX1005",patient:"Michael Scott",drug:"Aspirin",status:"Validated"}

];

const table=document.getElementById("dataTable");

function loadTable(data){

table.innerHTML="";

data.forEach(r=>{

table.innerHTML+=`

<tr>

<td>${r.id}</td>

<td>${r.patient}</td>

<td>${r.drug}</td>

<td class="${r.status=="Validated"?"valid":"pending"}">

${r.status}

</td>

</tr>

`;

});

}

loadTable(records);

document.getElementById("search").addEventListener("keyup",function(){

const value=this.value.toLowerCase();

const filtered=records.filter(r=>

r.id.toLowerCase().includes(value)||

r.patient.toLowerCase().includes(value)||

r.drug.toLowerCase().includes(value)

);

loadTable(filtered);

});
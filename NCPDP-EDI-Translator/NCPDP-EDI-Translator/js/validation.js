// ===============================
// Validation Module
// ===============================

const validateBtn = document.getElementById("validateBtn");
const progressBar = document.getElementById("progressBar");
const table = document.getElementById("validationTable");

const validCount = document.getElementById("valid");
const invalidCount = document.getElementById("invalid");
const statusText = document.getElementById("statusText");

const validationData = [

    {record:"RX001", segment:"ISA", status:"Valid"},
    {record:"RX002", segment:"GS", status:"Valid"},
    {record:"RX003", segment:"ST", status:"Invalid"},
    {record:"RX004", segment:"BHT", status:"Valid"},
    {record:"RX005", segment:"NM1", status:"Valid"},
    {record:"RX006", segment:"REF", status:"Invalid"},
    {record:"RX007", segment:"N3", status:"Valid"},
    {record:"RX008", segment:"N4", status:"Valid"}

];

validateBtn.addEventListener("click", validateRecords);

function validateRecords(){

    table.innerHTML = "";
    progressBar.style.width = "0%";

    validCount.innerHTML = "0";
    invalidCount.innerHTML = "0";

    statusText.innerHTML = "Validating...";

    let progress = 0;
    let valid = 0;
    let invalid = 0;
    let index = 0;

    const interval = setInterval(function(){

        progress += 12.5;
        progressBar.style.width = progress + "%";

        if(index < validationData.length){

            const item = validationData[index];

            if(item.status === "Valid"){

                valid++;

            }else{

                invalid++;

            }

            table.innerHTML += `

            <tr>

                <td>${item.record}</td>

                <td>${item.segment}</td>

                <td class="${item.status.toLowerCase()}">
                    ${item.status}
                </td>

            </tr>

            `;

            validCount.innerHTML = valid;
            invalidCount.innerHTML = invalid;

            index++;

        }

        if(progress >= 100){

            clearInterval(interval);

            statusText.innerHTML = "Completed";

            alert("Validation Completed Successfully!");

        }

    },400);

}
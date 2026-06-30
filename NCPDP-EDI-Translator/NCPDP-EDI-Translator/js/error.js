const errors = [
    {
        id: "E101",
        module: "Upload",
        message: "File format not supported",
        status: "Critical",
        time: "10:30 AM"
    },
    {
        id: "E102",
        module: "Parsing",
        message: "Missing required segment",
        status: "Pending",
        time: "11:15 AM"
    },
    {
        id: "E103",
        module: "API",
        message: "Timeout error",
        status: "Resolved",
        time: "12:05 PM"
    },
    {
        id: "E104",
        module: "Validation",
        message: "Invalid data format",
        status: "Critical",
        time: "01:20 PM"
    }
];

const table = document.getElementById("errorTable");
const searchInput = document.getElementById("searchError");

function loadErrors(data) {
    table.innerHTML = "";

    data.forEach(err => {

        let statusClass = "";

        if (err.status === "Resolved") statusClass = "status-resolved";
        else if (err.status === "Pending") statusClass = "status-pending";
        else statusClass = "status-critical";

        table.innerHTML += `
            <tr>
                <td>${err.id}</td>
                <td>${err.module}</td>
                <td>${err.message}</td>
                <td class="${statusClass}">${err.status}</td>
                <td>${err.time}</td>
            </tr>
        `;
    });
}

searchInput.addEventListener("keyup", function () {

    const value = this.value.toLowerCase();

    const filtered = errors.filter(err =>
        err.id.toLowerCase().includes(value) ||
        err.module.toLowerCase().includes(value) ||
        err.message.toLowerCase().includes(value)
    );

    loadErrors(filtered);
});

loadErrors(errors);
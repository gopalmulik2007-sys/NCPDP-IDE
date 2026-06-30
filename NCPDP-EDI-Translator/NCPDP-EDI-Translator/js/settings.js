const apiToggle = document.getElementById("apiToggle");
const validationToggle = document.getElementById("validationToggle");
const notifyToggle = document.getElementById("notifyToggle");
const themeToggle = document.getElementById("themeToggle");

function toggleButton(btn, onText, offText) {
    if (btn.innerText === onText) {
        btn.innerText = offText;
        btn.style.background = "#dc2626";
    } else {
        btn.innerText = onText;
        btn.style.background = "#2563eb";
    }
}

apiToggle.addEventListener("click", () => {
    toggleButton(apiToggle, "Enable", "Disable");
});

validationToggle.addEventListener("click", () => {
    toggleButton(validationToggle, "ON", "OFF");
});

notifyToggle.addEventListener("click", () => {
    toggleButton(notifyToggle, "ON", "OFF");
});

themeToggle.addEventListener("click", () => {
    if (themeToggle.innerText === "Light") {
        themeToggle.innerText = "Dark";
        document.body.style.background = "#0f172a";
        document.body.style.color = "white";
    } else {
        themeToggle.innerText = "Light";
        document.body.style.background = "#f4f7fc";
        document.body.style.color = "#1e293b";
    }
});
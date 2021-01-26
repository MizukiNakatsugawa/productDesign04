
let pokeyBtn = document.getElementById("pokey");
let chocopaiBtn = document.getElementById("chocopai");
let checkbox = document.getElementById("checkbox");
let cancelBtn = document.getElementById("cancel");
let infoBtn = document.getElementById("infotmationBtn");
let howtouseCancelBtn = document.getElementById("howtouseCancel");

pokeyBtn.addEventListener("click", () => {
    unityInstance.SendMessage('TestManager', 'SetPokey');
    unityInstance.SendMessage('TestManager', 'SetActivePokeyLine');
});

chocopaiBtn.addEventListener("click", () => {
    unityInstance.SendMessage('TestManager', 'SetNonActivePokeyLine');
});

checkbox.addEventListener("change", () => {
    isChecked();
});

cancelBtn.addEventListener("click", () => {
    checkbox.checked = false;
    isChecked();
});

function isChecked() {
    if (checkbox.checked) {
        document.getElementById("sidebar").style.left = "0";
    } else {
        document.getElementById("sidebar").style.left = "-500px";
    }
}

infoBtn.addEventListener("click", () => {
    document.getElementById("howtouse").style.right = "0";
});

howtouseCancelBtn.addEventListener("click", () => {
    document.getElementById("howtouse").style.right = "-500px";
})
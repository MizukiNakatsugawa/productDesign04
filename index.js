
let pokeyBtn = document.getElementById("pokey");
let chocopaiBtn = document.getElementById("chocopai");
let alfortBtn = document.getElementById("alfort");
let almondBtn = document.getElementById("almondchoco");
let blackBtn = document.getElementById("blackthunder");
let koedaBtn = document.getElementById("koeda");
let pienomiBtn = document.getElementById("pienomi");
let takenokoBtn = document.getElementById("takenokonosato");

let checkbox = document.getElementById("checkbox");
let cancelBtn = document.getElementById("cancel");
let infoBtn = document.getElementById("infotmationBtn");
let howtouseCancelBtn = document.getElementById("howtouseCancel");


pokeyBtn.addEventListener("click", () => {
    unityInstance.SendMessage('TestManager', 'SetObject', 'Pokey');
});

chocopaiBtn.addEventListener("click", () => {
    unityInstance.SendMessage('TestManager', 'SetObject', 'Chocopie');
});

alfortBtn.addEventListener("click", () => {
    unityInstance.SendMessage('TestManager', 'SetObject', 'Alfort');
});

almondBtn.addEventListener("click", () => {
    unityInstance.SendMessage('TestManager', 'SetObject', 'Almond');
});

blackBtn.addEventListener("click", () => {
    unityInstance.SendMessage('TestManager', 'SetObject', 'Black');
});

koedaBtn.addEventListener("click", () => {
    unityInstance.SendMessage('TestManager', 'SetObject', 'Koeda');
});

pienomiBtn.addEventListener("click", () => {
    unityInstance.SendMessage('TestManager', 'SetObject', 'Pienomi');
});

takenokoBtn.addEventListener("click", () => {
    unityInstance.SendMessage('TestManager', 'SetObject', 'Takenoko');
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
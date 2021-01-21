function onClick() {
    unityInstance.SendMessage('TestManager', 'SetPokey');
    unityInstance.SendMessage('TestManager', 'SetActivePokeyLine');
}

let chocopaiBtn = document.getElementById("chocopai");
chocopaiBtn.addEventListener("click", () => {
    console.log(chocopaiBtn);
    unityInstance.SendMessage('TestManager', 'SetNonActivePokeyLine');
});

let pokeyBtn = document.getElementById("pokey");
let chocopaiBtn = document.getElementById("chocopai");

// pokeyBtn.onclick = function() {
//     unityInstance.SendMessage('TestManager', 'SetPokey');
//     unityInstance.SendMessage('TestManager', 'SetActivePokeyLine');
// }

pokeyBtn.addEventListener("click", () => {
    unityInstance.SendMessage('TestManager', 'SetPokey');
    unityInstance.SendMessage('TestManager', 'SetActivePokeyLine');
});

chocopaiBtn.addEventListener("click", () => {
    unityInstance.SendMessage('TestManager', 'SetNonActivePokeyLine');
});
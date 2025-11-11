const lampada = document.getElementById("lampada");

lampada.addEventListener("mouseover",acender);
lampada.addEventListener("mouseout",apagar);

function acender(){
    lampada.src = "flashbang-meme__1_-removebg-preview.png";
    document.body.style.background = "#ffffffff"
}
function apagar(){
    lampada.src = "off.png";
    document.body.style.background = "#222"

}
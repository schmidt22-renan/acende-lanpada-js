const lampada = document.getElementById("lampada");

lampada.addEventListener("mouseover",acender);
lampada.addEventListener("mouseout",apagar);

function acender(){
    lampada.src = "flashbang-meme__1_-removebg-preview.png";
    document.body.style.background = "#ffffffff"
}
function apagar(){
    lampada.src = "download-removebg-preview.png";
    document.body.style.background = "#000000ff"

}
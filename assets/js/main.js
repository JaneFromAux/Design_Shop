let slideIn = document.getElementById("slideIn");
// let closeBar = document.getElementById("closeBar");

function slideMenu() {
    console.log('menu slides');
    slideIn.classList.add("slide");
}
function closeBar() {
    console.log('bar closed');
    slideIn.classList.remove("slide");
}
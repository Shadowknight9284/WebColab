function changeImage(button) {
    if (button.innerHTML === "☀️") {
        button.innerHTML = "🌙";
        darkMode();
        
    } else {
        button.innerHTML = "☀️";
        lightMode();
    }
}

function lightMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

//Inverts image colors bc funny
function invert(){
    document.getElementById("roel.jpeg").style.filter="invert(100%)";
}
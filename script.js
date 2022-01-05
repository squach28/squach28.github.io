var darkMode = false;

function toggleDarkMode() {
    var darkModeIcon = document.getElementById("darkModeIcon");
    var body = document.body;
    // fas fa-moon = dark mode enabled
    // far fa-moon = dark mode disabled
    if(darkModeIcon.className == "fas fa-moon") {
        darkModeIcon.className = "far fa-moon"; 
        darkModeIcon.style.border = "1px solid black";
        body.classList.remove("darkMode");
    } else {
        darkModeIcon.className = "fas fa-moon";
        darkModeIcon.style.border = "1px solid white";
        body.classList.toggle("darkMode");
    }
}
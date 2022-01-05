var darkMode = false;

function toggleDarkMode() {
    var darkModeIcon = document.getElementById("darkModeIcon");
    var body = document.body;
    var navBar = document.getElementById("navBar");
    // fas fa-moon = dark mode enabled
    // far fa-moon = dark mode disabled
    if(darkModeIcon.className == "fas fa-moon") {
        darkModeIcon.className = "far fa-moon"; 
        darkModeIcon.style.border = "1px solid black";
        body.classList.remove("darkMode");
        for(let i = 0; i < navBar.children.length; i++) {
            var link = navBar.children[i];
            link.children[0].style.color = "black";
            console.log(link.children[0]);
        }
        
    } else {
        darkModeIcon.className = "fas fa-moon";
        darkModeIcon.style.border = "1px solid white";
        body.classList.toggle("darkMode");
        for(let i = 0; i < navBar.children.length; i++) {
            var link = navBar.children[i];
            link.children[0].style.color = "white";
            console.log(link.children[0]);
        }
    }
}
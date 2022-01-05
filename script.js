var darkMode = false;

function toggleDarkMode() {
    var darkModeIcon = document.getElementById("darkModeIcon");
    var body = document.body;
    var title = document.getElementById("title");
    var navBar = document.getElementById("navBar");
    var lineBreaks = document.getElementsByClassName("lineBreak");
    // fas fa-moon = dark mode enabled
    // far fa-moon = dark mode disabled
    if(darkModeIcon.className == "fas fa-sun") {
        darkModeIcon.className = "far fa-moon"; 
        darkModeIcon.style.border = "1px solid black";
        body.classList.remove("darkMode");
        title.classList.remove("darkModeTitle");
        for(let i = 0; i < lineBreaks.length; i++) {
            lineBreaks[i].classList.remove("darkModeLineBreak")
        }
        for(let i = 0; i < navBar.children.length; i++) {
            var link = navBar.children[i];
            link.children[0].style.color = "black";
        }
        
    } else {
        darkModeIcon.className = "fas fa-sun";
        darkModeIcon.style.border = "1px solid white";
        body.classList.toggle("darkMode");
        title.classList.toggle("darkModeTitle");
        for(let i = 0; i < lineBreaks.length; i++) {
            lineBreaks[i].classList.toggle("darkModeLineBreak")
        }
        for(let i = 0; i < navBar.children.length; i++) {
            var link = navBar.children[i];
            link.children[0].style.color = "white";
        }
    }
}
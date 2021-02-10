var slideIndex = 0;

showSlide(slideIndex);

function nextSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    console.log(slides.length);
    if(n > slides.length) {
        slideIndex = 0;
    }

    if(n < 0) {
        slideIndex = slides.length;
    }

    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";

    if(n == 0) {
        document.getElementById("previousButton").disabled = true;
    } else if(n == slides.length - 1) {
        document.getElementById("nextButton").disabled = true;
    } else {
        document.getElementById("previousButton").disabled = false;
        document.getElementById("nextButton").disabled = false;
    }
}
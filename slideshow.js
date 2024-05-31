var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

//CARDS
var data = [
    {project:"Dashboard", desc: "C#", img: "/home/hermann/WebstormProjects/djayke.github.io/ressource/dash.png"},
    {project:"Hand Motion Tracker", desc: "C#", img: "/home/hermann/WebstormProjects/djayke.github.io/ressource/dash.png"},
    {project:"My own programming language", desc: "Java", img: "/home/hermann/WebstormProjects/djayke.github.io/ressource/dash.png"},
]

function renderCarousel(data){
    let root = document.getElementsByClassName("slideshow-container");

    data.forEach((x, root)=>{
        let ctx = document.createElement("div");
        ctx.className = "mySlides";
        let title = document.createElement("h3");
        title.innerText = x.project;
        let desc = document.createElement("p");
        desc.innerText = x.desc;
        let img = document.createElement("img");
        img.src = x.img;
        img.style.setProperty("width", "100%");
        ctx.appendChild(title);
        ctx.appendChild(desc);
        ctx.appendChild(img);
        root.appendChild(ctx);
    });
}

renderCarousel(data);

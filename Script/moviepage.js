
let json = localStorage.getItem("movie");
let jsonObject = JSON.parse(json);



const movie = new Movie(jsonObject.title, jsonObject.director, jsonObject.rating, jsonObject.Storyline, jsonObject.image, jsonObject.year, jsonObject.genre);

const title = document.getElementById("title");
const director = document.getElementById("Director");
const rating = document.getElementById("rating");
const StoryLine = document.getElementById("StoryLine");
const image = document.getElementById("image");
const year = document.getElementById("year");


title.innerHTML = movie.title;
Director.innerHTML = movie.director;
rating.innerHTML = movie.rating;
StoryLine.innerHTML = movie.Storyline;
image.src = movie.image;
releaseyear.innerHTML = movie.year;



const back = document.getElementById("backButton");


    back.addEventListener("click", function() {
        window.location.href = "index.html";
    });

const remove = document.getElementById("removebutton");

remove.addEventListener("click", function() {
    let movieToRemove = JSON.stringify(movie);
    console.log(movieToRemove);
            localStorage.setItem("movietoremove", movieToRemove);    
           window.location.href = "index.html";
});


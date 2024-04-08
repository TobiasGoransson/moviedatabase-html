
const title = document.getElementById('title');
const year = document.getElementById('year');
const director = document.getElementById('director');
const rating = document.getElementById('rating');
const image = document.getElementById('image');
const storyLine = document.getElementById('storyline');
const genre = document.getElementById('genre');

const addMovie = document.getElementById('addMoviebutton');

addMovie.addEventListener('click', function() {
    if (title.value === '' || year.value === '' || director.value === '' || rating.value === '' || image.value === '' || storyLine.value === '' || genre.value === '') {
        alert('Please fill in all fields');
        return;
    }
    else if (image.value.indexOf('http') !== 0) {
        alert('Image must be a URL');
        return;
    }
    else
    {
    let movie = new Movie(title.value, director.value, rating.value, storyLine.value, image.value, year.value, genre.value);
    console.log(movie);
    let json = JSON.stringify(movie);
    console.log(json);
    localStorage.setItem('addmovie', json);

    window.location.href = 'index.html';
    }
});

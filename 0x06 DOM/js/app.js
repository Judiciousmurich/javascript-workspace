const title = document.getElementById("heading-id")
title.classList.add('title-class')

const myTitle = document.querySelector('.movie-title')
myTitle.style.color = "orangered";

const allMovieTitles = document.querySelectorAll('.movie-title')
console.log(allMovieTitles)
allMovieTitles[0].style.textDecoration="overline"
allMovieTitles[1].style.textDecoration = "underline"
allMovieTitles[2].style.textDecoration = "line-through"
allMovieTitles[3].fontStyle = "italic"
for (let i = 0; i < allMovieTitles.length; i++){
    allMovieTitles[i].style.border = "2px solid lightseagreen"
}

const moviesDescription = document.querySelectorAll('.movie-paragraph');
for(let j = 0; j < moviesDescription.length; j++){
    moviesDescription[j].style.color = "lightslategrey"
}

const moviesParagraph = document.getElementsByClassName('.more movies');
console.log(moviesParagraph)

const buttons = document.getElementsByTagName('button')
console.log(buttons)

// Event listeners
const moreMoviesButton = document.getElementsById('more-movies');

moreMoviesButton.addEventListener('click', function(){

    const hiddenMovies = document.querySelector('.movies-title')
    hiddenMovies.classList.remove('hidden')
})

const hideMoviesButton = document.getElementById ('hide -movies');
 hideMoviesButton.addEventListener('click',  function(){
    const  hiddenMovies =document.querySelector('.movies-title')
    hiddenMovies.classList.add('hidden')
 })

 const colorChanger = document.querySelector("#red-changer")
 colorChanger.addEventListener('click', function(){
    const element = document.querySelector('#id-color-change')
    element.classList.toogle('dummy-class')

 })
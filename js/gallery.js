const images = document.querySelector('#cards-images'),
imagesCollection = images.querySelectorAll('#cards-images > div');

const movies = document.querySelector('#cards-movies');

let imagesAutomaticScroll;
let moviesAutomaticScroll;

function activateScroll (element) {
    element == images ? imagesAutomaticScroll = setInterval(scroll, 10, element):  moviesAutomaticScroll = setInterval(scroll, 10, element);
};


activateScroll(images);
activateScroll(movies);

function scroll(ele) {
    if(ele.scrollLeft > ele.scrollWidth - ele.clientWidth - 2){ //When the scroll reaches the end of the images
        setTimeout(()=>{ele.scrollLeft = 0}, 5000) //go to the start position
        ele == images ? clearInterval(imagesAutomaticScroll) : clearInterval(moviesAutomaticScroll); //stop the interval

    }else{
        ele.scrollLeft += 1; //Automatic scroll
        return;
    }
};

images.addEventListener('mouseover', () => (clearInterval(imagesAutomaticScroll)));
images.addEventListener('mouseleave', () => (activateScroll(images)));

movies.addEventListener('mouseover', () => (clearInterval(moviesAutomaticScroll)));
movies.addEventListener('mouseleave', () => (activateScroll(movies)));


const imageArrows = document.querySelectorAll('#slider-images > div');

let imageLeftArrowScroll;
let imageRightArrowScroll;
imageArrows.forEach((arrow) => {
    if(arrow.attributes[0].value == "arrows"){
        //Block of code for arrows
        arrow.addEventListener('mouseover', () => {
            if(arrow.firstElementChild.classList.contains('fa-angle-left')){
                clearInterval(imagesAutomaticScroll);
                imageLeftArrowScroll = setInterval(() => {images.scrollLeft -= 3} ,10)
            }
            else{
                clearInterval(imagesAutomaticScroll);
                imageRightArrowScroll = setInterval(() => {images.scrollLeft += 3} ,10)
            }
        });
        
        arrow.addEventListener('mouseout', () => {
            if(arrow.firstElementChild.classList.contains('fa-angle-left')){
                clearInterval(imageLeftArrowScroll);
            }else{
                clearInterval(imageRightArrowScroll)
            }
        });
    }else{
        //Block of code for other elements
        return;
    }
})


imagesCollection.forEach((colection) => { //Show/hide info from images collections and scale background images
    colection.addEventListener('mouseover', () => {
        colection.lastElementChild.classList.replace('invisible', 'visible');
        colection.firstElementChild.classList.add('scale-110');
    })
    colection.addEventListener('mouseout', () => {
        colection.lastElementChild.classList.replace('visible', 'invisible');
        colection.firstElementChild.classList.remove('scale-110');
    })
});

const movieArrows = document.querySelectorAll('#slider-movies > div');

let movieLeftArrowScroll;
let movieRightArrowScroll;
movieArrows.forEach((arrow) => {
    if(arrow.attributes[0].value == "arrows"){
        //Block of code for arrows
        arrow.addEventListener('mouseover', () => {
            if(arrow.firstElementChild.classList.contains('fa-angle-left')){
                clearInterval(moviesAutomaticScroll);
                movieLeftArrowScroll = setInterval(() => {movies.scrollLeft -= 3} ,10)
            }
            else{
                clearInterval(moviesAutomaticScroll);
                movieRightArrowScroll = setInterval(() => {movies.scrollLeft += 3} ,10)
            }
        });

        arrow.addEventListener('mouseout', () => {
            if(arrow.firstElementChild.classList.contains('fa-angle-left')){
                clearInterval(movieLeftArrowScroll);
            }else{
                clearInterval(movieRightArrowScroll)
            }
        });
    }else{
        //Block of code for other elements
        return;
    }
})

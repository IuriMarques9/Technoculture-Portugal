const images = document.querySelector('#cards-images');

let imagesAutomaticScroll;
function activateScroll (element) {
    imagesAutomaticScroll = setInterval(scroll, 10, element);
}
activateScroll(images);
function scroll(ele) {
    if(ele.scrollLeft > ele.scrollWidth - ele.clientWidth - 2){ //When the scroll reaches the end of the images
        setTimeout(()=>{ele.scrollLeft = 0}, 5000) //go to the start position
        clearInterval(imagesAutomaticScroll);  //stop the interval

        setTimeout(activateScroll, 10000, ele) //and start again after 5 seconds

    }else{
        ele.scrollLeft += 1; //Automatic scroll
        return;
    }
};

images.addEventListener('mouseover', () => (clearInterval(imagesAutomaticScroll)));
images.addEventListener('mouseleave', () => (activateScroll(images)));
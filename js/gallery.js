const images = document.querySelector('#cards-images');

let automaticScroll;
function activateScroll (element) {
    automaticScroll = setInterval(scroll, 10, element);
};
activateScroll(images);
function scroll(ele) {
    if(ele.scrollLeft > ele.scrollWidth - ele.clientWidth - 2){ //When the scroll reaches the end of the images
        setTimeout(()=>{ele.scrollLeft = 0}, 5000) //go to the start position
        clearInterval(automaticScroll);  //stop the interval
    }else{
        ele.scrollLeft += 1; //Automatic scroll
        return;
    }
};

images.addEventListener('mouseover', () => (clearInterval(automaticScroll)));
images.addEventListener('mouseleave', () => (activateScroll(images)));
const cards = document.getElementsByName('card'); /*Gallery cards*/

const carrousselArrows = document.querySelectorAll('#carroussel-wrapper i'), /* Carrousel arrows from next events */
carroussel =  document.querySelector('#carroussel'), /* Carrousel from next events */
carrousselItems = document.querySelectorAll('#carroussel div'); /* Carrousel items */
const dots = document.querySelectorAll('#carroussel-dots li'); /* Carrousel nav dots */

const sliderWrapper = document.querySelector('#slider-wrapper'), /*Slider wrapper from testimonials */
sliderArrows = document.querySelectorAll('#slider-testimonials > i'); /*Slider arrows */


//#region On page load conditionals
if(window.screen.width < 640 || window.innerWidth < 640){
    carroussel.scrollLeft = 300;
}
else{
    carroussel.scrollLeft = 150;
}
//#endregion

//#region Image scale from animated gallery cards
for(let i = 0; i< cards.length; i++){
    const content = cards[i].children[0].children[1];
    content.addEventListener("mouseover",  function(){
        cards[i].children[0].children[0].classList.add('scale-110')
    });
    content.addEventListener("mouseout",  function(){
        cards[i].children[0].children[0].classList.remove('scale-110')
    });
}
//#endregion

//#region Carossel from Events
let active = 0;

carrousselArrows.forEach((arrow) => {
    if(arrow.classList.contains('fa-chevron-right')){
        arrow.addEventListener("click", () => {
            if(active <= carrousselItems.length -4){
                carroussel.scrollLeft += 300;
                active += 1;
            }else{
                active = carrousselItems.length -3;
            }

            reloadDots(active);
        });
    }
    else{
        arrow.addEventListener("click", () => {
            if(active > 0){
                carroussel.scrollLeft -= 300;
                active -= 1;
            }else{
                active = 0;
            }

            reloadDots(active);
        });
    }
});

function reloadDots(active){
    dots.forEach((dot) => {
        if(dot.classList.contains('active')){
            dot.classList.remove('active');
        }
    })
    dots[active].classList.add('active');
};

//#endregion

//#region Testimonials slider
const testimonialInterval = setInterval(nextTestimonial, 5000);

function nextTestimonial(){
    sliderWrapper.scrollLeft += 500;
    if(sliderWrapper.scrollLeft < sliderWrapper.scrollWidth - sliderWrapper.clientWidth - 1){
        sliderWrapper.scrollLeft += sliderWrapper.clientWidth;
    }else{
        sliderWrapper.scrollLeft = 0;
    }
}
sliderArrows.forEach((arrow) => {
    if(arrow.classList.contains('fa-angle-right')){
        arrow.addEventListener("click", () => {
            clearInterval(testimonialInterval);
            if(sliderWrapper.scrollLeft < sliderWrapper.scrollWidth - sliderWrapper.clientWidth - 1){
                sliderWrapper.scrollLeft += sliderWrapper.clientWidth;
            }else{
                sliderWrapper.scrollLeft = 0;
            }
        });
    }
    else{
        arrow.addEventListener("click", () => {
            clearInterval(testimonialInterval);
            if(sliderWrapper.scrollLeft == 0){
                sliderWrapper.scrollLeft = sliderWrapper.scrollWidth;
            }else{
                sliderWrapper.scrollLeft -= sliderWrapper.clientWidth;
            }
        });
    }
});
//#endregion
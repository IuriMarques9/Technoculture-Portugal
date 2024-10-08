//#region Initialized variables
const logo = document.querySelector('#logo'), /*Logo*/
menuIconAndSocial = document.querySelector('#menuIconAndSocial'), /*Icon Menu*/
menuSocial = document.querySelector('#social'),
header = document.getElementById('header'); /*Header*/

const navBiggerDevices = document.querySelector('#navBiggerDevices'), /*Nav for devices bigger than mobile */
navMobile = document.querySelector('#navMobile'); /*Nav for mobile */

const toTopButton = document.querySelector('#toTop'); /*Button to top*/

const cards = document.getElementsByName('card'); /*Gallery cards*/

const divFooter = document.querySelector('#divFooter'); /*Footer separator left*/

const questions = document.getElementsByName('question'); /*Questions from FAQ's */

const sendEmailForm = document.getElementById('contactUsAside'), /*Form from contact us FAQ's */
sidePanelChevron = document.getElementById('sidePanelChevron');  /*Chevron from side panel */

const carrousselArrows = document.querySelectorAll('#carroussel-wrapper i'), /* Carrousel arrows from next events */
carroussel =  document.querySelector('#carroussel'), /* Carrousel from next events */
carrousselItems = document.querySelectorAll('#carroussel div'); /* Carrousel items */
const dots = document.querySelectorAll('#carroussel-dots li'); /* Carrousel nav dots */

const sliderWrapper = document.querySelector('#slider-wrapper'), /*Slider wrapper from testimonials */
sliderArrows = document.querySelectorAll('#slider-testimonials > i'); /*Slider arrows */

//#endregion

//#region On page load conditionals

if(window.scrollY > 0){
    header.classList.toggle('bgHeaderScrollDown');  /*Header background color*/
    
    toTopButton.classList.toggle('invisible');
}

if(window.screen.width < 640 || window.innerWidth < 640){
    logo.src = "assets/img/logo.jpg";  /*Logo for mobile*/
    menuIconAndSocial.classList.remove('hidden');  /*Icon Menu and Social buttons for mobile*/
    divFooter.classList.add('hidden'); //Hide footer separator
    menuSocial.classList.add('hidden');

    carroussel.scrollLeft = 300;

}else{
    logo.src = "assets/img/logo_grande.png"; /*Logo for devices bigger than mobile*/
    navBiggerDevices.classList.remove('hidden'); /*Icon Menu and Social buttons for bigger than mobile*/
    divFooter.classList.remove('hidden'); //Show footer separator
    menuSocial.classList.remove('hidden'); //Show footer separator

    carroussel.scrollLeft = 150;
    
}
//#endregion

//#region On page resize
addEventListener("resize", () => {
    if(window.screen.width < 640 || window.innerWidth < 640){
        divFooter.classList.add('hidden'); //Hide left footer separator
        logo.src = "assets/img/logo.jpg"; //Change logo from top bar
        
        menuIconAndSocial.classList.remove('hidden'); //Show hamburguer menu icone and social buttons from top bar
        navBiggerDevices.classList.add('hidden'); //Hide nav for bigger devices~
        
        menuSocial.classList.add('hidden');
    }
    else{
        divFooter.classList.remove('hidden'); //Show left footer separator
        logo.src = "assets/img/logo_grande.png"; //Change logo from top bar
        menuIconAndSocial.classList.add('hidden'); //Hide hamburguer menu icone and social buttons from top bar
        navBiggerDevices.classList.remove('hidden'); //Show nav for bigger devices
        navMobile.classList.add('hidden'); //Hide mobile nav when screen is bigger than mobile
        
        menuSocial.classList.remove('hidden');
    }
})
//#endregion

//#region On page scroll
window.addEventListener('scroll',  function(){
    if(window.scrollY > 0){
        header.classList.add('bgHeaderScrollDown'); //Change header background color when scrolling to top
        
        toTopButton.classList.remove('invisible'); //Show button to page top when scrolling to top
        
    }else{
        header.classList.remove('bgHeaderScrollDown'); //Change header background color when scrolling to top
        
        toTopButton.classList.add('invisible'); //Show button to page top when scrolling down
    }
})
//#endregion

//#region Image scale from animated cards
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

//#region FAQ's page collapsibles
for(i = 0; i < questions.length ;  i++){
    questions[i].addEventListener("click", function(){
        this.classList.toggle('!bg-[#590202]');
        const content =  this.nextElementSibling;
        if(content.classList.contains('hidden')){
            content.classList.toggle('hidden');
        }else{
            content.classList.toggle('hidden');
        }
    })
}
//#endregion

//#region Send email in FAQ's
function openSidePanel(){
    if(sendEmailForm.classList.contains('fade-left')){
        sendEmailForm.classList.replace('fade-left', 'fade-right');
        sidePanelChevron.classList.replace('fa-chevron-up', 'fa-chevron-down');
    }else if(sendEmailForm.classList.contains('fade-right')){
        sendEmailForm.classList.replace('fade-right', 'fade-left');
        sidePanelChevron.classList.replace('fa-chevron-down', 'fa-chevron-up');
    }else{
        sendEmailForm.classList.add('fade-right');
        sidePanelChevron.classList.replace('fa-chevron-up', 'fa-chevron-down');
    }
};
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
            setInterval(nextTestimonial, 25000);
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
            setInterval(nextTestimonial, 25000);
        });
    }
});
//#endregion
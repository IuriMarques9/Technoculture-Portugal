//#region Initialized variables
const logo = document.querySelector('#logo'); /*Logo*/
const menuIconAndSocial = document.querySelector('#menuIconAndSocial'); /*Icon Menu*/
const header = document.querySelector('#header'); /*Header*/

const navBiggerDevices = document.querySelector('#navBiggerDevices'); /*Nav for devices bigger than mobile */
const navMobile = document.querySelector('#navMobile'); /*Nav for mobile */

const toTopButton = document.querySelector('#toTop'); /*Button to top*/

const cards = document.getElementsByName('card'); /*Gallery cards*/

const divLeft = document.querySelector('#left'); /*Footer separator left*/
const divRight = document.querySelector('#right'); /*Footer separator right*/

const questions = document.getElementsByName('question'); /*Questions from FAQ's */
//#endregion

//#region On page load conditionals

if(window.scrollY > 0){
    header.classList.toggle('bgHeaderScrollDown');  /*Header background color*/
    
    toTopButton.classList.toggle('invisible');
}

if(window.screen.width < 640 || window.innerWidth < 640){
    logo.src = "assets/img/logo.jpg";  /*Logo for mobile*/
    menuIconAndSocial.classList.remove('hidden');  /*Icon Menu and Social buttons for mobile*/
    divLeft.classList.add('hidden'); //Hide left footer separator
    divRight.classList.add('hidden'); //Hide right footer separator
}else{
    logo.src = "assets/img/logo_grande.png"; /*Logo for devices bigger than mobile*/
    navBiggerDevices.classList.remove('hidden'); /*Icon Menu and Social buttons for bigger than mobile*/
    divLeft.classList.remove('hidden'); //Hide left footer separator
    divRight.classList.remove('hidden'); //Hide right footer separator
}
//#endregion

//#region On page resize
addEventListener("resize", () => {
    if(window.screen.width < 640 || window.innerWidth < 640){
        divLeft.classList.add('hidden'); //Hide left footer separator
        divRight.classList.add('hidden'); //Hide right footer separator
        logo.src = "assets/img/logo.jpg"; //Change logo from top bar

        menuIconAndSocial.classList.remove('hidden'); //Show hamburguer menu icone and social buttons from top bar
        navBiggerDevices.classList.add('hidden'); //Hide nav for bigger devices
    }
    else{
        divLeft.classList.remove('hidden'); //Show left footer separator
        divRight.classList.remove('hidden'); //Show right footer separator
        logo.src = "assets/img/logo_grande.png"; //Change logo from top bar
        menuIconAndSocial.classList.add('hidden'); //Hide hamburguer menu icone and social buttons from top bar
        navBiggerDevices.classList.remove('hidden'); //Show nav for bigger devices
        navMobile.classList.add('hidden'); //Hide mobile nav when screen is bigger than mobile

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

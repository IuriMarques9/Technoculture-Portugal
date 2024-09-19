const logo = document.querySelector('#logo'); /*Logo*/
const menuIconAndSocial = document.querySelector('#menuIconAndSocial'); /*Icon Menu*/
const header = document.querySelector('#header'); /*Header*/

const navBiggerDevices = document.querySelector('#navBiggerDevices'); /*Nav for devices biger than mobile */

const toTopButton = document.querySelector('#toTop'); /*Button to top*/

const cards = document.getElementsByName('card'); /*Gallery cards*/

const divLeft = document.querySelector('#left'); /*Footer separator left*/
const divRight = document.querySelector('#right'); /*Footer separator right*/


/*On page load choose the right logo for header and show/hide hamburguer menu icone*/ 
if(window.screen.width < 640){
    logo.src = "assets/img/logo.jpg";
    menuIconAndSocial.classList.remove('hidden');
}else{
    logo.src = "assets/img/logo_grande.png";
    navBiggerDevices.classList.remove('hidden');
}

//#region Show/Hide footer divisory (<div>) and hamburguer menu icone, change logo if page rezise
addEventListener("resize", () => {
    if(window.screen.width < 640){
        divLeft.classList.add('hidden');
        divRight.classList.add('hidden');
        logo.src = "assets/img/logo.jpg";

        menuIconAndSocial.classList.remove('hidden');
        console.log('entrou')
        navBiggerDevices.classList.add('hidden');
    }
    else{
        divLeft.classList.remove('hidden');
        divRight.classList.remove('hidden');
        logo.src = "assets/img/logo_grande.png";

        menuIconAndSocial.classList.add('hidden');
        navBiggerDevices.classList.remove('hidden');
    }
})
//#endregion

//#region Header Background color change and show/hide 'to top' button when scroll down */
window.addEventListener('scroll',  function(){
    if(window.scrollY > 0){
        header.classList.add('!bg-[#590202]');
        toTopButton.classList.remove('invisible');
    }else{
        header.classList.remove('!bg-[#590202]');
        toTopButton.classList.add('invisible');
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

//#region Header Background color change when scroll down */
const header  = document.querySelector('#header');

window.addEventListener('scroll',  function(){
    if(window.scrollY > 0){
        header.classList.add('!bg-[#590202]');
    }else{
        header.classList.remove('!bg-[#590202]');
    }
})
//#endregion

//#region Image scale from animated cards
const cards = document.getElementsByName('card');
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

//#region Show/Hide footer divisory (<div>)
const divLeft = document.querySelector('#left');
const divRight = document.querySelector('#right');

addEventListener("resize", () => {
    if(window.innerWidth < 640){
        divLeft.classList.add('hidden');
        divRight.classList.add('hidden');
    }else{
        divLeft.classList.remove('hidden');
        divRight.classList.remove('hidden');
    }
})
//#endregion
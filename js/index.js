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


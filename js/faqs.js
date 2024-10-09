const questions = document.getElementsByName('question'); /*Questions from FAQ's */

//#region FAQ's page collapsibles
for(i = 0; i < questions.length ;  i++){
    questions[i].addEventListener("click", function(){
        this.classList.toggle('!bg-[#590202]');
        const content =  this.nextElementSibling;
        if(content.classList.contains('hidden')){
            content.classList.remove('hidden');
        }else{
            content.classList.add('hidden');
        }
    })
}
//#endregion
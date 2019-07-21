// ページ遷移機能
const hundle = document.querySelector(".hundle");
const view = document.querySelector(".main-container");

hundle.children[0].addEventListener("click",function num1(){
    view.children[0].style.display="block";
    view.children[1].style.display="none";
    view.children[2].style.display="none";
    console.log(view.children[0]);
});
hundle.children[1].addEventListener("click",function num2(){
    view.children[0].style.display="none";
    view.children[1].style.display="block";
    view.children[2].style.display="none";
    console.log(view.children[1]);
});
hundle.children[2].addEventListener("click",function num3(){
    view.children[0].style.display="none";
    view.children[1].style.display="none";
    view.children[2].style.display="block";
    console.log(view.children[2]);
});
// contact機能
const screen = document.querySelector(".message-container");
const textInput = document.querySelector(".text-input");
textInput.addEventListener("keypress",(evt)=>{
    if(evt.key === "Enter"){
        console.log("good work!!!");
        console.log(evt.target.value);
        screen.innerHTML += ('<div><p>' + evt.target.value + '</p></div>');
        evt.target.value = "";
    }
});




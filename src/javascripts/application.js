//axios
import axios from 'axios';
import Chat from 'modules/chat';
import Info from 'modules/info';
import Portfolio from 'modules/portFolio';
// contact機能
const chat = new Chat();
const screen = document.querySelector(".message-container");
const textInput = document.querySelector(".text-input");
const nameInput = document.querySelector(".name-input");
const submit = document.querySelector(".submit");
// ページ遷移機能
const top = document.querySelector(".toTop");
const about = document.querySelector(".toAbout");
const contact = document.querySelector(".toContact");
const view = document.querySelector(".main-container");
console.log(view.children)
// portfolio追加
const portFolio = new Portfolio();
const portFolioBoard = document.querySelector(".num2-container");
// info機能
const infoDate = document.querySelector(".new-info");
const info = new Info();
const infoBar = document.querySelector(".info-container");
const mainBar = document.querySelector(".num1-container");
const trigger = document.querySelector(".trigger");
let i = 0;

//infoBar slideIn
trigger.addEventListener("click", (evt)=>{
    i++;
    if(i%2 !== 0){
        infoBar.style.display="block"
    }else if (i%2 === 0){
        infoBar.style.display="none"
    }
})

// ページ遷移機能
top.addEventListener("click",function num1(){
    view.children[0].style.display="block";
    view.children[1].style.display="none";
    view.children[2].style.display="none";
});
about.addEventListener("click",function num2(){
    view.children[0].style.display="none";
    view.children[1].style.display="block";
    view.children[2].style.display="none";
});
contact.addEventListener("click",function num3(){
    view.children[0].style.display="none";
    view.children[1].style.display="none";
    view.children[2].style.display="block";
});


// info
info.fetch().then(function(response){
    for(let i = 0; i < response.data.length; i++){
        let dateMonth = new Date(response.data[i].dateTime).getMonth();
        let dateYear = new Date(response.data[i].dateTime).getFullYear();
        let dataDate = new Date(response.data[i].dateTime).getDate();
        infoDate.innerHTML += `<tr>
        <td class="date">${dateYear}年${dateMonth+1}月${dataDate}日</td>
        <td class="contents">${response.data[i].information}</td>
        </tr>`
    }
});

// portfolio追加
portFolio.fetch().then(function (response) {
    for(let i = 0; i < response.data.length; i++){
        portFolioBoard.innerHTML +=
        `
        <div class="num2-item">
            <h5 class="num2-item-name">${response.data[i].name}</h5>
            <div class="num2-text">
                <a href="${response.data[i].link}" class="num2-link">${response.data[i].link}</a>
                <p class="num2-item-content">${response.data[i].body}</p>
            </div>
        </div>
        `
    }
});

// chatget
chat.fetch().then(function(response){
    for(let i = 0; i < response.data.length; i++){
        if(response.data[i].name === 'master'){
            screen.innerHTML += ('<div class="master-comment"><div class="output-name"><p class="on">'
            + response.data[i].name + '</p></div><div class="output-text"><p class="ot">'
            + response.data[i].comment + '</p></div></div>');
        }else if(response.data[i].name === ''){
            screen.innerHTML += ('<div class="comment"><div class="output-name"><p class="on">'
            + 'user' + '</p></div><div class="output-text"><p class="ot">'
            + response.data[i].comment + '</p></div></div>');
        }else{
            screen.innerHTML += ('<div class="comment"><div class="output-name"><p class="on">'
            + response.data[i].name + '</p></div><div class="output-text"><p class="ot">'
            + response.data[i].comment + '</p></div></div>');
        }
    }
});

// チャット入力
// nameがmasterなら左側に出力それ以外なら右側に出力
// textが空なら表示されない
submit.addEventListener("click",async (evt)=>{
    if(textInput.value === '') return

    await chat.send(nameInput.value, textInput.value);
    textInput.value = "";
    nameInput.value = "";

    const response = await chat.fetch();

　　let ln = (response.data.length -1)
    if(response.data[ln].name === 'master'){
        screen.innerHTML += ('<div class="master-comment"><div class="output-name"><p class="on">'
        + response.data[ln].name + '</p></div><div class="output-text"><p class="ot">'
        + response.data[ln].comment + '</p></div></div>');
    }else if(response.data[ln].name === ''){
        screen.innerHTML += ('<div class="comment"><div class="output-name"><p class="on">'
        + 'user' + '</p></div><div class="output-text"><p class="ot">'
        + response.data[ln].comment + '</p></div></div>');
    }else{
        screen.innerHTML += ('<div class="comment"><div class="output-name"><p class="on">'
        + response.data[ln].name + '</p></div><div class="output-text"><p class="ot">'
        + response.data[ln].comment + '</p></div></div>');
    }
});
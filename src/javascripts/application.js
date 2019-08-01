const infoDate = document.querySelector(".new-info");
//axios
import axios from 'axios';
axios.get('https://script.google.com/macros/s/AKfycbw3Cg2bLfJXtd5ck9KlTgzrKEDifG2MDopfcJozJujnE_8kH8o/exec')
  .then(function (response) {
    // handle success
    for(let i = 0; i < response.data.length; i++){
        infoDate.innerHTML += `<tr>
        <td class="date">${response.data[i].dateTime}</td>
        <td class="contents">${response.data[i].information}</td>
        </tr>`
    }
  })
  .catch(function (error) {
    // handle error
    infoDate.innerHTML += `<tr>
        <td class="date">
            <p>通信中...</p>
        </td>
        <td class="contents">
            <p>お待ち下さい...</p>
        </td>
    </tr>`
  })
  .finally(function () {
    // always executed
    infoDate.innerHTML += `<tr>
        <td class="date"></td>
        <td class="contents"></td>
        </tr>
        <tr>
        <td class="date"></td>
        <td class="contents"></td>
        </tr>
        <tr>
        <td class="date"></td>
        <td class="contents"></td>
        </tr>
        <tr>
        <td class="date"></td>
        <td class="contents"></td>
        </tr>`
  });
// ページ遷移機能
const hundle = document.querySelector(".hundle");
const view = document.querySelector(".main-container");

hundle.children[0].addEventListener("click",function num1(){
    view.children[0].style.display="block";
    view.children[1].style.display="none";
    view.children[2].style.display="none";
});
hundle.children[1].addEventListener("click",function num2(){
    view.children[0].style.display="none";
    view.children[1].style.display="block";
    view.children[2].style.display="none";
});
hundle.children[2].addEventListener("click",function num3(){
    view.children[0].style.display="none";
    view.children[1].style.display="none";
    view.children[2].style.display="block";
});
// contact機能
const screen = document.querySelector(".message-container");
const textInput = document.querySelector(".text-input");
const nameInput = document.querySelector(".name-input");
const submit = document.querySelector(".submit");
const modal = document.querySelector(".modal");
const modalOverLay = document.querySelector(".modal-overlay");
const dModal = document.querySelector(".x-mark");
// モーダル出現
screen.addEventListener("click", (evt)=>{
    modalOverLay.style.display="block";
    modal.style.display="block";
});

// モーダル消える
dModal.addEventListener("click", (evt)=>{
    modalOverLay.style.display="none";
    modal.style.display="none";
});
// チャット入力
// nameがmasterなら左側に出力それ以外なら右側に出力
// textが空なら表示されない
submit.addEventListener("click",(evt)=>{
    if(textInput.value !== ''){
        if(nameInput.value === 'master'){
            screen.innerHTML += ('<div class="master-comment"><div class="output-name"><p class="on">'
            + nameInput.value + '</p></div><div class="output-text"><p class="ot">'
            + textInput.value + '</p></div></div>');
            textInput.value = "";
            nameInput.value = "";
        }else if(nameInput.value === ''){
            screen.innerHTML += ('<div class="comment"><div class="output-name"><p class="on">'
            + 'user' + '</p></div><div class="output-text"><p class="ot">'
            + textInput.value + '</p></div></div>');
            textInput.value = "";
            nameInput.value = "";
        }else{
            screen.innerHTML += ('<div class="comment"><div class="output-name"><p class="on">'
            + nameInput.value + '</p></div><div class="output-text"><p class="ot">'
            + textInput.value + '</p></div></div>');
            textInput.value = "";
            nameInput.value = "";
        }
    modalOverLay.style.display="none";
    modal.style.display="none";
    }
});
// エンターキーでも発火
modal.addEventListener("keypress",(evt)=>{
    if(evt.key === 'Enter'){
        if(textInput.value !== ''){
            if(nameInput.value === 'master'){
                screen.innerHTML += ('<div class="master-comment"><div class="output-name"><p class="on">'
                + nameInput.value + '</p></div><div class="output-text"><p class="ot">'
                + textInput.value + '</p></div></div>');
                textInput.value = "";
                nameInput.value = "";
            }else if(nameInput.value === ''){
                screen.innerHTML += ('<div class="comment"><div class="output-name"><p class="on">'
                + 'user' + '</p></div><div class="output-text"><p class="ot">'
                + textInput.value + '</p></div></div>');
                textInput.value = "";
                nameInput.value = "";
            }else{
                screen.innerHTML += ('<div class="comment"><div class="output-name"><p class="on">'
                + nameInput.value + '</p></div><div class="output-text"><p class="ot">'
                + textInput.value + '</p></div></div>');
                textInput.value = "";
                nameInput.value = "";
            }
        modalOverLay.style.display="none";
        modal.style.display="none";
        }
    }
});




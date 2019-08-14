const infoDate = document.querySelector(".new-info");
// contact機能
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
const portFolioBoard = document.querySelector(".num2-container");
// (仮)お知らせスライドアウト
const infoBar = document.querySelector(".info-container");
const mainBar = document.querySelector(".num1-container");
const trigger = document.querySelector(".trigger");
let i = 0;

// topページお知らせスライド
trigger.addEventListener("click", (evt)=>{
    i++;
    if(i%2 !== 0){
        infoBar.style.width="0";
        mainBar.style.width="100%";
        mainBar.style.margin="0";
        trigger.style.transform="rotate(-45deg)";
    }else if (i%2 === 0){
        infoBar.style.width="40%";
        mainBar.style.width="50%";
        mainBar.style.margin="0 0 0 10%";
        trigger.style.transform="rotate(0deg)";
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


//axios
import axios from 'axios';
// info
axios.get('https://script.google.com/macros/s/AKfycbw3Cg2bLfJXtd5ck9KlTgzrKEDifG2MDopfcJozJujnE_8kH8o/exec')
  .then(function (response) {
    // handle success
    for(let i = 0; i < response.data.length; i++){
        let dateMonth = new Date(response.data[i].dateTime).getMonth();
        let dateYear = new Date(response.data[i].dateTime).getFullYear();
        let dataDate = new Date(response.data[i].dateTime).getDate();
        infoDate.innerHTML += `<tr>
        <td class="date">${dateYear}年${dateMonth+1}月${dataDate}日</td>
        <td class="contents">${response.data[i].information}</td>
        </tr>`
    }
  })
  .catch(function (error) {
    // handle error
  })
  .finally(function () {
    // always executed
  });

// portfolio追加
axios.get('https://script.google.com/macros/s/AKfycbxosPycRtZN20PgsywESuU6D9iITnyY1r4dEtfHU8jUBuEXwLc/exec')
  .then(function (response) {
    // handle success
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
  })
  .catch(function (error) {
    // handle error
  })
  .finally(function () {
    // always executed
  });

// contact
axios.get('https://script.google.com/macros/s/AKfycbxBjok29e-9FOoW-sAAIw9ZV2Sh8vc6-L0nY6oEn5uEdXKenwZk/exec')
.then(function (response) {
    // handle success
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
})
.catch(function (error) {
    // handle error
})
.finally(function () {
// always executed
});



// チャット入力
// nameがmasterなら左側に出力それ以外なら右側に出力
// textが空なら表示されない
submit.addEventListener("click",async (evt)=>{
    if(textInput.value !== ''){
        await axios.post('https://script.google.com/macros/s/AKfycbxBjok29e-9FOoW-sAAIw9ZV2Sh8vc6-L0nY6oEn5uEdXKenwZk/exec', {
          name: nameInput.value,
          comment: textInput.value
        }, {
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
          .then(response => {
          }).catch(error => {
          });
        textInput.value = "";
        nameInput.value = "";
        await axios.get('https://script.google.com/macros/s/AKfycbxBjok29e-9FOoW-sAAIw9ZV2Sh8vc6-L0nY6oEn5uEdXKenwZk/exec')
              .then(function (response) {
                　　// handle success
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
              })
        }
});
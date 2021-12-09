let load = document.querySelector(".loading");
setInterval(function() {
    load.style.display="none";}, 1500); 


let form = document.querySelector(".form");
let input = document.querySelectorAll("input");

function getInput(){
    let data = {};
    data.roomName = input[0].value;
    data.chatName = input[1].value;
    let info = JSON.stringify(data);
    localStorage.setItem('user', info);
}

function processData(e){
    e.preventDefault();
    getInput();
    window.location.href = window.location.href.replace("index.html", "/pages/chatroom.html");
}

form.addEventListener('submit', processData);




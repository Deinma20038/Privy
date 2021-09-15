let form = document.getElementById("form");
let text = document.getElementById("text-field");
let textArea = document.querySelector(".main-container--left__text-area") ;
let p = document.querySelector("#angela");
let trash = document.querySelector("#delete");
let fourth = document.querySelector(".text-area__fourth");
let second = document.querySelector(".text-area__second");
let users= JSON.parse(window.localStorage.getItem("user"));
let roomName = document.getElementById("roomTitle");
let chatName = document.getElementById("chatTitle");
let emTray = document.querySelector(".emoji-tray");
let textArea2 = document.querySelector(".text");    
let typing = document.querySelector("#typing");  
let messages = document.querySelector("#messages");
let deleteButton = document.querySelectorAll("#delete");
// _____________________________________________________________________________________________________________


// Submit Function
form.addEventListener("click", (e) => {
    e.preventDefault();
    let newDiv = document.createElement("div");
    newDiv.innerText = text.value;
    if(text.value !== ""){
   
    newDiv.classList.add("text-area__new","go","disappear");
    messages.appendChild(newDiv);
    // newDiv.appendChild(deleteButton);
    text.value="";
    p.style.visibility = "hidden";
    
    }

    timing();
    deleteChat();
});
// Submit Function

// _____________________________________________________________________________________________________________

// For the "Angela is typing"
function isTyping(){
    p.style.visibility = "visible";
}
// For the "Angela is typing"

// ____________________________________________________________________________________________________________

// For the delete button on the original messages
function commot(){
fourth.remove();
}

function go(){
    second.remove();
    }
// For the delete button on the original messages

// ____________________________________________________________________________________________________________

// Replace the room name and chat name
roomName.innerText= users.roomName;
typing.innerText = users.chatName;
// Replace the room name and chat name

// ____________________________________________________________________________________________________________

// To make the Chat name show the first letters of the words
let display = users.roomName.match(/\b(\w)/g).join('');
chatName.innerText=display;
// To make the Chat name show the first letters of the words

// ____________________________________________________________________________________________________________

// Ignore
function tray(){
    emTray.style.visibility="visible";
}

function goTray(){
    if(emTray.style.visibility=="visible"){
        emTray.style.visibility ="hidden";
        }
}
// Ignore

// ____________________________________________________________________________________________________________

// Hide Button
let hide  = document.getElementById("hide");
let deletes = document.getElementById("delete-chat");

function hideChat(){
    let disappear= document.querySelectorAll(".disappear");
    if(hide.checked == true){
        disappear.forEach((e) => {
            e.style.visibility = "hidden";
         });
}
else{
    disappear.forEach((e) => {
        e.style.visibility = "visible";
     });
}
}
// Hide Button

//Delete Button
function deleteChat(){
    let goAway = document.querySelectorAll(".go");

    if(deletes.checked == true){
         goAway.forEach((e) => {
                e.remove();
            });
         
       
    }
}
// Delete Button

// ____________________________________________________________________________________________________________

// Increase & Decrease delete number
let seconds = document.querySelector("#timed-seconds");
let plus = document.querySelector(".timed-delete--buttons--increase");
let minus = document.querySelector(".timed-delete--buttons--decrease");
let timedDelete = document.querySelector(".timed-delete");

function increase() {
   seconds.innerHTML++;
}

function decrease() {
    if(seconds.innerHTML>0){
    seconds.innerHTML--;
}else{
    seconds.innerHTML= seconds.innerHTML;
}
    
 }
// Increase & Decrease delete number

// ____________________________________________________________________________________________________________


// Function to delete after a certain time frame
function timing(){
    if(timedDelete.checked == true && seconds.innerHTML>0){
        let goAway = document.querySelectorAll(".go");
        setTimeout(e => {
            goAway.forEach(e => {
                e.remove();
            });
        },seconds.innerHTML * 1000);
    }
}
// Function to delete after a certain time frame


// ____________________________________________________________________________________________________________

// let d =new Date();
// let n =
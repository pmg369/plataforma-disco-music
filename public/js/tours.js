let userName = prompt("What is your name?").toUpperCase();
const span = document.querySelector("#welcome");
const i = document.querySelector("i");

while (userName.length < 3) {
    userName = prompt("The name must have at least 3 letters, tell us what is really your name?").toUpperCase();
};

i.setAttribute("class", "fa-solid fa-ticket fa-rotate-90 fa-xl");
span.textContent = (`Hello, ${userName}.`);
span.classList.add('md:text-xl');

let userAge = Number(prompt("How old are you?"));
let buttons = document.querySelectorAll ("button");

if(userAge < 18) {
    swal.fire("Sorry!!!", "Being a minor, you cannot buy tickets.", "info");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].setAttribute("disabled");
        buttons[i].style.backgroundColor = "gray";
        buttons[i].style.cursor = "default";
    };
};

let tickets = {
    "Los Angeles": 3,
    "San Francisco": 2,
    Phoenix: 35,
    Tucson: 45,
    "Sal Lake City": 14,
    Denver: 9,
};

function getTickets(city){
    if(tickets[city] > 0) {
        tickets[city]--;
        swal.fire("Congratulations!!!", `You already have your ticket for ${city}.`, "success");
    }else{
        swal.fire("Sorry ", "There are no more tickets!", "error");
        disableSoldOutButtons();
    }
};

function disableSoldOutButtons () {
        for(let city in tickets){
            if(tickets[city] == 0){
                let buttons = document.getElementById("buy " + city);
                buttons.textContent = "Sould Out!!!";
                buttons.style.background = ("gray");
                buttons.disabled = true;
            };
        };
};







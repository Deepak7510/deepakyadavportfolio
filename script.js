// Auto type text js code 
var typed = new Typed('#element', {
    strings: ['Web Designer','Full Stack Developer'],
    typeSpeed: 90,
});


// Menu bar

const menu = document.querySelector(".menu");
const bar = document.querySelector("#bar");
const Xbar = document.querySelector("#Xbar");
const navbar = document.querySelector(".nav-item");
let i = 0;
menu.addEventListener("click", function () {
    if (i == 0) {
        bar.style.display = "none";
        Xbar.style.display = "block"
        navbar.style.right = "0%"
        i = 1;
    }
    else if (i == 1) {
        Xbar.style.display = "none"
        bar.style.display = "block";
        navbar.style.right = "-100%"
        i = 0;
    }
});

navbar.addEventListener("click", function (e) {
    if (e.target.classList.contains("item")) {
        navbar.style.right = "-100%"
        Xbar.style.display = "none"
        bar.style.display = "block";
        i = 0;
    }
})

const bigCircle = document.querySelector(".big-circle");
document.addEventListener("mousemove", function (e) {
    bigCircle.style.left = `${e.clientX}px`;
    bigCircle.style.top = `${e.clientY}px`;
})

// const x=document.querySelectorAll("h1,h2,h4,label");
// for(let i of x){
//     i.addEventListener("mouseover",function(){
//         i.style.transition="0.5s";
//         bigCircle.style.height="200px";
//         bigCircle.style.width="200px";
//     })
//     i.addEventListener("mouseleave",function(){
//         bigCircle.style.height="0px";
//         bigCircle.style.width="0px";
//     })
// }


function Username() {
    const username = document.querySelector("#name");
    if (username.value.match(/^[a-zA-Z\s]+$/)) {
        username.style.border = "1px solid black";
        return true;
    }
    else {
        username.style.border = "3px solid rgb(238,78,2)";
        return false;
    }
}

function Phone() {
    const number = document.querySelector("#phone");
    if (number.value.length < 13 && number.value.match(/^[0-9]+$/)) {
        return true;
    }
    else {
        number.style.border = "3px solid rgb(238,78,2)";
        return false;
    }
}
function Email() {
    const email = document.querySelector("#email");
    if (email.value.length < 57) {
        return true;
    }
    else {
        email.style.border = "3px solid rgb(238,78,2)";
        return false;
    }
}
function Message() {
    const message = document.querySelector("#message");
    if (message.value.length < 500) {
        return true;
    }
    else {
        message.style.border = "3px solid rgb(238,78,2)";
        return false;
    }
}

const form = document.querySelector(".form");
form.addEventListener("submit", function (e) {
    let status = true;
    if (Username() === false) {
        e.preventDefault();
        status = false;
    }
    if (Phone() === false) {
        e.preventDefault();
        status = false;
    }
    if (Email() === false) {
        e.preventDefault();
        status = false;
    }
    if (Message() === false) {
        e.preventDefault();
        status = false;
    }
    if (status == true) {
        e.preventDefault();
        emailjs.sendForm('service_p0ojtgi', 'template_8hhup7k', this)
            .then(function () {
                alert('Email sent successfully!');
                window.location.reload();
            }, function (error) {
                alert('Failed to send email: ' + JSON.stringify(error));
            });
    }
})





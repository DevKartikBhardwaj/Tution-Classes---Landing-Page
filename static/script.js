//cards scroller

let cards = document.getElementsByClassName("card");

Array.from(cards).forEach((element) => {
    let sum = 0;
    function func() {
        sum += 276;
        return sum;
    }
    setInterval(() => {
        func();
        if (sum >= 1933) {
            sum = 0;
            element.style.transform = `translate(-${sum}px)`;

        }
        else {
            element.style.transform = `translate(-${sum}px)`;
        }
    }, 3000);

})

//generating random mobile number
let a = 9000000000;
let b = 9999999999;
let random = a + (b - a) * Math.random();
let randompara = document.getElementById("randompara");
randompara.innerHTML = `<span
style="font-weight: bold; font-size :1.5em;">MOb:</span>+91${Math.ceil(random)}`;


//hamburger

function ham() {
    let navList = document.getElementById('nav-list');
    let box1 = document.getElementById('box-1');
    let box2 = document.getElementById('box-2');
    let box3 = document.getElementById('box-3');

    if (navList.classList == "nav-none") {
        navList.classList.remove('nav-none');
        box1.style = "transform:rotate(45deg); margin-bottom:-3px;"
        box2.style = "transform:rotate(-45deg); "
        box3.style = "display:none; "
    }
    else {
        navList.classList.add('nav-none');
        box1.style = "transform:rotate(0deg); margin-bottom:0.4em;"
        box2.style = "transform:rotate(0deg); "
        box3.style = "display:block; "
    }
}


// Variables

let choices = document.querySelectorAll('.choice');
let body = document.body;
let doc = document.documentElement.style;



let addremove = () => {
    for (let i = 0; i < clas.length; i++) {
        clas[i].classList.remove('back-color')
    }
}


// Actions

function backcolor1 () {
    doc.cssText = "--main: #77937D; --secondry: #597478";
    // clas.classList.remove('back-color');
    let clas = document.querySelectorAll('.back-color')
    let addremove = () => {
        for (let i = 0; i < clas.length; i++) {
            clas[i].classList.remove('back-color')
        }
    }
    addremove()
    this.classList.add('back-color');
}

function backcolor2 () {
    doc.cssText = "--main: #2d92a7; --secondry: #267888";
    // clas.classList.remove('back-color');
    let clas = document.querySelectorAll('.back-color')
    let addremove = () => {
        for (let i = 0; i < clas.length; i++) {
            clas[i].classList.remove('back-color')
        }
    }
    addremove()
    this.classList.add('back-color');
}

function backcolor3 () {
    doc.cssText = "--main: #FFA384; --secondry: #d68c74";
    // clas.classList.remove('back-color');
    let clas = document.querySelectorAll('.back-color')
    let addremove = () => {
        for (let i = 0; i < clas.length; i++) {
            clas[i].classList.remove('back-color')
        }
    }
    addremove()
    this.classList.add('back-color');
}

choices[0].onclick = backcolor1;
choices[1].onclick = backcolor2;
choices[2].onclick = backcolor3;



// --main1: #441D4b;
// --secondry2: #932F8C;
// --main2: #441D4b;
// --secondry2: #932F8C;
// --main3: #BB8509;
// --secondry3: #805c0a;
"use strict";
// Create a "close" button and append it to each list item
let myNodelist = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodelist.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}
// Click on a close button to hide the current list item
let closeBtns = document.getElementsByClassName("close");
for (i = 0; i < closeBtns.length; i++) {
    let clsBtn = closeBtns[i];
    clsBtn.addEventListener('click', () => {
        let listItem = clsBtn.parentElement;
        if (!!listItem) {
            listItem.style.display = "none";
        }
    });
}
// Add a "checked" symbol when clicking on a list item
const list = document.querySelector('ul');
if (list) {
    list.addEventListener('click', function (ev) {
        let target = ev.target;
        if (target) {
            if (target.tagName === 'LI') {
                target.classList.toggle('checked');
            }
        }
    }, false);
}
// Create a new list item when clicking on the "Add" button
function newElement() {
    let li = document.createElement("li");
    const input = document.getElementById("myInput");
    if (!input)
        return;
    const inputValue = input.value;
    let textNode = document.createTextNode(inputValue);
    li.appendChild(textNode);
    if (inputValue === '') {
        alert("You must write something!");
    }
    else {
        const ul = document.getElementById("myUL");
        if (ul) {
            ul.appendChild(li);
        }
    }
    input.value = "";
    let span1 = document.createElement("SPAN");
    let txt1 = document.createTextNode("\u00D7");
    span1.className = "close";
    span1.appendChild(txt1);
    li.appendChild(span1);
    span1.addEventListener('click', () => {
        let listItem = span1.parentElement;
        if (!!listItem) {
            listItem.style.display = "none";
        }
    });
    console.log("it works!!");
}

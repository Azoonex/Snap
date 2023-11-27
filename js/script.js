"use strict";
// SELECTIONS...
const header = document.querySelector("header");
const numberInp = document.querySelector(".number-input");
const sidebar = document.querySelector(".sidebar");
const sidebarList = document.querySelector(".sidebar-list");
const sidebarDownloadList = document.querySelector(".sidebar-download-list");
const barsBtn = document.querySelector(".bars-icon");
const timesBtn = document.querySelector(".times-icon");
const sidebarDownloadText = document.querySelector(".snap-sidebar-download");
const sidebarIcon = document.querySelectorAll(".sidebar-download-section-icon");
const chevronDown = document.querySelector(".fa-chevron-down");
const chevronUp = document.querySelector(".fa-chevron-up");
// STATE VARIABLES...
let clicked = false;
// FUNCTIONS...
const sidebarHandler = function (marginR, marginT, barsDis, timesDis) {
  sidebar.style.marginRight = marginR;
  sidebar.style.marginTop = marginT;
  barsBtn.style.display = barsDis;
  timesBtn.style.display = timesDis;
};

const sidebarListHandler = function (marginT, sidebarD, chevronDD, chevronUD) {
  console.log("working");
  sidebarDownloadList.style.marginTop = marginT;
  sidebarDownloadList.style.display = sidebarD;
  chevronDown.style.display = chevronDD;
  chevronUp.style.display = chevronUD;
};
//EVENT HANDLERS...
barsBtn.addEventListener("click", function () {
  sidebarHandler("0", "0", "none", "block");
  sidebar.classList.toggle("overlay");
  sidebarDownloadList.classList.toggle("overlay");
  header.classList.toggle("overlay");
});

timesBtn.addEventListener("click", function () {
  sidebarHandler("-770px", "-395px", "block", "none");
});

sidebarDownloadText.addEventListener("click", function () {
  if (clicked) {
    clicked = false;
    return sidebarListHandler("-218px", "none", "block", "none");
  }
  sidebarListHandler("0", "flex", "none", "block");
  clicked = true;
});
// 1. Selecting Elements:
// document.getElementById('id'): Gets an element by its ID.
// document.querySelector('selector'): Gets the first element that matches the provided CSS selector.
// document.querySelectorAll('selector'): Gets all elements that match the provided CSS selector.
let div = document.getElementById("myDiv");
let firstButton = document.querySelector("button");
let allButtons = document.querySelectorAll("button");
///////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Changing Text Content:
// element.textContent: Gets or sets the text content of an element.
div.textContent = "New text content!";
///////////////////////////////////////////////////////////////////////////////////////////////////////

// 3. Changing HTML Content:
// element.innerHTML: Gets or sets the HTML content inside an element.
div.innerHTML = `<strong>This is bold text.</strong>`;
///////////////////////////////////////////////////////////////////////////////////////////////////////

// 4. Manipulating Attributes:
// element.getAttribute('attribute'): Gets the value of an attribute.
// element.setAttribute('attribute', 'value'): Sets the value of an attribute
let link = document.querySelector("a");
let hrefValue = link.getAttribute("href");
link.setAttribute("href", "https://www.example.com");
///////////////////////////////////////////////////////////////////////////////////////////////////////

// 5. Adding and Removing Classes:
// element.classList.add('class'): Adds a class to an element.
// element.classList.remove('class'): Removes a class from an element.
// element.classList.toggle('class'): Toggles a class (adds it if it doesn't exist, removes it if it does).
div.classList.add("highlight");
div.classList.remove("old-highlight");
div.classList.toggle("toggle-class");
///////////////////////////////////////////////////////////////////////////////////////////////////////

// 6. Creating and Adding New Elements:
// document.createElement('elementName'): Creates a new DOM element.
let newPara = document.createElement("p");
newPara.textContent = "This is a new paragraph.";
div.appendChild(newPara);
// Adds the new paragraph as a child of the div.
///////////////////////////////////////////////////////////////////////////////////////////////////////

// 7. Removing Elements:
// element.removeChild(childElement): Removes a child element from the specified element.
//  element.remove(): Removes the element directly.
div.removeChild(newPara);
// or
newPara.remove();
////////////////////////////////////////////////////////////////////////

// 8. Manipulating Attributes:
// Use element.addEventListener('event', function) to respond to user interactions
firstButton.addEventListener("click", function () {
  alert("Button was clicked!");
});
// @js-challenges join us on telegram...

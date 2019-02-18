"use strict";
const imageAddress = "image.jpg";
let container_height = document.querySelector("img").naturalHeight;
let container_width = document.querySelector("img").naturalWidth;

const numOfXPieces = 3;
const numOfYPieces = 3;

let container = document.querySelector('#container');
 

window.addEventListener("DOMContentLoaded", loadTheImage);

function loadTheImage() {
  document.querySelector("img").src = imageAddress;
  document.querySelector("img").onload = prepareContainer;
}

function prepareContainer() {
  console.log('prepareContainer');
  container.style.gridTemplateColumns = `repeat(${numOfXPieces}, 1fr)`;
  container.style.width = `${container_width}px`;
  for (let y = 0; y < numOfYPieces; y++) {
    for (let x = 0; x < numOfXPieces; x++) {
      
      let pieceContainer = document.createElement("div");

      pieceContainer.style.height = container_height / numOfYPieces + "px";

      pieceContainer.textContent = `${x}${y}`;
      pieceContainer.classList.add("dropzone");
      container.appendChild(pieceContainer);
    }
  }

  builtPuzzles();
}

function builtPuzzles(){
  console.log('builtPuzzles');
  for (let y = 0; y < numOfYPieces; y++) {
    for (let x = 0; x < numOfXPieces; x++) {

      let puzzle = document.createElement("div");
      
      puzzle.style.height = container_height / numOfYPieces + "px";
      puzzle.style.width = container_width / numOfXPieces + "px";

      puzzle.textContent = `${x}${y}`;
      puzzle.classList.add("piece");
      puzzle.setAttribute('draggable', true);
      // piece.style.backgroundPosition =`top ${y}*${newHeight}px left ${x}*${newWidth}px`;
      document.querySelector("body").appendChild(puzzle);
    }
  }

};

let dragged;

/* events fired on the draggable target */
document.addEventListener("drag", function(event) {});

document.addEventListener("dragstart", function(event) {
  // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent
  event.target.style.opacity = 0.5;
});

document.addEventListener("dragend", function(event) {
  // reset the transparency
  event.target.style.opacity = "";
});

/* events fired on the drop targets */
document.addEventListener("dragover", function(event) {
  // prevent default to allow drop
  event.preventDefault();
});

document.addEventListener("drop", function(event) {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  console.log("DROP", event.target.className);
  // move dragged elem to the selected drop target
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
    dragged.parentNode.removeChild(dragged);
    event.target.appendChild(dragged);
    dragged.style.left = event.target.style.left;
    dragged.style.top = event.target.style.top;
  } else if (event.target.className == "theBody") {
    // park the dragged elem somewhere on the body
    dragged.style.left = event.pageX + "px";
    dragged.style.top = event.pageY + "px";
  }
});

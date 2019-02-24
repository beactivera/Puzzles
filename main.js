const imageFile = "hedgehog.jpg"
const numOfXPieces = 3;
const numOfYPieces = 3;
const container_width = 500;
const container_height = 400;

let container = document.getElementById('container');
let imgContainer = document.querySelector('img');
let btn = document.getElementById('start-game');
 

window.addEventListener("DOMContentLoaded", loadImage);

function loadImage(){
    imgContainer.src = imageFile;
    imgContainer.style.width = "500px";
    imgContainer.style.height = "400px";
}

btn.addEventListener('click', prepareContainer);


function prepareContainer() {
  console.log('prepareContainer');

  container.style.gridTemplateColumns = `repeat(${numOfXPieces}, 1fr)`;
  container.style.width = `${container_width}px`;
  for (let y = 0; y < numOfYPieces; y++) {
    for (let x = 0; x < numOfXPieces; x++) {
      
      let pieceContainer = document.createElement("div");

      pieceContainer.style.height = container_height / numOfYPieces + "px";

      // pieceContainer.textContent = `${x}${y}`;
      pieceContainer.classList.add("dropzone");
      container.appendChild(pieceContainer);
    }
  }
};

// function builtPuzzles(){
//   console.log('builtPuzzles');
//   for (let y = 0; y < numOfYPieces; y++) {
//     for (let x = 0; x < numOfXPieces; x++) {

//       let puzzle = document.createElement("div");
      
//       let puzzleHeight = puzzle.style.height = container_height / numOfYPieces + "px";
//       let puzzleWidth = puzzle.style.width = container_width / numOfXPieces + "px";

//       let top = y * puzzleHeight;
//       let left = x *puzzleWidth;

//       // puzzle.textContent = `${x}${y}`;
//       puzzle.classList.add("piece");
//       puzzle.setAttribute('draggable', true);
//       puzzle.style.backgroundImage = `url(image.jpg)`;
//       piece.style.backgroundPosition =`top ${y}*${newHeight}px left ${x}*${newWidth}px`;
//       document.querySelector("body").appendChild(puzzle);
//     }
//   }
//   // giving the random location of each puzzle in the body
//   document.querySelectorAll("piece").forEach(element => {
//     element.style.left = `${Math.random()*500 + 250}px`;
// });

// let dragged;

// /* events fired on the draggable target */
// document.addEventListener("drag", function(event) {});

// document.addEventListener("dragstart", function(event) {
//   // store a ref. on the dragged elem
//   dragged = event.target;
//   // make it half transparent
//   event.target.style.opacity = 0.5;
// });

// document.addEventListener("dragend", function(event) {
//   // reset the transparency
//   event.target.style.opacity = "";
// });

// /* events fired on the drop targets */
// document.addEventListener("dragover", function(event) {
//   // prevent default to allow drop
//   event.preventDefault();
// });

// document.addEventListener("drop", function(event) {
//   // prevent default action (open as link for some elements)
//   event.preventDefault();
//   console.log("DROP", event.target.className);
//   // move dragged elem to the selected drop target
//   if (event.target.className == "dropzone") {
//     event.target.style.background = "";
//     dragged.parentNode.removeChild(dragged);
//     event.target.appendChild(dragged);
//     dragged.style.left = event.target.style.left;
//     dragged.style.top = event.target.style.top;
//   } else if (event.target.className == "theBody") {
//     // park the dragged elem somewhere on the body
//     dragged.style.left = event.pageX + "px";
//     dragged.style.top = event.pageY + "px";
//   }
// })

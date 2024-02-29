let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newGameBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let turnO = true; //player O or player x
let winpatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {

    if (turnO) {
      box.innerText = "O";
      box.style.color = 'blue';
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
      box.style.color = 'DarkGray';
    }
    box.disabled = true;
    checkWinner();
  });
});


const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const ShowWinner = (winner) => {
  msg.innerText = `Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();


};
const checkWinner = () => {
  let draw = true;
  for (let pattern of winpatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        ShowWinner(pos1Val);
        return;
      }
    }
  }

  for (let box of boxes) {
    if (box.innerText === "") {
      draw = false;
      break;
    }
  }

  if (draw) {
    msg.innerText = "It's a draw!";
    msgContainer.classList.remove("hide");
    disableBoxes();
  }
};

newGameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
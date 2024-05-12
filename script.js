// DOM for hide and show rule
const btnRules = document.querySelector(".rules-btn");
const btnClose = document.querySelector(".close-btn");
const modalRules = document.querySelector(".modal");

// Show/Hide Rules
btnRules.addEventListener("click", () => {
  modalRules.classList.toggle("show-modal");
});

btnClose.addEventListener("click", () => {
  modalRules.classList.toggle("show-modal");
});


// const choiceButtons = document.querySelector(".choice-btn.paper");
const gameDiv = document.querySelector(".game");
const resultsDiv = document.querySelector(".results");

const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');
const rockBtn = document.getElementById('rock-btn');

const youPickedImg = document.querySelector("#you-pick");

const housePickedImg = document.querySelector("#house-pick");

const resultWinner = document.querySelector(".results__winner");

const resultText = document.querySelector(".results__text");

const playAgainBtn = document.querySelector(".play-again");

const resultDivs = document.querySelector(".results__result");

const scoreNumber = document.querySelector(".score__number");

// hidden function
function hidden() {
  gameDiv.classList.toggle("hidden");
  resultsDiv.classList.toggle("hidden");
}

// chose img for house picked
const CHOSE = [`
  <div class="choice paper">
  <img src="./images/icon-paper.svg" alt="paper" />
  </div>`, `
  <div class="choice scissors">
  <img src="./images/icon-scissors.svg" alt="scissors" />
  </div>`,`
  <div class="choice rock">
  <img src="./images/icon-rock.svg" alt="rock" />
  </div>`
]

function housePicked() {
  const randomChose = Math.floor(Math.random() * CHOSE.length)
  setTimeout(()=> {
    housePickedImg.innerHTML = CHOSE[randomChose]
  }, 500)
}

paperBtn.onclick = function () {
  hidden()
  youPickedImg.innerHTML = CHOSE[0]
  // housePicked()
  const randomChose = Math.floor(Math.random() * CHOSE.length)
  setTimeout(()=> {
    housePickedImg.innerHTML = CHOSE[randomChose]
  }, 500)
  
  setTimeout(() => {
    if(CHOSE[randomChose] === CHOSE[1]) {
      resultText.textContent = "you lose";
      keepScore(-1)
    } else if(CHOSE[randomChose] ===CHOSE[2]) {
      resultText.textContent = "you win";
      keepScore(1)
    } else if(CHOSE[randomChose] === CHOSE[0]) {
      resultText.textContent = "draw";
      keepScore(0);
    }
    resultWinner.classList.toggle("hidden");
    resultsDiv.classList.toggle("show-winner");
  }, 1000);
}

scissorsBtn.onclick = function () {
  hidden()
  youPickedImg.innerHTML = CHOSE[1]
  // housePicked()
  const randomChose = Math.floor(Math.random() * CHOSE.length)
  setTimeout(()=> {
    housePickedImg.innerHTML = CHOSE[randomChose]
  }, 500)
  
  setTimeout(() => {
    if(CHOSE[randomChose] === CHOSE[1]) {
      resultText.textContent = "draw";
      keepScore(0)
    } else if(CHOSE[randomChose] ===CHOSE[2]) {
      resultText.textContent = "you lose";
      keepScore(-1);
    } else if(CHOSE[randomChose] === CHOSE[0]) {
      resultText.textContent = "you win";
      keepScore(1);
    }
    resultWinner.classList.toggle("hidden");
    resultsDiv.classList.toggle("show-winner");
  }, 1000);
}

rockBtn.onclick = function () {
  hidden()
  youPickedImg.innerHTML = CHOSE[2]
  // housePicked()
  const randomChose = Math.floor(Math.random() * CHOSE.length)
  setTimeout(()=> {
    housePickedImg.innerHTML = CHOSE[randomChose]
  }, 500)
  
  setTimeout(() => {
    if(CHOSE[randomChose] === CHOSE[1]) {
      resultText.textContent = "you win";
      keepScore(1)
    } else if(CHOSE[randomChose] ===CHOSE[2]) {
      resultText.textContent = "draw";

    } else if(CHOSE[randomChose] === CHOSE[0]) {
      resultText.textContent = "you lose";
      keepScore(-1)
    }
    resultWinner.classList.toggle("hidden");
    resultsDiv.classList.toggle("show-winner");
  }, 1000);
}

let score = 0;
const keepScore = (point) => {
  score += point;
  scoreNumber.textContent = score;
}


// play again
playAgainBtn.addEventListener("click", ()=> {
  setTimeout(()=>{
    // window.location.reload();
    resultWinner.classList.toggle("hidden");
    resultsDiv.classList.toggle("show-winner");
    resultsDiv.classList.toggle("hidden");
    gameDiv.classList.toggle("hidden");
    housePickedImg.innerHTML = "";
  }, 300)
})

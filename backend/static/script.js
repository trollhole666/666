
const cockroach = document.getElementById("cockroach");
const container = document.getElementById("game-container");
const scoreElement = document.getElementById("score");
let score = 0;

function moveCockroach() {
  const maxX = container.clientWidth - cockroach.clientWidth;
  const maxY = container.clientHeight - cockroach.clientHeight;
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;
  cockroach.style.left = x + "px";
  cockroach.style.top = y + "px";
}

cockroach.addEventListener("click", () => {
  score++;
  scoreElement.textContent = score;
  moveCockroach();
});

moveCockroach();

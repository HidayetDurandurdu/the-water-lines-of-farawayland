const boardElement = document.querySelector(".board");
const startScreen = document.querySelector(".screen-start");
const gameScreen = document.querySelector(".screen-game");
const startButton = document.querySelector(".start-button");
const continueButton = document.querySelector(".continue-button");
const rulesButton = document.querySelector(".rules-button");
const clearRankingButton = document.querySelector(".clear-ranking-button");
const saveButton = document.querySelector(".save-button");
const menuButton = document.querySelector(".menu-button");
const rulesPanel = document.querySelector(".rules-panel");
const menuMessage = document.querySelector(".menu-message");
const statusMessage = document.querySelector(".status-message");
const gameOverPanel = document.querySelector(".game-over-panel");
const gameOverText = document.querySelector(".game-over-text");
const leaderboardList = document.querySelector(".leaderboard-list");
const playerNameInput = document.querySelector(".player-name-input");
const playerNameValue = document.querySelector(".player-name-value");
const difficultyValue = document.querySelector(".difficulty-value");
const timeValue = document.querySelector(".time-value");

const saveKey = "farawayland-save";
const rankingKey = "farawayland-ranking";

const levels = {
  easy: [
    [
      { type: "source", rotation: 1, role: "source" },
      { type: "line", rotation: 1, role: "pipe" },
      { type: "line", rotation: 1, role: "pipe" },
      { type: "line", rotation: 1, role: "pipe" },
      { type: "corner", rotation: 2, role: "pipe" }
    ],
    [
      { type: "corner", rotation: 1, role: "pipe" },
      { type: "line", rotation: 1, role: "pipe" },
      { type: "corner", rotation: 2, role: "pipe" },
      { type: "corner", rotation: 1, role: "pipe" },
      { type: "corner", rotation: 3, role: "pipe" }
    ],
    [
      { type: "corner", rotation: 0, role: "pipe" },
      { type: "corner", rotation: 2, role: "pipe" },
      { type: "corner", rotation: 0, role: "pipe" },
      { type: "corner", rotation: 3, role: "pipe" },
      { type: "consumer", rotation: 2, role: "consumer" }
    ],
    [
      { type: "consumer", rotation: 2, role: "consumer" },
      { type: "line", rotation: 0, role: "pipe" },
      { type: "consumer", rotation: 1, role: "consumer" },
      { type: "tee", rotation: 1, role: "pipe" },
      { type: "tee", rotation: 2, role: "pipe" }
    ],
    [
      { type: "corner", rotation: 0, role: "pipe" },
      { type: "tee", rotation: 3, role: "pipe" },
      { type: "line", rotation: 1, role: "pipe" },
      { type: "corner", rotation: 3, role: "pipe" },
      { type: "consumer", rotation: 0, role: "consumer" }
    ]
  ],
  medium: [
    [
      { type: "source", rotation: 1, role: "source" },
      { type: "corner", rotation: 2, role: "pipe" },
      { type: "corner", rotation: 1, role: "pipe" },
      { type: "line", rotation: 1, role: "pipe" },
      { type: "tee", rotation: 1, role: "pipe" },
      { type: "consumer", rotation: 3, role: "consumer" }
    ],
    [
      { type: "corner", rotation: 1, role: "pipe" },
      { type: "corner", rotation: 3, role: "pipe" },
      { type: "corner", rotation: 0, role: "pipe" },
      { type: "consumer", rotation: 3, role: "consumer" },
      { type: "tee", rotation: 0, role: "pipe" },
      { type: "corner", rotation: 2, role: "pipe" }
    ],
    [
      { type: "line", rotation: 0, role: "pipe" },
      { type: "consumer", rotation: 1, role: "consumer" },
      { type: "tee", rotation: 1, role: "pipe" },
      { type: "corner", rotation: 2, role: "pipe" },
      { type: "consumer", rotation: 0, role: "consumer" },
      { type: "line", rotation: 0, role: "pipe" }
    ],
    [
      { type: "corner", rotation: 0, role: "pipe" },
      { type: "corner", rotation: 2, role: "pipe" },
      { type: "line", rotation: 0, role: "pipe" },
      { type: "corner", rotation: 0, role: "pipe" },
      { type: "line", rotation: 1, role: "pipe" },
      { type: "tee", rotation: 2, role: "pipe" }
    ],
    [
      { type: "consumer", rotation: 2, role: "consumer" },
      { type: "corner", rotation: 0, role: "pipe" },
      { type: "corner", rotation: 3, role: "pipe" },
      { type: "corner", rotation: 1, role: "pipe" },
      { type: "consumer", rotation: 3, role: "consumer" },
      { type: "line", rotation: 0, role: "pipe" }
    ],
    [
      { type: "corner", rotation: 0, role: "pipe" },
      { type: "line", rotation: 1, role: "pipe" },
      { type: "line", rotation: 1, role: "pipe" },
      { type: "tee", rotation: 3, role: "pipe" },
      { type: "line", rotation: 1, role: "pipe" },
      { type: "corner", rotation: 3, role: "pipe" }
    ]
  ],
  hard: [
    [
      { type: "source", rotation: 1, role: "source" },
      { type: "line", rotation: 1, role: "pipe" },
      { type: "corner", rotation: 2, role: "pipe" },
      { type: "consumer", rotation: 1, role: "consumer" },
      { type: "line", rotation: 1, role: "pipe" },
      { type: "line", rotation: 1, role: "pipe" },
      { type: "corner", rotation: 2, role: "pipe" }
    ],
    [
      { type: "consumer", rotation: 2, role: "consumer" },
      { type: "corner", rotation: 1, role: "pipe" },
      { type: "corner", rotation: 3, role: "pipe" },
      { type: "corner", rotation: 1, role: "pipe" },
      { type: "line", rotation: 1, role: "pipe" },
      { type: "line", rotation: 1, role: "pipe" },
      { type: "tee", rotation: 2, role: "pipe" }
    ],
    [
      { type: "line", rotation: 0, role: "pipe" },
      { type: "corner", rotation: 0, role: "pipe" },
      { type: "corner", rotation: 2, role: "pipe" },
      { type: "line", rotation: 0, role: "pipe" },
      { type: "consumer", rotation: 2, role: "consumer" },
      { type: "corner", rotation: 1, role: "pipe" },
      { type: "corner", rotation: 3, role: "pipe" }
    ],
    [
      { type: "tee", rotation: 0, role: "pipe" },
      { type: "line", rotation: 1, role: "pipe" },
      { type: "corner", rotation: 3, role: "pipe" },
      { type: "line", rotation: 0, role: "pipe" },
      { type: "tee", rotation: 0, role: "pipe" },
      { type: "corner", rotation: 3, role: "pipe" },
      { type: "consumer", rotation: 2, role: "consumer" }
    ],
    [
      { type: "line", rotation: 0, role: "pipe" },
      { type: "corner", rotation: 1, role: "pipe" },
      { type: "line", rotation: 1, role: "pipe" },
      { type: "corner", rotation: 3, role: "pipe" },
      { type: "corner", rotation: 0, role: "pipe" },
      { type: "corner", rotation: 2, role: "pipe" },
      { type: "line", rotation: 0, role: "pipe" }
    ],
    [
      { type: "line", rotation: 0, role: "pipe" },
      { type: "line", rotation: 0, role: "pipe" },
      { type: "corner", rotation: 1, role: "pipe" },
      { type: "line", rotation: 1, role: "pipe" },
      { type: "consumer", rotation: 3, role: "consumer" },
      { type: "line", rotation: 0, role: "pipe" },
      { type: "line", rotation: 0, role: "pipe" }
    ],
    [
      { type: "corner", rotation: 0, role: "pipe" },
      { type: "corner", rotation: 3, role: "pipe" },
      { type: "corner", rotation: 0, role: "pipe" },
      { type: "line", rotation: 1, role: "pipe" },
      { type: "line", rotation: 1, role: "pipe" },
      { type: "tee", rotation: 3, role: "pipe" },
      { type: "corner", rotation: 3, role: "pipe" }
    ]
  ]
};

const state = {
  playerName: "",
  difficulty: "easy",
  board: [],
  size: 0,
  seconds: 0,
  finished: false,
  timer: null
};

function opposite(direction) {
  if (direction === "up") {
    return "down";
  }
  if (direction === "right") {
    return "left";
  }
  if (direction === "down") {
    return "up";
  }
  return "right";
}

function getSelectedDifficulty() {
  const picked = document.querySelector('input[name="difficulty"]:checked');
  return picked ? picked.value : "easy";
}

function cloneBoard(board) {
  return board.map((row) => row.map((cell) => ({ ...cell })));
}

function shuffleBoard(board) {
  const shuffled = cloneBoard(board);

  for (let row = 0; row < shuffled.length; row += 1) {
    for (let col = 0; col < shuffled[row].length; col += 1) {
      const extra = Math.floor(Math.random() * 4);
      shuffled[row][col].rotation = (shuffled[row][col].rotation + extra) % 4;
    }
  }

  return shuffled;
}

function startGame(fromSave) {
  const chosenDifficulty = fromSave ? state.difficulty : getSelectedDifficulty();
  const playerName = fromSave ? state.playerName : playerNameInput.value.trim();

  if (!playerName) {
    menuMessage.textContent = "Please enter your name first.";
    return;
  }

  if (!fromSave) {
    state.playerName = playerName;
    state.difficulty = chosenDifficulty;
    state.board = shuffleBoard(levels[chosenDifficulty]);
    state.size = state.board.length;
    state.seconds = 0;
    state.finished = false;
  }

  menuMessage.textContent = "";
  gameOverPanel.classList.add("hidden");
  playerNameValue.textContent = state.playerName;
  difficultyValue.textContent = difficultyLabel(state.difficulty);
  switchScreen("game");
  startTimer();
  renderBoard();
}

function difficultyLabel(value) {
  if (value === "medium") {
    return "Intermediate";
  }
  if (value === "hard") {
    return "Hard";
  }
  return "Easy";
}

function switchScreen(which) {
  startScreen.classList.toggle("hidden", which !== "start");
  gameScreen.classList.toggle("hidden", which !== "game");
}

function startTimer() {
  stopTimer();
  updateTime();
  state.timer = setInterval(() => {
    if (!state.finished) {
      state.seconds += 1;
      updateTime();
    }
  }, 1000);
}

function stopTimer() {
  if (state.timer) {
    clearInterval(state.timer);
    state.timer = null;
  }
}

function updateTime() {
  const minutes = String(Math.floor(state.seconds / 60)).padStart(2, "0");
  const seconds = String(state.seconds % 60).padStart(2, "0");
  timeValue.textContent = `${minutes}:${seconds}`;
}

function renderBoard() {
  boardElement.innerHTML = "";
  boardElement.style.setProperty("--size", state.size);

  const check = analyzeBoard(state.board);

  for (let row = 0; row < state.board.length; row += 1) {
    for (let col = 0; col < state.board[row].length; col += 1) {
      const cell = state.board[row][col];
      const tile = document.createElement("button");
      const pipe = document.createElement("div");
      const center = document.createElement("span");

      tile.type = "button";
      tile.className = "cell";
      tile.dataset.row = row;
      tile.dataset.col = col;
      tile.disabled = state.finished;

      pipe.className = `pipe pipe-${cell.type} rot-${cell.rotation}`;
      center.className = "pipe-center";
      pipe.append(center);
      tile.append(pipe);
      boardElement.append(tile);
    }
  }

  updateStatus(check);
}

function getConnections(cell) {
  if (cell.type === "line") {
    return cell.rotation % 2 === 0 ? ["up", "down"] : ["left", "right"];
  }

  if (cell.type === "corner") {
    if (cell.rotation === 0) {
      return ["up", "right"];
    }
    if (cell.rotation === 1) {
      return ["right", "down"];
    }
    if (cell.rotation === 2) {
      return ["down", "left"];
    }
    return ["left", "up"];
  }

  if (cell.type === "tee") {
    if (cell.rotation === 0) {
      return ["up", "right", "down"];
    }
    if (cell.rotation === 1) {
      return ["right", "down", "left"];
    }
    if (cell.rotation === 2) {
      return ["down", "left", "up"];
    }
    return ["left", "up", "right"];
  }

  if (cell.type === "source" || cell.type === "consumer") {
    if (cell.rotation === 0) {
      return ["up"];
    }
    if (cell.rotation === 1) {
      return ["right"];
    }
    if (cell.rotation === 2) {
      return ["down"];
    }
    return ["left"];
  }

  return [];
}

function neighborAt(row, col, direction) {
  if (direction === "up") {
    return [row - 1, col];
  }
  if (direction === "right") {
    return [row, col + 1];
  }
  if (direction === "down") {
    return [row + 1, col];
  }
  return [row, col - 1];
}

function analyzeBoard(board) {
  const source = findSource(board);
  const sourceKey = `${source[0]}-${source[1]}`;
  const reachable = new Set();
  const queue = [source];
  const visited = new Set([sourceKey]);
  let edges = 0;
  let openEnds = 0;

  while (queue.length > 0) {
    const current = queue.shift();
    const row = current[0];
    const col = current[1];
    const cell = board[row][col];
    const key = `${row}-${col}`;
    reachable.add(key);

    const ownConnections = getConnections(cell);

    for (let i = 0; i < ownConnections.length; i += 1) {
      const direction = ownConnections[i];
      const nextPos = neighborAt(row, col, direction);
      const nextRow = nextPos[0];
      const nextCol = nextPos[1];

      if (!board[nextRow] || !board[nextRow][nextCol]) {
        openEnds += 1;
        continue;
      }

      const nextCell = board[nextRow][nextCol];
      const nextConnections = getConnections(nextCell);

      if (!nextConnections.includes(opposite(direction))) {
        openEnds += 1;
        continue;
      }

      edges += 1;

      const nextKey = `${nextRow}-${nextCol}`;
      if (!visited.has(nextKey)) {
        visited.add(nextKey);
        queue.push([nextRow, nextCol]);
      }
    }
  }

  let totalCells = 0;
  let consumerCount = 0;
  let reachedConsumers = 0;

  for (let row = 0; row < board.length; row += 1) {
    for (let col = 0; col < board[row].length; col += 1) {
      totalCells += 1;
      const key = `${row}-${col}`;
      if (board[row][col].type === "consumer") {
        consumerCount += 1;
        if (reachable.has(key)) {
          reachedConsumers += 1;
        }
      }
    }
  }

  const realEdges = edges / 2;
  const connected = reachable.size === totalCells;
  const noCycles = realEdges === totalCells - 1;
  const allConsumersReached = consumerCount === reachedConsumers;
  const won = connected && noCycles && allConsumersReached && openEnds === 0;

  return {
    reachable,
    connected,
    noCycles,
    allConsumersReached,
    openEnds,
    won
  };
}

function findSource(board) {
  for (let row = 0; row < board.length; row += 1) {
    for (let col = 0; col < board[row].length; col += 1) {
      if (board[row][col].type === "source") {
        return [row, col];
      }
    }
  }

  return [0, 0];
}

function updateStatus(check) {
  const buttons = boardElement.querySelectorAll(".cell");

  buttons.forEach((button) => {
    const row = Number(button.dataset.row);
    const col = Number(button.dataset.col);
    const pipe = button.querySelector(".pipe");
    const key = `${row}-${col}`;

    if (check.reachable.has(key)) {
      pipe.classList.add("wet");
    } else {
      pipe.classList.remove("wet");
    }
  });

  boardElement.classList.toggle("winner", check.won);

  if (check.won) {
    statusMessage.textContent = `Finished in ${timeValue.textContent}. Every consumer has water.`;
    if (!state.finished) {
      state.finished = true;
      gameOverText.textContent = `${state.playerName} solved the ${difficultyLabel(state.difficulty).toLowerCase()} puzzle in ${timeValue.textContent}.`;
      gameOverPanel.classList.remove("hidden");
      saveResult();
      stopTimer();
      localStorage.removeItem(saveKey);
      renderBoard();
    }
    return;
  }

  if (check.openEnds > 0) {
    statusMessage.textContent = "Some pipe ends are leaking.";
    return;
  }

  if (!check.allConsumersReached) {
    statusMessage.textContent = "Not every consumer is connected to the source yet.";
    return;
  }

  if (!check.connected) {
    statusMessage.textContent = "Some parts of the network are still cut off.";
    return;
  }

  if (!check.noCycles) {
    statusMessage.textContent = "The pipes currently make a loop, so it is not a tree.";
    return;
  }

  statusMessage.textContent = "Keep rotating the pipes.";
}

function saveProgress() {
  const data = {
    playerName: state.playerName,
    difficulty: state.difficulty,
    board: state.board,
    size: state.size,
    seconds: state.seconds
  };

  localStorage.setItem(saveKey, JSON.stringify(data));
  statusMessage.textContent = "Progress saved.";
}

function loadProgress() {
  const raw = localStorage.getItem(saveKey);

  if (!raw) {
    menuMessage.textContent = "No saved game found.";
    return;
  }

  const data = JSON.parse(raw);
  state.playerName = data.playerName;
  state.difficulty = data.difficulty;
  state.board = data.board;
  state.size = data.size;
  state.seconds = data.seconds;
  state.finished = false;
  playerNameInput.value = state.playerName;
  startGame(true);
}

function saveResult() {
  const ranking = getRanking();

  ranking.push({
    name: state.playerName,
    difficulty: difficultyLabel(state.difficulty),
    seconds: state.seconds
  });

  ranking.sort((a, b) => a.seconds - b.seconds);
  localStorage.setItem(rankingKey, JSON.stringify(ranking.slice(0, 10)));
  renderRanking();
}

function getRanking() {
  const raw = localStorage.getItem(rankingKey);
  return raw ? JSON.parse(raw) : [];
}

function renderRanking() {
  const ranking = getRanking();
  leaderboardList.innerHTML = "";

  if (ranking.length === 0) {
    leaderboardList.innerHTML = "<li>No results yet.</li>";
    return;
  }

  ranking.forEach((entry) => {
    const item = document.createElement("li");
    item.textContent = `${entry.name} - ${entry.difficulty} - ${formatSeconds(entry.seconds)}`;
    leaderboardList.append(item);
  });
}

function formatSeconds(seconds) {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const left = String(seconds % 60).padStart(2, "0");
  return `${minutes}:${left}`;
}

boardElement.addEventListener("click", (event) => {
  const cellButton = event.target.closest(".cell");

  if (!cellButton || state.finished) {
    return;
  }

  const row = Number(cellButton.dataset.row);
  const col = Number(cellButton.dataset.col);

  state.board[row][col].rotation = (state.board[row][col].rotation + 1) % 4;
  renderBoard();
});

document.addEventListener("click", (event) => {
  if (event.target.closest(".start-button")) {
    startGame(false);
    return;
  }

  if (event.target.closest(".continue-button")) {
    loadProgress();
    return;
  }

  if (event.target.closest(".rules-button")) {
    rulesPanel.classList.toggle("hidden");
    return;
  }

  if (event.target.closest(".clear-ranking-button")) {
    localStorage.removeItem(rankingKey);
    renderRanking();
    return;
  }

  if (event.target.closest(".save-button")) {
    saveProgress();
    return;
  }

  if (event.target.closest(".menu-button") || event.target.closest(".game-over-menu-button")) {
    if (!state.finished) {
      saveProgress();
    }
    stopTimer();
    switchScreen("start");
    renderRanking();
  }
});

renderRanking();

// Business Logic

// Define the game state
const Players = {
  "player-1-score": 0,
  "player-2-score": 0,
  "player-3-score": 0,
  "player-4-score": 0,
  "player-5-score": 0,
  "player-6-score": 0,
};

let currentPlayerId =  document.getElementById("player-selector").value;
////new one
function rollDice() {
  const diceType = parseInt(document.getElementById("dice-type").value);
  const diceResult = Math.floor(Math.random() * diceType) + 1;
  const selectedPlayerScore = Players[currentPlayerId];
  Players[currentPlayerId] = selectedPlayerScore + diceResult;
  document.getElementById(currentPlayerId).textContent = Players[currentPlayerId];
  setNextPlayer();
}

// function setNextPlayer(playerIndex) {
//   if (playerIndex === 6) {
//     currentPlayerId = "player-1-score";
//   } else {
//     currentPlayerId = `player-${playerIndex + 1}-score`;
//   }
//   const selectedPlayerScore = Players[currentPlayerId];
//   document.querySelectorAll("tr").forEach((tr) => tr.classList.remove("selected"));
//   document.getElementById(currentPlayerId).parentNode.classList.add("selected");
// }

// document.querySelectorAll("tr").forEach((tr, index) => {
//   tr.addEventListener("click", () => {
//     const playerId = tr.children[1].id.split("-")[1];
//     setNextPlayer(playerId);
//   });
// });


function setNextPlayer() {
  const currentPlayerIndex = Number(currentPlayerId.split("-")[1]);
  if (currentPlayerIndex === 6) {
    currentPlayerId = "player-1-score";
  } else {
    currentPlayerId = `player-${currentPlayerIndex + 1}-score`;
  }
}
///new one
function selectPlayer(playerId) {
  currentPlayerId = `player-${playerId}-score`;
  const selectedPlayerScore = Players[currentPlayerId];
  document.querySelectorAll("tr").forEach((tr) => tr.classList.remove("selected"));
  document.getElementById(currentPlayerId).parentNode.classList.add("selected");
}

document.getElementById("roll-button").addEventListener("click", rollDice);

document.querySelectorAll("tr").forEach((tr) => {
  tr.addEventListener("click", () => {
    const playerId = tr.children[1].id;
    selectPlayer(playerId);
  });
});

selectPlayer(currentPlayerId); 
import './style.css';
import Scores from './score.js';
import { createGame, setScore, getAllScores } from './game.js'

const scoresA = new Scores();
if (scoresA.getStorage().length) {
  scoresA.showScores();
}

let gameId = localStorage.getItem('gameid') || '';
if (gameId === '') {
  (async () => {
    try {
      gameId = await createGame("Porag's awesome mind game");
      console.log("===GAME ID===");
      console.log(gameId, "Type of gameid = ", typeof (gameId));
      localStorage.setItem('gameid', gameId);
    } catch (error) {
      console.error(error.message);
    }
  })();
}

const sForm = document.querySelector('.form');
sForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const playername = document.getElementById('playername').value;
  const playerscore = document.getElementById('playerscore').value;
  console.log("Before setting score, gameId is = ", gameId, "Player Name: ", playername, "score: ", playerscore);
  setScore(gameId, playername, playerscore);

  setTimeout(() => {
    sForm.reset();
  }, 1500);

});

const refreshBtn = document.querySelector('.refresh');
refreshBtn.addEventListener('click', () => {
  console.log("refresh button clicked!");
  let gamesScores;
  (async () => {
    try {
      console.log("Before fetching scores, gameId is = ", gameId);
      gamesScores = await getAllScores(gameId);
      console.log("gameScores = ", gamesScores);
      const newScore = new Scores();
      newScore.addScore(gamesScores);
      newScore.showScores()
    } catch (error) {
      console.error(error.message);
    }
  })();
})



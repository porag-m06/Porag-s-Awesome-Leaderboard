import './style.css';
import Scores from './score.js';
import { createGame, setScore, getAllScores } from './game.js';

const scoresA = new Scores();
if (scoresA.getStorage().length) {
  scoresA.showScores();
}

let gameId = localStorage.getItem('gameid') || '';
if (gameId === '') {
  (async () => {
    try {
      gameId = await createGame("Porag's awesome mind game");
      localStorage.setItem('gameid', gameId);
    } catch (error) {
      /* eslint-disable */
      console.error(error.message);
      /* eslint-enable */
    }
  })();
}

const sForm = document.querySelector('.form');
sForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const playername = document.getElementById('playername').value;
  const playerscore = document.getElementById('playerscore').value;
  setScore(gameId, playername, playerscore);
  setTimeout(() => {
    sForm.reset();
  }, 1500);
});

const refreshBtn = document.querySelector('.refresh');
refreshBtn.addEventListener('click', () => {
  let gamesScores;
  (async () => {
    try {
      gamesScores = await getAllScores(gameId);
      const newScore = new Scores();
      newScore.addScore(gamesScores);
      newScore.showScores();
    } catch (error) {
      /* eslint-disable */
      console.error(error.message);
      /* eslint-enable */
    }
  })();
});

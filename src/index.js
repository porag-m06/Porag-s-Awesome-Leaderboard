import './style.css';
import Scores from './score.js';
import createGame from './game.js'

const scoresA = new Scores();
const sForm = document.querySelector('.form');

if (scoresA.getStorage().length) {
  scoresA.showScores();
}

sForm.addEventListener('submit', () => {
  const playername = document.getElementById('playername').value;
  const playerscore = document.getElementById('playerscore').value;
  const newScore = new Scores(playername, playerscore);
  newScore.addScore();
  newScore.showScores();
  sForm.reset();
});

createGame();

export default class Scores {
  constructor(name, score) {
    this.name = name;
    this.score = score;
    this.scoreList = JSON.parse(localStorage.getItem('scores')) || [];
  }

    addScore = () => {
      const { name } = this;
      const { score } = this;
      this.scoreList.push({ name, score });
      localStorage.setItem('scores', JSON.stringify(this.scoreList));
    }

    showScores = () => {
      const scoreList = document.querySelector('.score-items');
      scoreList.innerHTML = '';
      scoreList.innerHTML = '<li Class="shade-m" ><span class="pname">Name</span><span class="pscore">| Score</span></li>';

      for (let i = 0; i < this.scoreList.length; i += 1) {
        const li = document.createElement('li');
        if (i % 2) {
          li.className = 'shade';
        }
        li.innerHTML = `<span class="pname">${this.scoreList[i].name}</span><span class="pscore">| ${this.scoreList[i].score}</span>`;
        scoreList.appendChild(li);
      }
    }

    getStorage = () => this.scoreList;
}

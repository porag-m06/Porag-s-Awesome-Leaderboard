export default class Scores {
    constructor(name,score){
        this.name = name;
        this.score = score;
        this.scoreList = JSON.parse(localStorage.getItem('scores')) || [];
    }

    addScore = ()=>{
        const {name} = this;
        const {score} = this;
        this.scoreList.push({name,score});
        localStorage.setItem('scores', JSON.stringify(this.scoreList));
    }

    showScores = ()=>{
        const scoreList = document.querySelector('.score-items');
        scoreList.innerHTML ='';
        scoreList.innerHTML = `<li><span class="pname">Name</span><span class="pscore">|  Score</span></li>`;
    }
}

const createGame = async (nameOfTheGame) => {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
        method: 'POST',
        body: JSON.stringify({
            "name": nameOfTheGame
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });

    const jsonData = await response.json();
    console.log(jsonData);
    

    return jsonData.result.split(' ')[3];
}

const setScore = async (gameId, name, score) => {
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`, {
        method: 'POST',
        body: JSON.stringify({
            "user": name,
            "score": score
        }),

        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });

    const jsonData = await response.json();
    console.log(jsonData);

}

const getAllScores = async (gameId) => {
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`, {

        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });

    const jsonData = await response.json();
    console.log(jsonData);

    return jsonData.result;
}

module.exports = {createGame,setScore,getAllScores};
//export default {createGame,setScore,getAllScores};
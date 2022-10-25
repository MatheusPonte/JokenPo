const choices = ['Pedra', 'Papel', 'Tesoura']
const score = {
    person: 0,
    robot: 0,
    empate:0,

}

const savePersonChoice = (type) => {
    localStorage.setItem("personChoice", type)
    saveRobotChoice();
    checkWinner();
    console.log(score)
    ShowScore();
    return type;

};

const saveRobotChoice = () =>{
    const index = Math.floor(Math.random() * 3)
    localStorage.setItem("robotChoice", choices[index]);
    return choices[index];
};

const checkWinner = () => {
    const personChoice = localStorage.getItem('personChoice');
    const robotChoice = localStorage.getItem('robotChoice');

    if(personChoice === 'Tesoura'){
        if(robotChoice === 'Tesoura') return alert('Empatou!', score.empate += 1);
        if(robotChoice === 'Papel') return alert('Você ganhou!', score.person += 1)
        if(robotChoice === 'Pedra') return alert('Voce perdeu :(', score.robot += 1)
    }
    if(personChoice === 'Pedra'){
        if(robotChoice === 'Pedra') return alert('Empatou!', score.empate += 1);
        if(robotChoice === 'Papel') return alert('Voce perdeu :(', score.robot += 1)
        if(robotChoice === 'Tesoura') return alert('Você ganhou!', score.person += 1)
    }
    if(personChoice === 'Papel'){
        if(robotChoice === 'Papel') return alert('Empatou!', score.empate += 1);
        if(robotChoice === 'Tesoura') return alert('Voce perdeu :(', score.robot += 1)
        if(robotChoice === 'Pedra') return alert('Você ganhou!', score.person += 1)
    }
};

const resetScore = () => {
    score.person = 0,
    score.robot = 0,
    score.empate = 0,
    console.log(score)
    ShowScore();
    return score;


};


const ShowScore = () =>{
    const scorePlayer = document.querySelector('.placarPlayer')
    const scoreRobot = document.querySelector('.placarRobo')
    const scoreDraw = document.querySelector('.empates')
    scorePlayer.innerHTML = score.person
    scoreRobot.innerHTML = score.robot
    scoreDraw.innerHTML = score.empate
};


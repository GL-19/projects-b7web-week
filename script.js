let currentQuestion = 0;
let rightAnswers = 0;

showQuestion();

document.querySelectorAll('.options').forEach((element) => {
    element.addEventListener('click', optionHasBeenChosen);
});

document.querySelector('.scoreArea button').addEventListener('click', restartQuiz);

function showQuestion() {
    let rightAnswersPercent = 100 * rightAnswers / questions.length;
    let answeredQuestionsPercent = 100 * currentQuestion / questions.length;
    
    document.querySelector('.progress').style.width = `${answeredQuestionsPercent}%`;

    if (questions[currentQuestion]) {
        let q = questions[currentQuestion];
        
        document.querySelector('.scoreArea').style.display = 'none';
        document.querySelector('.questionArea').style.display = 'block';
        document.querySelector('.question').innerHTML = q.question;

        let optionsHTML = '';
        for (let i in q.options) {
            optionsHTML += `<div data-option="${i}" class="option"><span>${1 + (+i)}</span>${q.options[i]}</div>`;
        }
        document.querySelector('.options').innerHTML = optionsHTML;
    } else {
        document.querySelector('.questionArea').style.display = 'none';
        document.querySelector('.scoreArea').style.display = 'block';   
        document.querySelector('.scorePct').innerHTML = `Acertou ${rightAnswersPercent}%`; 
        document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} e acertou ${rightAnswers} ` 
    }
}

function optionHasBeenChosen(event) {
    let chosenOption = parseInt(event.target.getAttribute('data-option'));
    let answer = questions[currentQuestion].answer;
    if(chosenOption === answer) {
        rightAnswers++;
    }
    currentQuestion++;
    showQuestion();
}

function restartQuiz() {
    currentQuestion = 0;
    rightAnswers = 0;
    showQuestion();
}
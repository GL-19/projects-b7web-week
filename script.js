let currentQuestion = 0;
let rightAnswers = 0;

showQuestion();

document.querySelectorAll('.options').forEach((element) => {
    element.addEventListener('click', (event) => {
        optionNumber = event.target.innerText[0] - 1;
        let answer = questions[currentQuestion].answer;
        if(optionNumber === answer) {
            rightAnswers++;
        }
        currentQuestion++;
        showQuestion();
    });
});


function showQuestion() {
    if (questions[currentQuestion]) {
        let q = questions[currentQuestion];

        document.querySelector('.scoreArea').style.display = 'none';
        document.querySelector('.questionArea').style.display = 'block';
        document.querySelector('.question').innerHTML = q.question;

        let optionsHTML = '';
        for (let i in q.options) {
            optionsHTML += `<div class="option"><span>${1 + (+i)}</span>${q.options[i]}</div>`;
        }
        document.querySelector('.options').innerHTML = optionsHTML;
    } else {
        document.querySelector('.questionArea').style.display = 'none';
        document.querySelector('.scoreArea').style.display = 'block';   
        document.querySelector('.scorePct').innerHTML = `Acertou ${100 * rightAnswers / questions.length}%`; 
        document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} e acertou ${rightAnswers} ` 
    }
}


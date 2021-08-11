let currentQuestion = 0;

showQuestion();

document.querySelectorAll('.options').forEach((element) => {
    element.addEventListener('click', (event) => {
        currentQuestion++;
        console.log(event.target.innerHTML);
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
            optionsHTML += `<div class="option"><span>${i}</span>${q.options[i]}</div>`;
        }
        document.querySelector('.options').innerHTML = optionsHTML;
    }
}


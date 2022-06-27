document.body.addEventListener('keyup', event => {
    playSound(event.code);
})

let button = document.querySelector('button');
button.addEventListener('click', () => {
    let musicalComposition = document.getElementById('input').value
    playComposition(musicalComposition);
})

function playSound(soundId) {
    let audioElement = document.getElementById(`s_${soundId.toLowerCase()}`);
    let keyElement = document.getElementById(soundId.toLowerCase());
    if(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }  
    if(keyElement) {
        keyElement.classList.add('active');
        setTimeout(() => {
            keyElement.classList.remove('active')
        }, 250);
    }
}

function playComposition(composition) {
    let delay = 0;
    for(let compositionItem of composition) {
        setTimeout(() => {
            playSound(`key${compositionItem}`);
        }, delay);
        delay += 400;
    }
}
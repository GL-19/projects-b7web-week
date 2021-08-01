document.body.addEventListener('keyup', event => {
    playSound(event.code);
})

let button = document.querySelector('button');
button.addEventListener('click', () => {
    let composition = document.getElementById('input').value
    playComposition(composition);
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
    for(let i = 0; i < composition.length; i++) {
        setTimeout(() => {
            playSound(`key${composition[i]}`);
        }, 300 * i);
    }
}
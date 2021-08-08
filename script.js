let relogioDigital = document.querySelector(".digital");
let data = new Date();
let [horas, minutos, segundos] = [data.getHours(), data.getMinutes(), data.getSeconds()];
setInterval(atualizarHorario, 1000);

function atualizarHorario() {
    segundos++;
    if(segundos === 60) {
        segundos = 0;
        minutos++;
    }
    if(minutos === 60) {
        minutos = 0;
        horas++;
    }
    if(horas === 24) {
        horas = 0;
    }
    atualizarRelogioDigital();
}

function atualizarRelogioDigital() {
    let displayHoras, displayMinutos, displaySegundos;
    displayHoras = horas;
    displayMinutos = minutos < 10 ? `0${minutos}` : minutos;
    displaySegundos = segundos < 10 ? `0${segundos}` : segundos;
    
    relogioDigital.innerHTML = `${displayHoras}:${displayMinutos}:${displaySegundos}`;
}
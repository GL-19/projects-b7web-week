

let relogioDigital = document.querySelector(".digital");
let ponteiroSegundos = document.querySelector(".p_s");
let ponteiroMinutos = document.querySelector(".p_m");
let ponteiroHoras = document.querySelector(".p_h");

setInterval(atualizarHorario, 1000);

function atualizarHorario() {
    const data = new Date();
    let [horas, minutos, segundos] = [data.getHours(), data.getMinutes(), data.getSeconds()];
    
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;
    relogioDigital.innerHTML = `${corrigirRelogio(horas)}:${corrigirRelogio(minutos)}:${corrigirRelogio(segundos)}`;
}
function corrigirRelogio(variavel) {
    return variavel < 10 ? '0' + variavel : variavel;
}
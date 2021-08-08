let relogioDigital = document.querySelector(".digital");
let ponteiroSegundos = document.querySelector(".p_s");
let ponteiroMinutos = document.querySelector(".p_m");
let ponteiroHoras = document.querySelector(".p_h");

setInterval(atualizarHorario, 1000);

function atualizarHorario() {
    const horarioAtual = new Date();
    let horas = horarioAtual.getHours(); 
    let minutos = horarioAtual.getMinutes();
    let segundos = horarioAtual.getSeconds();
    
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;
    relogioDigital.innerHTML = `${corrigirRelogio(horas)}:${corrigirRelogio(minutos)}:${corrigirRelogio(segundos)}`;
}
function corrigirRelogio(unidade) {
    return unidade < 10 ? '0' + unidade : unidade;
}
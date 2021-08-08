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
    
    relogioDigital.innerHTML = `${corrigirRelogio(horas)}:${corrigirRelogio(minutos)}:${corrigirRelogio(segundos)}`;

    let posicaoHoras = ((360 / 12) * horas) - 90;
    let posicaoMinutos = ((360 / 60) * minutos) - 90;
    let posicaoSegundos = ((360 / 60) * segundos) - 90;


    ponteiroHoras.style.transform = `rotate(${posicaoHoras}deg)`;
    ponteiroMinutos.style.transform = `rotate(${posicaoMinutos}deg)`;
    ponteiroSegundos.style.transform = `rotate(${posicaoSegundos}deg)`;

}
function corrigirRelogio(unidade) {
    return unidade < 10 ? '0' + unidade : unidade;
}
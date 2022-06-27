const formulario = document.getElementsByClassName('busca')[0];
formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    let input = document.getElementById('searchInput').value;
    if(input !== '') {
        limparInformacoes();
        mostrarAviso("Pesquisa em andamento");
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=1120951205be0eef5c1ba0338d1431ef&units=metric&lang=pt_br`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                limparInformacoes();
                document.querySelector(".resultado").style.display = "block";
                AtualizarInformacoes(data);  
            })  
            .catch(() => {
                limparInformacoes();
                mostrarAviso("Cidade não encontrada");
            });
       
    } else {
        limparInformacoes();
    }  
})

function AtualizarInformacoes(dados) {
    let {
        name: nomeCidade,
        sys: {country: nomePais},
        main: {temp: temperatura, humidity: umidade},
        wind: {speed: velocidadeVento, deg: anguloVento},
        weather: [{icon: imgClima}]
    } = dados;
    
    document.querySelector(".titulo").innerHTML = `${nomeCidade}, ${nomePais}`;
    document.querySelector(".tempInfo").innerHTML = `${temperatura} <sup>ºC</sup>`;
    document.querySelector(".umidadeInfo").innerHTML = `${umidade}%`;
    document.querySelector(".ventoInfo").innerHTML = `${velocidadeVento} <span>km/h</span>`; 
    document.querySelector(".ventoPonto").style.transform = `rotate(${anguloVento - 90}deg)`;
    document.getElementById('weatherImg').src = `http://openweathermap.org/img/wn/${imgClima}.png`
}

function limparInformacoes() {
    mostrarAviso('');
    document.querySelector(".resultado").style.display = "none";  
}
function mostrarAviso(mensagem) {
    document.querySelector('.aviso').innerHTML = mensagem;
}


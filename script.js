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
                limparInformacoes();
                document.querySelector(".resultado").style.display = "block";
                AtualizarInformacoes(data);  
            })  
            .catch(() => {
                limparInformacoes();
                mostrarAviso("Cidade não encontrada");
            });
       
    } else {
        aviso.innerHTML = "Digite o nome da cidade";
    }  
})

function AtualizarInformacoes(dados) {
    document.querySelector(".titulo").innerHTML = `${dados.name}, ${dados.sys.country}`;
    document.querySelector(".tempInfo").innerHTML = `${dados.main.temp} <sup>ºC</sup>`;
    document.querySelector(".ventoInfo").innerHTML = `${dados.wind.speed} <span>km/h</span>`; 
    document.querySelector(".ventoPonto").style.transform = `rotate(${dados.wind.deg - 90}deg)`;
    document.getElementById('weatherImg').src = `http://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

function limparInformacoes() {
    mostrarAviso('');
    document.querySelector(".resultado").style.display = "none";  
}
function mostrarAviso(mensagem) {
    document.querySelector('.aviso').innerHTML = mensagem;
}


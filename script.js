const formulario = document.getElementsByClassName('busca')[0];
formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    let input = document.getElementById('searchInput').value;
    let aviso = document.querySelector('.aviso');
    if(input !== '') {
        aviso.innerHTML = "Pesquisa em andamento";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=1120951205be0eef5c1ba0338d1431ef&units=metric&lang=pt_br`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                aviso.innerHTML = null;
                document.querySelector(".resultado").style.display = "block";
                AtualizarInformações(data);  
            })  
            .catch(() => {
                aviso.innerHTML = "Cidade não encontrada"
                document.querySelector(".resultado").style.display = "none";
            });
       
    } else {
        aviso.innerHTML = "Digite o nome da cidade";
    }  
})

function AtualizarInformações(dados) {
    document.querySelector(".titulo").innerHTML = `${dados.name}, ${dados.sys.country}`;
    document.querySelector(".tempInfo").innerHTML = `${dados.main.temp} <sup>ºC</sup>`;
    document.querySelector(".ventoInfo").innerHTML = `${dados.wind.speed} <span>km/h</span>`; 
    document.querySelector(".ventoPonto").style.transform = `rotate(${dados.wind.deg - 90}deg)`;
    document.getElementById('weatherImg').src = `http://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}



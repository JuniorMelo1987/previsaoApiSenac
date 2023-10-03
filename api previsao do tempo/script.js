

const key = "98c220792d3899b607ae9d3ddd3b06d0"

function colocarDadosNaTela(dados){
    document.querySelector('.cidade').innerHTML = "Tempo em " + dados.name
    document.querySelector('.temp').innerHTML = Math.floor(dados.main.temp) + "ºC"
    document.querySelector('.texto-previsao').innerHTML = dados.weather[0].description
    document.querySelector('.umidade').innerHTML ="Umidade " +  dados.main. humidity + "%"
    document.querySelector('.img-previsao').src= `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}


async function buscarCidade(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
    console.log(dados)

    colocarDadosNaTela(dados)
}


function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)

}
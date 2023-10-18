export function Elements(){
    const inputCidade = document.querySelector(".input-cidade")
    const buttonLoopa = document.querySelector('.img-busca')
    const cityName = document.querySelector("caixa-media .cidade")
    const temp = document.querySelector('.temp')
    const prevision = document.querySelector('.texto-previsao')

    return {
        inputCidade,
        buttonLoopa,
        cityName,
        temp,
        prevision
    }
}

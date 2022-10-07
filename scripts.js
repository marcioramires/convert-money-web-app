const button = document.getElementsByTagName('button')[0]
const option = document.getElementById('select-currency')

const dolarImg = document.getElementById('currency-img-dolar')
const euroImg = document.getElementById('currency-img-euro')
const bitcoinImg = document.getElementById('currency-img-bitcoin')

const dolar = 5.2
const euro = 5.12
const bitcoin = 104545.57

const currencyConverter = () => {
    const realValue = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value')
    const currencyValue = document.getElementById('currency-value')
    const currencyValueText = document.getElementById('currency-text')
    const currency = document.getElementById('select-currency').value

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(realValue)

    if (currency === "US$ Dólar americano") {
        currencyValue.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(realValue / dolar)
        currencyValueText.innerHTML = "Dólar Americano"
        dolarImg.src = "./assets/united-states.png"
        euroImg.src = "./assets/united-states.png"
        bitcoinImg.src = "./assets/united-states.png"
    }
    if (currency === "€ Euro") {
        currencyValue.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(realValue / euro)
        currencyValueText.innerHTML = "Euro"
        dolarImg.src = "./assets/euro.png"
        euroImg.src = "./assets/euro.png"
        bitcoinImg.src = "./assets/euro.png"
    }
    if (currency === "Bitcoin") {
        currencyValue.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'BTC' }).format(realValue / bitcoin)
        currencyValueText.innerHTML = "Bitcoin"
        dolarImg.src = "./assets/bitcoin.png"
        euroImg.src = "./assets/bitcoin.png"
        bitcoinImg.src = "./assets/bitcoin.png"
    }
}

const currencyChange = () => currencyConverter()

button.addEventListener('click', currencyConverter)
option.addEventListener('change', currencyChange)

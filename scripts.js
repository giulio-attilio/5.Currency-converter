
const convertButton = document.querySelector("#convert-button")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-value").value

    const dolarToday = 4.9

    const convertionResult = inputCurrencyValue / dolarToday

    const inputResutToConvert = document.querySelector(".input-result-to-convert")

    inputResutToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    const inputResult = document.querySelector(".input-result")

    inputResult.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(convertionResult)

    const valueConverted = document.querySelector(".input-result")
    
}

convertButton.addEventListener("click", convertValues)






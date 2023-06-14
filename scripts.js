
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

    const valueConverted = document.querySelector(".input-result")

    console.log(valueToConvert)
}

convertButton.addEventListener("click", convertValues)






// API Endpoint template - https://restcountries.com/v3.1/name/{countryName}
const apiEndpoint = "https://restcountries.com/v3.1/name/"

function clearDisplayCard() {
    const errorMsgElement = document.getElementById('errorMsg')
    const countryCardElement = document.getElementById('countryCard')

    errorMsgElement.style.display = 'none'
    countryCardElement.style.display = 'none'
}

async function getDataFromApi(countryName) {
    const data = []
    try {
        const completeApiEndpoint = apiEndpoint + countryName
        const countryInfo = await fetch(completeApiEndpoint)
        const countryInfoJson = await countryInfo.json()
        data.push(countryInfoJson) // Push object to array
        // return data
        return data
    }

    catch (err) {
        console.log(err)
    }
}

const searchCountry = async () => {
    // Get user's input
    const userInput = document.getElementById('countryInput').value

    // Input validation
    if (userInput.trim() === '') {
        const errorMsgElement = document.getElementById('errorMsg')
        errorMsg.style.display = 'block'
        errorMsg.innerText = 'Please enter a valid input!'
        return;
    }

    const countryData = await getDataFromApi(userInput)
    const countryCardElement = document.getElementById('countryCard')
    countryCardElement.style.display = 'block'

    console.log(countryData[0][0].name.official)
    console.log(countryData[0][0].capital[0])
    console.log(countryData[0][0].population)
    console.log(countryData[0][0].flags.svg)
}
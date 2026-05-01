// API Endpoint template - https://restcountries.com/v3.1/name/{countryName}
const apiEndpoint = "https://restcountries.com/v3.1/name/"

async function getDataFromApi(countryName) {
    data = []
    try {
        completeApiEndpoint = apiEndpoint + countryName
        const countryInfo = await fetch(completeApiEndpoint)
        const countryInfoJson = await countryInfo.json()
        data.push(countryInfoJson) // Push object to array
        return data
    }

    catch(err) {
        console.log(err)
    }
}

const searchCountry = () =>  {
    // Get user's input
    const userInput = document.getElementById('countryInput').value

    // Input validation
    if (userInput.trim() === '') {
        errorMsgElement = document.getElementById('errorMsg')
        errorMsg.style.display = 'block'
        errorMsg.innerText = 'Please enter a valid input!'
        return;
    }

    getDataFromApi(userInput)
}